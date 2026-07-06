import React from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { useGetDashboardStats, getGetDashboardStatsQueryKey, useGetRecentAdmissions, getGetRecentAdmissionsQueryKey } from "@workspace/api-client-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, CheckCircle, IndianRupee, Clock } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

export default function Dashboard() {
  const { data: stats, isLoading: statsLoading } = useGetDashboardStats({
    query: { queryKey: getGetDashboardStatsQueryKey() }
  });

  const { data: recentAdmissions, isLoading: admissionsLoading } = useGetRecentAdmissions({
    query: { queryKey: getGetRecentAdmissionsQueryKey() }
  });

  // Mock data for charts if API doesn't provide time-series data
  const chartData = [
    { name: 'Jan', admissions: 12 },
    { name: 'Feb', admissions: 19 },
    { name: 'Mar', admissions: 35 },
    { name: 'Apr', admissions: 50 },
    { name: 'May', admissions: 82 },
    { name: 'Jun', admissions: 45 },
  ];

  const pieData = stats ? [
    { name: 'Collected', value: stats.feeCollected },
    { name: 'Pending', value: stats.pendingFees },
  ] : [];
  const COLORS = ['#3b82f6', '#ef4444'];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <PageLayout>
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
        {/* Dashboard Header */}
        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Admin Dashboard Preview</h1>
            <p className="text-sm text-slate-500 mt-1">Overview of your institution's digital performance via SkyForger ERP.</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Total Students</p>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {statsLoading ? <Skeleton className="h-8 w-20" /> : stats?.totalStudents}
                    </h3>
                  </div>
                  <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Today's Attendance</p>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {statsLoading ? <Skeleton className="h-8 w-20" /> : `${stats?.attendancePercentage}%`}
                    </h3>
                  </div>
                  <div className="h-12 w-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Fees Collected</p>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {statsLoading ? <Skeleton className="h-8 w-24" /> : formatCurrency(stats?.feeCollected || 0)}
                    </h3>
                  </div>
                  <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600">
                    <IndianRupee className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Admissions (Month)</p>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {statsLoading ? <Skeleton className="h-8 w-16" /> : stats?.thisMonthAdmissions}
                    </h3>
                  </div>
                  <div className="h-12 w-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Admissions Trend (2025)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                      <Tooltip 
                        cursor={{fill: '#f1f5f9'}}
                        contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                      />
                      <Bar dataKey="admissions" fill="#3b82f6" radius={[4, 4, 0, 0]} maxBarSize={50} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fee Status Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  {statsLoading ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <Skeleton className="h-[200px] w-[200px] rounded-full" />
                    </div>
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value: number) => formatCurrency(value)} />
                        <Legend verticalAlign="bottom" height={36} />
                      </PieChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Admissions Table */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Online Admissions</CardTitle>
            </CardHeader>
            <CardContent>
              {admissionsLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Student Name</TableHead>
                        <TableHead>Course</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentAdmissions?.length ? (
                        recentAdmissions.map((admission) => (
                          <TableRow key={admission.id}>
                            <TableCell className="text-slate-500 whitespace-nowrap">
                              {new Date(admission.createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell className="font-medium">{admission.studentName}</TableCell>
                            <TableCell>{admission.course}</TableCell>
                            <TableCell>{admission.phone}</TableCell>
                            <TableCell>
                              <Badge variant={admission.status === 'pending' ? 'secondary' : 'default'} className="capitalize">
                                {admission.status || 'New'}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center py-6 text-slate-500">
                            No recent admissions found.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}