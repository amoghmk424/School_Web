import * as schema from "./schema";

// Mock desc function
export const desc = (column: any) => column;

// Mock data instead of real database
const mockTestimonials = [
  { id: 1, name: "Ananya Rao", role: "Alumnus", institution: "IISc Bengaluru", content: "The foundation I got here was incredible. The faculty pushed me to achieve things I never thought possible.", rating: 5, avatarUrl: null },
  { id: 2, name: "Rahul Verma", role: "Parent", institution: "Green Valley Parent", content: "My son's confidence and academic performance improved drastically within a year. Highly recommend!", rating: 5, avatarUrl: null },
  { id: 3, name: "Priya Sharma", role: "Alumnus", institution: "NIT Surathkal", content: "The competitive environment and supportive teachers helped me secure a seat in my dream engineering college.", rating: 5, avatarUrl: null },
  { id: 4, name: "Dr. Suresh Kumar", role: "Educationist", institution: "Karnataka Board", content: "A model institution that truly believes in holistic education. Visited last year and was impressed.", rating: 5, avatarUrl: null },
  { id: 5, name: "Meera Patel", role: "Alumnus", institution: "MS Ramaiah Medical College", content: "NEET preparation here was top-notch. Regular tests and personal guidance made all the difference.", rating: 5, avatarUrl: null },
  { id: 6, name: "Arjun Nair", role: "Student", institution: "2nd PU Science", content: "Love the labs and the sports facilities. Balancing studies and extracurriculars is easy here.", rating: 5, avatarUrl: null },
];

const mockAdmissions: any[] = [
  { id: 1, name: "Student One", email: "student1@example.com", phone: "1234567890", course: "Science", createdAt: new Date(Date.now() - 86400000) },
  { id: 2, name: "Student Two", email: "student2@example.com", phone: "0987654321", course: "Commerce", createdAt: new Date(Date.now() - 172800000) },
];

const mockContacts: any[] = [
  { id: 1, name: "Contact One", email: "contact1@example.com", message: "Hello", createdAt: new Date() },
];

let nextAdmissionId = 3;
let nextContactId = 2;

// Mock sql function
export const sql = (strings: TemplateStringsArray, ...values: any[]) => ({
  // Just a placeholder for type checking
});

// Mock db object
export const db = {
  select: (fields?: any) => ({
    from: (table: any) => {
      let data: any[] = [];
      if (table === schema.testimonialsTable) {
        data = mockTestimonials;
      } else if (table === schema.admissionsTable) {
        data = mockAdmissions;
      } else if (table === schema.contactsTable) {
        data = mockContacts;
      }
      
      // Return an object with query builder methods
      return {
        orderBy: (orderByFn: any) => {
          // Simple mock for orderBy(desc)
          return {
            limit: (n: number) => Promise.resolve(data.slice(0, n)),
            then: (resolve: any) => resolve(data),
          };
        },
        limit: (n: number) => Promise.resolve(data.slice(0, n)),
        where: (whereFn: any) => {
          // For dashboard stats, return count based on mock data
          if (fields?.count) {
            return Promise.resolve([{ count: data.length }]);
          }
          return Promise.resolve(data);
        },
        then: (resolve: any) => {
          if (fields?.count) {
            // For count queries
            resolve([{ count: data.length }]);
          } else {
            resolve(data);
          }
        },
      };
    },
  }),
  insert: (table: any) => ({
    values: (values: any) => ({
      returning: () => {
        if (table === schema.admissionsTable) {
          const newAdmission = { ...values, id: nextAdmissionId++, createdAt: new Date() };
          mockAdmissions.unshift(newAdmission);
          return Promise.resolve([newAdmission]);
        } else if (table === schema.contactsTable) {
          const newContact = { ...values, id: nextContactId++, createdAt: new Date() };
          mockContacts.unshift(newContact);
          return Promise.resolve([newContact]);
        }
        return Promise.resolve([{ id: Date.now() }]);
      },
    }),
  }),
};

export const pool = null;
export * from "./schema";
