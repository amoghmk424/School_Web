import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const galleryItems = [
  { category: "Campus", title: "Main Campus Building", color: "from-blue-800 to-blue-950" },
  { category: "Sports", title: "Annual Sports Day 2024", color: "from-blue-700 to-blue-900" },
  { category: "Cultural", title: "Cultural Fest — Tarang", color: "from-violet-700 to-violet-900" },
  { category: "Labs", title: "Chemistry Lab Session", color: "from-teal-700 to-teal-900" },
  { category: "Classroom", title: "Interactive Smart Class", color: "from-indigo-700 to-indigo-900" },
  { category: "Events", title: "Prize Distribution Day", color: "from-amber-700 to-amber-900" },
  { category: "Sports", title: "Basketball Tournament", color: "from-rose-700 to-rose-900" },
  { category: "Cultural", title: "Science Exhibition 2024", color: "from-cyan-700 to-cyan-900" },
  { category: "Campus", title: "Library Reading Zone", color: "from-slate-700 to-slate-900" },
  { category: "Events", title: "Graduation Ceremony 2023", color: "from-yellow-700 to-yellow-900" },
  { category: "Labs", title: "Biology Practical Session", color: "from-lime-700 to-lime-900" },
  { category: "Cultural", title: "Annual Day Performance", color: "from-fuchsia-700 to-fuchsia-900" },
];

const categories = ["All", "Campus", "Sports", "Cultural", "Labs", "Classroom", "Events"];

const fadeUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.05, duration: 0.4 } }),
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary-foreground/70 font-semibold tracking-widest uppercase text-sm mb-3">Life at Our College</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              A glimpse into the vibrant, active life of our campus — from classrooms to sports fields, stages to labs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-muted/40 border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-testid={`btn-filter-${cat.toLowerCase()}`}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-white border border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  layout
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                  onClick={() => setLightbox(galleryItems.indexOf(item))}
                  data-testid={`gallery-item-${i}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                    <span className="text-white text-xs font-semibold text-center leading-tight">{item.title}</span>
                    <span className="text-white/70 text-xs mt-1">{item.category}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white text-xs font-medium leading-tight line-clamp-2">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">No photos in this category yet.</div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white"
              onClick={() => setLightbox(null)}
              data-testid="btn-close-lightbox"
            >
              <X className="h-7 w-7" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`aspect-video rounded-2xl bg-gradient-to-br ${galleryItems[lightbox].color} flex items-end p-8`}>
                <div>
                  <div className="text-white/70 text-sm mb-1">{galleryItems[lightbox].category}</div>
                  <div className="text-white text-xl font-bold">{galleryItems[lightbox].title}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
