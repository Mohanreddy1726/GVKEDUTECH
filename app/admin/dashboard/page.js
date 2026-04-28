"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { LogOut, Calculator, GraduationCap, RefreshCw, Phone, Mail, MessageCircle, FileSpreadsheet, Play } from "lucide-react";
import * as XLSX from "xlsx";

export default function DashboardPage() {
  const router = useRouter();
  const [data, setData] = useState({
    contactSubmissions: [],
    collegePredictorSubmissions: [],
    budgetCalculatorSubmissions: [],
    applySubmissions: [],
    blogPosts: [],
    videoTestimonials: [],
  });
  const [activeTab, setActiveTab] = useState("contact");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("adminLoggedIn");
    if (!isLoggedIn) {
      router.push("/admin/login");
      return;
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [submissionsRes, blogRes, videoRes] = await Promise.all([
        fetch("/api/submissions"),
        fetch("/api/blog/"),
        fetch("/api/video-testimonials"),
      ]);

      const submissionsData = submissionsRes.ok ? await submissionsRes.json() : {
        contactSubmissions: [],
        collegePredictorSubmissions: [],
        budgetCalculatorSubmissions: [],
        applySubmissions: [],
      };

      const blogPosts = blogRes.ok ? await blogRes.json() : [];
      const videoTestimonials = videoRes.ok ? await videoRes.json() : [];

      setData({ ...submissionsData, blogPosts, videoTestimonials });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to load data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminLoggedIn");
    router.push("/admin/login");
  };

  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const exportToExcel = (dataArray, filename, headers) => {
    const ws = XLSX.utils.json_to_sheet(
      dataArray.map((item) => {
        const row = {};
        headers.forEach((h) => {
          row[h.label] = item[h.key] || "N/A";
        });
        return row;
      })
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, filename);
    XLSX.writeFile(wb, `${filename}_${new Date().toISOString().split("T")[0]}.xlsx`);
    toast({ title: "Exported", description: `${filename}.xlsx downloaded`, variant: "success" });
  };

  const tabs = [
    { id: "contact", label: "Contact Form", icon: MessageCircle, count: data.contactSubmissions.length },
    { id: "predictor", label: "College Predictor", icon: GraduationCap, count: data.collegePredictorSubmissions.length },
    { id: "budget", label: "Budget Calculator", icon: Calculator, count: data.budgetCalculatorSubmissions.length },
    { id: "apply", label: "Apply Form", icon: FileSpreadsheet, count: data.applySubmissions.length },
    { id: "blog", label: "Blog Management", icon: FileSpreadsheet, count: data.blogPosts?.length || 0 },
    { id: "videos", label: "Video Testimonials", icon: Play, count: data.videoTestimonials?.length || 0 },
  ];

  const contactHeaders = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "Message", key: "message" },
    { label: "Date", key: "createdAt" },
  ];

  const predictorHeaders = [
    { label: "Name", key: "name" },
    { label: "Phone", key: "phone" },
    { label: "NEET Score", key: "neetScore" },
    { label: "Category", key: "category" },
    { label: "Budget", key: "budget" },
    { label: "Country", key: "country" },
    { label: "Date", key: "createdAt" },
  ];

  const budgetHeaders = [
    { label: "Name", key: "name" },
    { label: "Phone", key: "phone" },
    { label: "Program", key: "programType" },
    { label: "Country", key: "country" },
    { label: "Living", key: "livingPreference" },
    { label: "Est. Budget", key: "estimatedBudget" },
    { label: "Date", key: "createdAt" },
  ];

  const applyHeaders = [
    { label: "Name", key: "fullName" },
    { label: "Father", key: "fatherName" },
    { label: "Mother", key: "motherName" },
    { label: "Gender", key: "gender" },
    { label: "DOB", key: "dob" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "Country", key: "country" },
    { label: "NEET Score", key: "neetScore" },
    { label: "12th %", key: "percentage" },
    { label: "Date", key: "createdAt" },
  ];

  const blogHeaders = [
    { label: "Title", key: "title" },
    { label: "Author", key: "author" },
    { label: "Category", key: "category" },
    { label: "Tags", key: "tags" },
    { label: "Date", key: "createdAt" },
  ];

  const galleryHeaders = [
    { label: "Title", key: "title" },
    { label: "Category", key: "category" },
    { label: "Caption", key: "caption" },
    { label: "Location", key: "location" },
    { label: "Featured", key: "featured" },
  ];

  const renderExportButtons = (dataArray, filename, headers) => (
    <div className="flex gap-2 mb-4">
      <Button size="sm" variant="outline" onClick={() => exportToExcel(dataArray, filename, headers)}>
        <FileSpreadsheet className="w-4 h-4 mr-2" />
        Export Excel
      </Button>
    </div>
  );

  return (
    <PageLayout>
      <div className="min-h-screen py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage all your form submissions</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={fetchData} disabled={isLoading}>
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
              <Button variant="destructive" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>

          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "accent" : "outline"}
                onClick={() => {
                  if (tab.id === "blog") {
                    router.push("/admin/blog");
                  } else if (tab.id === "videos") {
                    router.push("/admin/video-testimonials");
                  } else {
                    setActiveTab(tab.id);
                  }
                }}
                className="flex items-center gap-2"
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                <Badge variant="secondary" className="ml-1">{tab.count}</Badge>
              </Button>
            ))}
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <RefreshCw className="w-8 h-8 animate-spin text-accent" />
            </div>
          ) : (
            <>
              {activeTab === "contact" && (
                <div className="grid gap-4">
                  {renderExportButtons(data.contactSubmissions, "Contact_Submissions", contactHeaders)}
                  {data.contactSubmissions.length === 0 ? (
                    <Card><CardContent className="p-8 text-center text-muted-foreground">No contact form submissions yet</CardContent></Card>
                  ) : (
                    data.contactSubmissions.map((item, index) => (
                      <Card key={item._id || index} className="border-l-4 border-l-accent">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-bold text-lg">{item.name}</h3>
                              <p className="text-sm text-muted-foreground">{formatDate(item.createdAt)}</p>
                            </div>
                            <Badge variant="outline">Contact</Badge>
                          </div>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-muted-foreground" />
                              <span>{item.phone || "N/A"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">{item.email || "N/A"}</span>
                            </div>
                          </div>
                          {item.message && (
                            <div className="mt-4 p-3 bg-muted rounded-lg">
                              <p className="text-sm font-medium mb-1">Message:</p>
                              <p className="text-sm text-muted-foreground">{item.message}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              )}

              {activeTab === "predictor" && (
                <div className="grid gap-4">
                  {renderExportButtons(data.collegePredictorSubmissions, "College_Predictor", predictorHeaders)}
                  {data.collegePredictorSubmissions.length === 0 ? (
                    <Card><CardContent className="p-8 text-center text-muted-foreground">No college predictor submissions yet</CardContent></Card>
                  ) : (
                    data.collegePredictorSubmissions.map((item, index) => (
                      <Card key={item._id || index} className="border-l-4 border-l-blue-500">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-bold text-lg">{item.name}</h3>
                              <p className="text-sm text-muted-foreground">{formatDate(item.createdAt)}</p>
                            </div>
                            <Badge variant="outline">Predictor</Badge>
                          </div>
                          <div className="grid md:grid-cols-4 gap-4">
                            <div>
                              <p className="text-xs text-muted-foreground">Phone</p>
                              <p className="font-medium">{item.phone || "N/A"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">NEET Score</p>
                              <p className="font-medium">{item.neetScore || "N/A"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Category</p>
                              <p className="font-medium">{item.category || "N/A"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Budget</p>
                              <p className="font-medium">₹{item.budget || "N/A"} Lakh</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <p className="text-xs text-muted-foreground">Preferred Country</p>
                            <p className="font-medium">{item.country === "all" ? "All Countries" : item.country || "N/A"}</p>
                          </div>
                          <div className="mt-2">
                            <Badge variant="secondary">{item.matchedColleges || 0} Colleges Matched</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              )}

              {activeTab === "budget" && (
                <div className="grid gap-4">
                  {renderExportButtons(data.budgetCalculatorSubmissions, "Budget_Calculator", budgetHeaders)}
                  {data.budgetCalculatorSubmissions.length === 0 ? (
                    <Card><CardContent className="p-8 text-center text-muted-foreground">No budget calculator submissions yet</CardContent></Card>
                  ) : (
                    data.budgetCalculatorSubmissions.map((item, index) => (
                      <Card key={item._id || index} className="border-l-4 border-l-purple-500">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-bold text-lg">{item.name}</h3>
                              <p className="text-sm text-muted-foreground">{formatDate(item.createdAt)}</p>
                            </div>
                            <Badge variant="outline">Budget</Badge>
                          </div>
                          <div className="grid md:grid-cols-4 gap-4">
                            <div>
                              <p className="text-xs text-muted-foreground">Phone</p>
                              <p className="font-medium">{item.phone || "N/A"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Program</p>
                              <p className="font-medium">{item.programType || "N/A"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Country</p>
                              <p className="font-medium">{item.country || "N/A"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Living</p>
                              <p className="font-medium">{item.livingPreference || "N/A"}</p>
                            </div>
                          </div>
                          {item.estimatedBudget && (
                            <div className="mt-4">
                              <Badge variant="secondary" className="text-lg px-3 py-1">{item.estimatedBudget}</Badge>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              )}

              {activeTab === "apply" && (
                <div className="grid gap-4">
                  {renderExportButtons(data.applySubmissions, "Apply_Form", applyHeaders)}
                  {data.applySubmissions.length === 0 ? (
                    <Card><CardContent className="p-8 text-center text-muted-foreground">No apply form submissions yet</CardContent></Card>
                  ) : (
                    data.applySubmissions.map((item, index) => (
                      <Card key={item._id || index} className="border-l-4 border-l-green-500">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-bold text-lg">{item.fullName}</h3>
                              <p className="text-sm text-muted-foreground">{formatDate(item.createdAt)}</p>
                            </div>
                            <Badge variant="outline">Application</Badge>
                          </div>
                          <div className="grid md:grid-cols-4 gap-4 mb-4">
                            <div>
                              <p className="text-xs text-muted-foreground">Father&apos;s Name</p>
                              <p className="font-medium">{item.fatherName || "N/A"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Mother&apos;s Name</p>
                              <p className="font-medium">{item.motherName || "N/A"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Gender</p>
                              <p className="font-medium">{item.gender || "N/A"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">DOB</p>
                              <p className="font-medium">{item.dob || "N/A"}</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-4 gap-4">
                            <div>
                              <p className="text-xs text-muted-foreground">Email</p>
                              <p className="font-medium text-sm">{item.email || "N/A"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Phone</p>
                              <p className="font-medium">{item.phone || "N/A"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Country</p>
                              <p className="font-medium">{item.country || "N/A"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Passport</p>
                              <p className="font-medium">{item.passportStatus || "N/A"}</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-3 gap-4 mt-4">
                            <div>
                              <p className="text-xs text-muted-foreground">NEET Score</p>
                              <p className="font-medium">{item.neetScore || "N/A"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Caste</p>
                              <p className="font-medium">{item.caste || "N/A"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">12th %</p>
                              <p className="font-medium">{item.percentage ? `${item.percentage}%` : "N/A"}</p>
                            </div>
                          </div>
                          {item.message && (
                            <div className="mt-4 p-3 bg-muted rounded-lg">
                              <p className="text-sm font-medium mb-1">Message:</p>
                              <p className="text-sm text-muted-foreground">{item.message}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
