"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { LogOut, Calculator, GraduationCap, RefreshCw, Phone, Mail, MessageCircle, FileSpreadsheet, Play, GitCompareArrows, Globe, Building2, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
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
        smartComparisonSubmissions: [],
        roiPlannerSubmissions: [],
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

  // ─────────────────────────────────────────────────────────────────
  // GROUPING HELPERS — group submissions by (name + phone) within
  // each tool. UI-only aggregation; original DB rows untouched.
  // ─────────────────────────────────────────────────────────────────
  const [expandedGroups, setExpandedGroups] = useState({});

  const normalizePhone = (raw) => {
    if (raw === undefined || raw === null) return "";
    const digits = String(raw).replace(/\D/g, "");
    // Strip leading country code (91 for India) when 12+ digits
    if (digits.length > 10 && digits.endsWith(digits.slice(-10))) {
      return digits.slice(-10);
    }
    return digits || String(raw).trim().toLowerCase();
  };

  const normalizeName = (raw) =>
    String(raw || "").trim().toLowerCase().replace(/\s+/g, " ");

  const groupKey = (item) =>
    `${normalizeName(item.name || item.fullName)}|${normalizePhone(item.phone)}`;

  const groupSubmissions = (rows) => {
    if (!Array.isArray(rows)) return [];
    // Sort newest-first so .latest === rows[0] per group.
    const sorted = [...rows].sort(
      (a, b) =>
        new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );
    const map = new Map();
    for (const item of sorted) {
      const key = groupKey(item);
      if (!map.has(key)) {
        map.set(key, {
          key,
          name: item.name || item.fullName || "Unknown",
          phone: item.phone || "",
          count: 0,
          latest: item,
          items: [],
        });
      }
      const g = map.get(key);
      g.count += 1;
      g.items.push(item);
      // First-seen in sorted order is the latest — keep it stable.
      if (g.count === 1) g.latest = item;
    }
    return Array.from(map.values()).sort((a, b) => {
      const ad = new Date(a.latest?.createdAt || 0).getTime();
      const bd = new Date(b.latest?.createdAt || 0).getTime();
      return bd - ad;
    });
  };

  const toggleGroup = (tabKey, groupKeyStr) => {
    setExpandedGroups((prev) => {
      const tab = prev[tabKey] || {};
      const next = { ...prev, [tabKey]: { ...tab } };
      next[tabKey][groupKeyStr] = !tab[groupKeyStr];
      return next;
    });
  };

  // Per-tab grouped submissions (memoised)
  const grouped = {
    contact: useMemo(
      () => groupSubmissions(data.contactSubmissions),
      [data.contactSubmissions]
    ),
    predictor: useMemo(
      () => groupSubmissions(data.collegePredictorSubmissions),
      [data.collegePredictorSubmissions]
    ),
    budget: useMemo(
      () => groupSubmissions(data.budgetCalculatorSubmissions),
      [data.budgetCalculatorSubmissions]
    ),
    apply: useMemo(
      () => groupSubmissions(data.applySubmissions),
      [data.applySubmissions]
    ),
    compare: useMemo(
      () => groupSubmissions(data.smartComparisonSubmissions),
      [data.smartComparisonSubmissions]
    ),
    roi: useMemo(
      () => groupSubmissions(data.roiPlannerSubmissions),
      [data.roiPlannerSubmissions]
    ),
  };

  // Convenience wrapper to render a grouped list using a per-row component
  // and a per-tab tint.
  const GroupedList = ({ tabKey, groups, renderRow, tintClass }) => {
    if (groups.length === 0) return null;
    return (
      <div className="grid gap-4">
        {groups.map((g) => {
          const isOpen = !!expandedGroups[tabKey]?.[g.key];
          return (
            <div key={g.key} className="grid gap-2">
              {/* LATEST (always visible) */}
              <div className="relative">
                {renderRow(g.latest, g.key, false, g.count)}
                {g.count > 1 && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleGroup(tabKey, g.key)}
                    className="absolute top-4 right-4 gap-1"
                    aria-label={isOpen ? "Hide older submissions" : "Show older submissions"}
                  >
                    {g.count > 1 && (
                      <Badge
                        variant="accent"
                        className="mr-1 px-2 py-0.5 text-[10px] leading-5"
                      >
                        {g.count} {g.count === 1 ? "submission" : "submissions"}
                      </Badge>
                    )}
                    {isOpen ? (
                      <>
                        <ChevronUp className="w-3.5 h-3.5" /> Hide
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-3.5 h-3.5" /> View all
                      </>
                    )}
                  </Button>
                )}
              </div>

              {/* OLDER (expanded view) */}
              {isOpen && g.count > 1 && (
                <div className="grid gap-2 pl-4 border-l-2 border-dashed border-accent/30 ml-3">
                  {g.items.slice(1).map((item, idx) => (
                    <div key={item._id || idx} className="opacity-90">
                      {renderRow(item, `${g.key}__${idx}`, true, 1)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
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
          const raw = item[h.key];
          if (Array.isArray(raw)) row[h.label] = raw.join(", ");
          else if (raw === undefined || raw === null || raw === "") row[h.label] = "N/A";
          else row[h.label] = raw;
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
    { id: "compare", label: "Smart Comparison", icon: GitCompareArrows, count: data.smartComparisonSubmissions?.length || 0 },
    { id: "roi", label: "ROI Planner", icon: TrendingUp, count: data.roiPlannerSubmissions?.length || 0 },
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

  const smartCompareHeaders = [
    { label: "Name", key: "name" },
    { label: "Phone", key: "phone" },
    { label: "Course", key: "courseType" },
    { label: "Compare Type", key: "comparisonType" },
    { label: "Items Count", key: "itemCount" },
    { label: "Selected Items", key: "selectedItems" },
    { label: "Date", key: "createdAt" },
  ];

  const galleryHeaders = [
    { label: "Title", key: "title" },
    { label: "Category", key: "category" },
    { label: "Caption", key: "caption" },
    { label: "Location", key: "location" },
    { label: "Featured", key: "featured" },
  ];

  const roiHeaders = [
    { label: "Name", key: "name" },
    { label: "Phone", key: "phone" },
    { label: "Course", key: "courseType" },
    { label: "Country", key: "country" },
    { label: "Specialisation", key: "specialisation" },
    { label: "Budget", key: "budget" },
    { label: "Score / CGPA", key: "scoreOrCgpa" },
    { label: "Work Exp", key: "workExperience" },
    { label: "Date", key: "createdAt" },
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
                <div>
                  {renderExportButtons(data.contactSubmissions, "Contact_Submissions", contactHeaders)}
                  {data.contactSubmissions.length === 0 ? (
                    <Card><CardContent className="p-8 text-center text-muted-foreground">No contact form submissions yet</CardContent></Card>
                  ) : (
                    (() => {
                      const renderContactRow = (item, rowKey, isOlder) => (
                        <Card
                          key={rowKey}
                          className={`border-l-4 border-l-accent ${isOlder ? "bg-muted/30" : ""}`}
                        >
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4 pr-40">
                              <div>
                                <h3 className="font-bold text-lg">{item.name || "Unknown"}</h3>
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
                      );
                      return (
                        <GroupedList
                          tabKey="contact"
                          groups={grouped.contact}
                          renderRow={(item, key, isOlder) =>
                            renderContactRow(item, key, isOlder)
                          }
                          tintClass="border-l-accent"
                        />
                      );
                    })()
                  )}
                </div>
              )}

              {activeTab === "predictor" && (
                <div>
                  {renderExportButtons(data.collegePredictorSubmissions, "College_Predictor", predictorHeaders)}
                  {data.collegePredictorSubmissions.length === 0 ? (
                    <Card><CardContent className="p-8 text-center text-muted-foreground">No college predictor submissions yet</CardContent></Card>
                  ) : (
                    (() => {
                      const renderPredictorRow = (item, rowKey, isOlder) => (
                        <Card
                          key={rowKey}
                          className={`border-l-4 border-l-blue-500 ${isOlder ? "bg-muted/30" : ""}`}
                        >
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4 pr-40">
                              <div>
                                <h3 className="font-bold text-lg">{item.name || "Unknown"}</h3>
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
                      );
                      return (
                        <GroupedList
                          tabKey="predictor"
                          groups={grouped.predictor}
                          renderRow={(item, key, isOlder) =>
                            renderPredictorRow(item, key, isOlder)
                          }
                          tintClass="border-l-blue-500"
                        />
                      );
                    })()
                  )}
                </div>
              )}

              {activeTab === "budget" && (
                <div>
                  {renderExportButtons(data.budgetCalculatorSubmissions, "Budget_Calculator", budgetHeaders)}
                  {data.budgetCalculatorSubmissions.length === 0 ? (
                    <Card><CardContent className="p-8 text-center text-muted-foreground">No budget calculator submissions yet</CardContent></Card>
                  ) : (
                    (() => {
                      const renderBudgetRow = (item, rowKey, isOlder) => (
                        <Card
                          key={rowKey}
                          className={`border-l-4 border-l-purple-500 ${isOlder ? "bg-muted/30" : ""}`}
                        >
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4 pr-40">
                              <div>
                                <h3 className="font-bold text-lg">{item.name || "Unknown"}</h3>
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
                      );
                      return (
                        <GroupedList
                          tabKey="budget"
                          groups={grouped.budget}
                          renderRow={(item, key, isOlder) =>
                            renderBudgetRow(item, key, isOlder)
                          }
                          tintClass="border-l-purple-500"
                        />
                      );
                    })()
                  )}
                </div>
              )}

              {activeTab === "apply" && (
                <div>
                  {renderExportButtons(data.applySubmissions, "Apply_Form", applyHeaders)}
                  {data.applySubmissions.length === 0 ? (
                    <Card><CardContent className="p-8 text-center text-muted-foreground">No apply form submissions yet</CardContent></Card>
                  ) : (
                    (() => {
                      const renderApplyRow = (item, rowKey, isOlder) => (
                        <Card
                          key={rowKey}
                          className={`border-l-4 border-l-green-500 ${isOlder ? "bg-muted/30" : ""}`}
                        >
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4 pr-40">
                              <div>
                                <h3 className="font-bold text-lg">{item.fullName || "Unknown"}</h3>
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
                      );
                      return (
                        <GroupedList
                          tabKey="apply"
                          groups={grouped.apply}
                          renderRow={(item, key, isOlder) =>
                            renderApplyRow(item, key, isOlder)
                          }
                          tintClass="border-l-green-500"
                        />
                      );
                    })()
                  )}
                </div>
              )}

              {activeTab === "compare" && (
                <div>
                  {renderExportButtons(data.smartComparisonSubmissions || [], "Smart_Comparison", smartCompareHeaders)}
                  {(!data.smartComparisonSubmissions || data.smartComparisonSubmissions.length === 0) ? (
                    <Card><CardContent className="p-8 text-center text-muted-foreground">No smart comparison submissions yet</CardContent></Card>
                  ) : (
                    (() => {
                      const renderCompareRow = (item, rowKey, isOlder) => {
                        const TypeIcon = item.comparisonType === "countries" ? Globe : Building2;
                        return (
                          <Card
                            key={rowKey}
                            className={`border-l-4 border-l-cyan-500 ${isOlder ? "bg-muted/30" : ""}`}
                          >
                            <CardContent className="p-6">
                              <div className="flex justify-between items-start mb-4 gap-3 pr-40">
                                <div>
                                  <h3 className="font-bold text-lg">{item.name || "Unknown"}</h3>
                                  <p className="text-sm text-muted-foreground">{formatDate(item.createdAt)}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge variant="outline" className="capitalize">{item.courseType || "—"}</Badge>
                                  <Badge variant="secondary" className="flex items-center gap-1">
                                    <TypeIcon className="w-3 h-3" />
                                    {item.comparisonType}
                                  </Badge>
                                </div>
                              </div>
                              <div className="grid md:grid-cols-4 gap-4">
                                <div>
                                  <p className="text-xs text-muted-foreground">Phone</p>
                                  <p className="font-medium">{item.phone || "N/A"}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground">Comparison Type</p>
                                  <p className="font-medium capitalize">{item.comparisonType || "N/A"}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground">Items Count</p>
                                  <p className="font-medium">{item.itemCount ?? (item.selectedItems?.length || 0)}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground">Course</p>
                                  <p className="font-medium">{item.courseType || "N/A"}</p>
                                </div>
                              </div>
                              {item.selectedItems && item.selectedItems.length > 0 && (
                                <div className="mt-4">
                                  <p className="text-xs text-muted-foreground mb-2">Selected {item.comparisonType}</p>
                                  <div className="flex flex-wrap gap-2">
                                    {item.selectedItems.map((s, i) => (
                                      <Badge key={i} variant="secondary" className="text-xs">
                                        {s}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        );
                      };
                      return (
                        <GroupedList
                          tabKey="compare"
                          groups={grouped.compare}
                          renderRow={(item, key, isOlder) =>
                            renderCompareRow(item, key, isOlder)
                          }
                          tintClass="border-l-cyan-500"
                        />
                      );
                    })()
                  )}
                </div>
              )}

              {activeTab === "roi" && (
                <div>
                  {renderExportButtons(
                    (data.roiPlannerSubmissions || []).map((r) => ({
                      ...r,
                      scoreOrCgpa: r.courseType === "MBBS" ? (r.neetScore ?? "N/A") : (r.cgpa != null ? `${r.cgpa}%` : "N/A"),
                    })),
                    "ROI_Planner",
                    roiHeaders
                  )}
                  {(!data.roiPlannerSubmissions || data.roiPlannerSubmissions.length === 0) ? (
                    <Card><CardContent className="p-8 text-center text-muted-foreground">No ROI planner submissions yet</CardContent></Card>
                  ) : (
                    (() => {
                      const renderRoiRow = (item, rowKey, isOlder) => {
                        const isMbbs = item.courseType === "MBBS";
                        return (
                          <Card
                            key={rowKey}
                            className={`border-l-4 border-l-emerald-500 ${isOlder ? "bg-muted/30" : ""}`}
                          >
                            <CardContent className="p-6">
                              <div className="flex justify-between items-start mb-4 gap-3 pr-40">
                                <div>
                                  <h3 className="font-bold text-lg">{item.name || "Unknown"}</h3>
                                  <p className="text-sm text-muted-foreground">{formatDate(item.createdAt)}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge variant="outline">{isMbbs ? "MBBS" : "Masters"}</Badge>
                                  <Badge variant="secondary" className="capitalize">{item.country || "—"}</Badge>
                                </div>
                              </div>
                              <div className="grid md:grid-cols-4 gap-4">
                                <div className="flex items-center gap-2">
                                  <Phone className="w-4 h-4 text-muted-foreground" />
                                  <span className="font-medium">{item.phone || "N/A"}</span>
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground">Specialisation</p>
                                  <p className="font-medium">{item.specialisation || "N/A"}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground">Budget</p>
                                  <p className="font-medium">{item.budget ? `₹${Math.round(item.budget / 100000)}L` : "N/A"}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground">{isMbbs ? "NEET Score" : "MBBS %"}</p>
                                  <p className="font-medium">
                                    {isMbbs ? (item.neetScore ?? "N/A") : (item.cgpa != null ? `${item.cgpa}%` : "N/A")}
                                  </p>
                                </div>
                              </div>
                              {!isMbbs && item.workExperience && (
                                <div className="mt-3">
                                  <Badge variant="outline">{item.workExperience}</Badge>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        );
                      };
                      return (
                        <GroupedList
                          tabKey="roi"
                          groups={grouped.roi}
                          renderRow={(item, key, isOlder) =>
                            renderRoiRow(item, key, isOlder)
                          }
                          tintClass="border-l-emerald-500"
                        />
                      );
                    })()
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
