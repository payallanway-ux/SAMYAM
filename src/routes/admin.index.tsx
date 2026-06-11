import { createFileRoute, useNavigate } from "@tanstack/react-router";
import React, { useState, useEffect, useCallback } from "react";
import { API_ENDPOINTS } from "@/lib/api-config";
import { FlowerField } from "@/components/FlowerField";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  LogOut,
  Mail,
  Phone,
  Calendar,
  Users,
  Trash2,
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  RefreshCw,
  Eye,
  X,
  Compass,
  MapPin,
  DollarSign,
  LayoutDashboard,
  Film,
  Sparkles,
  Edit,
  Plus,
  PlusCircle,
  Database,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboardPage,
  head: () => ({
    title: "Admin Dashboard | Samyam Sacred Journeys",
    meta: [
      {
        name: "description",
        content: "Admin console for Samyam Sacred Journeys.",
      },
    ],
  }),
});

interface Enquiry {
  id: string;
  name: string;
  phoneNumber: string;
  preferredYatra: string;
  message: string;
  status: "New" | "Contacted" | "Resolved";
  email?: string;
  travelers?: string;
  journeyType?: string;
  budget?: string;
  createdAt: string;
}

interface Stats {
  totalEnquiries: number;
  totalRetreats: number;
  totalVideos: number;
  totalTeerthas: number;
  totalBlogs?: number;
}

export interface Yatra {
  id?: string;

  slug: string;

  name: string;
  img: string;

  thumbnailImage: string;
  galleryImages: string[];

  slogan: string;

  date: string;
  duration: string;
  desc: string;

  triplePrice: string;
  doublePrice: string;

  staysHeading: string;
  staysDesc: string;

  inclusions: string[];

  itinerary: {
    day: number;
    points: string[];
  }[];

  darshans: {
    title: string;
    items: string[];
  }[];

  isPublished: boolean;

  createdAt?: string;
  updatedAt?: string;
}

interface Teertha {
  id?: string;

  slug: string;
  name: string;

  description: string;
  thumbnailImage: string;

  img: string;
  galleryImages: string[];

  region: string;
  significance: string;
  duration: string;

  tagline: string;
  slogan: string;

  date: string;
  desc: string;

  highlights: string[];

  triplePrice: string;
  doublePrice: string;

  inclusions: string[];

  itinerary: {
    day: number;
    points: string[];
  }[];

  staysHeading: string;
  staysDesc: string;

  darshans: {
    title: string;
    items: string[];
  }[];

  isPublished: boolean;
}

interface Video {
  id?: string;
  title: string;
  description: string;
  category:
    | "Kashi Knowledge Portal"
    | "Kashi Knowledge Portal • Quick Bits"
    | "Testimonials (Coming Soon)";
  youtubeLink: string;
  thumbnailImage: string;
  featured: boolean;
  isPublished: boolean;
}

interface Blog {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnailImage: string;
  galleryImages: string[];
  author: string;
  category: string;
  tags: string[];
  readTime: string;
  featured: boolean;
  isPublished: boolean;
}

export const initialYatraState: Yatra = {
  slug: "",
  slogan: "",

  name: "",
  date: "",
  duration: "",
  desc: "",

  thumbnailImage: "",
  galleryImages: [],

  triplePrice: "",
  doublePrice: "",

  staysHeading: "",
  staysDesc: "",

  itinerary: [],

  darshans: [],

  inclusions: [],

  isPublished: true,
  img: "",
};

export const initialTeerthaState: Teertha = {
  slug: "",
  name: "",
  description: "",
  desc: "",
  thumbnailImage: "",
  img: "",
  galleryImages: [],
  region: "",
  significance: "",
  duration: "",
  date: "",
  tagline: "",
  slogan: "",
  highlights: [""],
  triplePrice: "",
  doublePrice: "",
  inclusions: [""],
  itinerary: [
    {
      day: 1,
      points: [""],
    },
  ],
  staysHeading: "",
  staysDesc: "",
  darshans: [
    {
      title: "",
      items: [""],
    },
  ],
  isPublished: true,
};

const initialVideoState: Video = {
  title: "",
  description: "",
  category: "Kashi Knowledge Portal",
  youtubeLink: "",
  thumbnailImage: "",
  featured: false,
  isPublished: true,
};

const initialBlogState: Blog = {
  slug: "",
  title: "",
  excerpt: "",
  content: "",
  thumbnailImage: "",
  galleryImages: [],
  author: "Kashi Team",
  category: "",
  tags: [],
  readTime: "",
  featured: true,
  isPublished: true,
};

const inputClass =
  "w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500 transition";

const textareaClass =
  "w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500 transition resize-none";

const cardClass = "rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6";

function AdminDashboardPage() {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [adminEmail, setAdminEmail] = useState("");
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "enquiries" | "yatras" | "teerthas" | "videos" | "blogs"
  >("dashboard");

  // Data lists
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [yatras, setYatras] = useState<Yatra[]>([]);
  const [teerthas, setTeerthas] = useState<Teertha[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [migrating, setMigrating] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Filter & Search states
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "New" | "Contacted" | "Resolved">("All");

  // Modals & Forms states
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<{
    id: string;
    type: "enquiry" | "yatra" | "teertha" | "video" | "blog";
  } | null>(null);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formMode, setFormMode] = useState<"add" | "edit">("add");
  const [formType, setFormType] = useState<"yatra" | "teertha" | "video" | "blog">("yatra");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const [yatraForm, setYatraForm] = useState<Yatra>(initialYatraState);
  const [teerthaForm, setTeerthaForm] = useState<Teertha>(initialTeerthaState);
  const [videoForm, setVideoForm] = useState<Video>(initialVideoState);
  const [blogForm, setBlogForm] = useState<Blog>(initialBlogState);
  const [loadingDB, setLoadingDB] = useState(false);
  const [loadingDeleted, setLoadingDeleted] = useState(false);

  // Authentication check
  useEffect(() => {
    const storedToken = localStorage.getItem("samyam_token");
    const storedEmail = localStorage.getItem("samyam_email") || "admin@samyam.co";
    if (!storedToken) {
      navigate({ to: "/admin/login" });
    } else {
      setToken(storedToken);
      setAdminEmail(storedEmail);
    }
  }, [navigate]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("samyam_token");
    localStorage.removeItem("samyam_email");
    navigate({ to: "/admin/login" });
  }, [navigate]);

  const fetchData = useCallback(
    async (authToken: string) => {
      setLoading(true);
      setError("");
      try {
        // 1. Fetch Stats
        const statsRes = await fetch(API_ENDPOINTS.DASHBOARD.STATS, {
          headers: { Authorization: `Bearer ${authToken}` },
        });
        if (statsRes.status === 401) {
          handleLogout();
          return;
        }
        const statsResult = await statsRes.json();
        if (statsRes.ok) {
          setStats(statsResult.data);
        }

        // 2. Fetch Enquiries
        const enquiriesRes = await fetch(API_ENDPOINTS.ENQUIRIES, {
          headers: { Authorization: `Bearer ${authToken}` },
        });
        const enquiriesResult = await enquiriesRes.json();
        if (enquiriesRes.ok) {
          setEnquiries(enquiriesResult.data || []);
        }
        // 3. Fetch Yatras
        const yatrasRes = await fetch(API_ENDPOINTS.YATRAS);
        const yatrasResult = await yatrasRes.json();
        if (yatrasRes.ok) {
          console.log(yatrasResult.data);
          setYatras(yatrasResult.data || []);
        }

        // 4. Fetch Teerthas
        const teerthasRes = await fetch(API_ENDPOINTS.TEERTHAS);
        const teerthasResult = await teerthasRes.json();
        if (teerthasRes.ok) setTeerthas(teerthasResult.data || []);

        // 5. Fetch Videos
        const videosRes = await fetch(API_ENDPOINTS.TESTIMONIALS);
        const videosResult = await videosRes.json();
        if (videosRes.ok) setVideos(videosResult.data || []);

        // 6. Fetch Blogs
        const blogsRes = await fetch(API_ENDPOINTS.BLOGS);
        const blogsResult = await blogsRes.json();
        if (blogsRes.ok) setBlogs(blogsResult.data || []);
      } catch (err: any) {
        setError(err.message || "Failed to load dashboard data.");
      } finally {
        setLoading(false);
      }
    },
    [handleLogout],
  );

  const handleDB = useCallback(async () => {
    try {
      setLoadingDB(true);

      const authToken = localStorage.getItem("samyam_token");

      const res = await fetch(API_ENDPOINTS.SEED, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const data = await res.json();
      fetchData(authToken!);

      if (!res.ok) {
        throw new Error(data?.message || "Seed request failed");
      }

      console.log("Seed success:", data);
    } catch (err) {
      console.error("Seed error:", err);
    } finally {
      setLoadingDB(false);
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetchData(token);
    }
  }, [token, fetchData]);

  // Enquiry status change
  const handleUpdateEnquiryStatus = async (id: string, newStatus: Enquiry["status"]) => {
    if (!token) return;
    try {
      const response = await fetch(`${API_ENDPOINTS.ENQUIRIES}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          status: newStatus,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to update status");
      }

      setEnquiries((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item)),
      );

      if (selectedEnquiry?.id === id) {
        setSelectedEnquiry((prev) => (prev ? { ...prev, status: newStatus } : null));
      }
    } catch (err: any) {
      console.error(err);
      alert(err.message);
    }
  };

  // Delete Action Dispatcher
  const handleDeleteItem = async () => {
    if (!token || !deleteConfirm) return;
    const { id, type } = deleteConfirm;

    let url = "";
    if (type === "enquiry") url = `${API_ENDPOINTS.ENQUIRIES}/${id}`;
    if (type === "yatra") url = `${API_ENDPOINTS.YATRAS}/${id}`;
    if (type === "teertha") url = `${API_ENDPOINTS.TEERTHAS}/${id}`;
    if (type === "video") url = `${API_ENDPOINTS.TESTIMONIALS}/${id}`;
    if (type === "blog") url = `${API_ENDPOINTS.BLOGS}/${id}`;
    setLoadingDeleted(true);
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to delete record");

      // Update states
      if (type === "enquiry") setEnquiries((prev) => prev.filter((item) => item.id !== id));
      if (type === "yatra") setYatras((prev) => prev.filter((item) => item.id !== id));
      if (type === "teertha") setTeerthas((prev) => prev.filter((item) => item.id !== id));
      if (type === "video") setVideos((prev) => prev.filter((item) => item.id !== id));
      if (type === "blog") setBlogs((prev) => prev.filter((item) => item.id !== id));

      // Update statistics
      if (token) {
        const statsRes = await fetch(API_ENDPOINTS.DASHBOARD.STATS, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const statsResult = await statsRes.json();
        if (statsRes.ok) setStats(statsResult.data);
      }

      setDeleteConfirm(null);
      if (selectedEnquiry?.id === id) setSelectedEnquiry(null);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoadingDeleted(false);
    }
  };

  // Yatra Form Submit
  const handleYatraSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      alert("Authentication token missing");
      return;
    }

    try {
      setLoading(true);

      const isEdit = formMode === "edit";

      const url = isEdit ? `${API_ENDPOINTS.YATRAS}/${yatraForm.id}` : API_ENDPOINTS.YATRAS;

      const payload = {
        slug: yatraForm.slug,
        name: yatraForm.name,
        img: yatraForm.img,
        thumbnailImage: yatraForm.thumbnailImage,
        galleryImages: yatraForm.galleryImages,
        slogan: yatraForm.slogan,
        date: yatraForm.date,
        duration: yatraForm.duration,
        desc: yatraForm.desc,
        triplePrice: yatraForm.triplePrice,
        doublePrice: yatraForm.doublePrice,
        staysHeading: yatraForm.staysHeading,
        staysDesc: yatraForm.staysDesc,
        inclusions: yatraForm.inclusions.filter(Boolean),
        itinerary: yatraForm.itinerary.map((item, index) => ({
          day: item.day || index + 1,
          points: item.points.filter(Boolean),
        })),
        darshans: yatraForm.darshans.map((item) => ({
          title: item.title,
          items: item.items.filter(Boolean),
        })),
        isPublished: yatraForm.isPublished,
      };

      console.log("Submitting Yatra Payload:", payload);

      const response = await fetch(url, {
        method: isEdit ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || result?.error || "Failed to save Yatra");
      }

      await fetchData(token);

      setYatraForm(initialYatraState);
      setIsFormOpen(false);
    } catch (error) {
      console.error("Yatra Submit Error:", error);

      alert(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Teertha Form Submit
  const handleTeerthaSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!token) {
      alert("Authentication token missing");
      return;
    }

    try {
      setLoading(true);

      const isEdit = formMode === "edit";

      const payload = {
        slug: teerthaForm.slug.trim(),
        name: teerthaForm.name.trim(),

        description: teerthaForm.description.trim(),
        desc: teerthaForm.desc?.trim() || "",

        thumbnailImage: teerthaForm.thumbnailImage.trim(),
        img: teerthaForm.img?.trim() || "",

        galleryImages: teerthaForm.galleryImages.filter((img) => img.trim() !== ""),

        region: teerthaForm.region.trim(),
        significance: teerthaForm.significance.trim(),

        duration: teerthaForm.duration.trim(),
        date: teerthaForm.date?.trim() || "",

        tagline: teerthaForm.tagline?.trim() || "",
        slogan: teerthaForm.slogan?.trim() || "",

        highlights: teerthaForm.highlights.filter((item) => item.trim() !== ""),

        triplePrice: teerthaForm.triplePrice?.trim() || "",
        doublePrice: teerthaForm.doublePrice?.trim() || "",

        inclusions: teerthaForm.inclusions.filter((item) => item.trim() !== ""),

        itinerary: teerthaForm.itinerary
          .map((day) => ({
            day: day.day,
            points: day.points.filter((point) => point.trim() !== ""),
          }))
          .filter((day) => day.points.length > 0),

        staysHeading: teerthaForm.staysHeading?.trim() || "",
        staysDesc: teerthaForm.staysDesc?.trim() || "",

        darshans: teerthaForm.darshans
          .map((darshan) => ({
            title: darshan.title.trim(),
            items: darshan.items.filter((item) => item.trim() !== ""),
          }))
          .filter((darshan) => darshan.title !== "" || darshan.items.length > 0),

        isPublished: teerthaForm.isPublished,
      };

      console.log("Submitting Teertha Payload:", payload);

      const url = isEdit ? `${API_ENDPOINTS.TEERTHAS}/${teerthaForm.id}` : API_ENDPOINTS.TEERTHAS;

      const response = await fetch(url, {
        method: isEdit ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Backend Error:", result);

        throw new Error(result?.message || result?.error || "Failed to save Teertha");
      }

      await fetchData(token);

      setTeerthaForm(initialTeerthaState);
      setIsFormOpen(false);

      console.log(`Teertha ${isEdit ? "updated" : "created"} successfully`);
    } catch (error) {
      console.error("Teertha Submit Error:", error);

      alert(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Video Form Submit
  const handleVideoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    setLoading(true);
    try {
      const isEdit = formMode === "edit";
      const url = isEdit
        ? `${API_ENDPOINTS.TESTIMONIALS}/${videoForm.id}`
        : API_ENDPOINTS.TESTIMONIALS;

      const response = await fetch(url, {
        method: isEdit ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(videoForm),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Failed to save Video");

      await fetchData(token);
      setIsFormOpen(false);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Open forms helper
  const openAddYatra = () => {
    setYatraForm(initialYatraState);
    setFormMode("add");
    setFormType("yatra");
    setShowAdvanced(false);
    setIsFormOpen(true);
  };

  const openEditYatra = (item: Yatra) => {
    setYatraForm(item);
    setFormMode("edit");
    setFormType("yatra");
    setShowAdvanced(false);
    setIsFormOpen(true);
  };

  const openAddTeertha = () => {
    setTeerthaForm(initialTeerthaState);
    setFormMode("add");
    setFormType("teertha");
    setShowAdvanced(false);
    setIsFormOpen(true);
  };

  const openEditTeertha = (item: Teertha) => {
    setTeerthaForm(item);
    setFormMode("edit");
    setFormType("teertha");
    setShowAdvanced(false);
    setIsFormOpen(true);
  };

  const openAddVideo = () => {
    setVideoForm(initialVideoState);
    setFormMode("add");
    setFormType("video");
    setIsFormOpen(true);
  };

  const openEditVideo = (item: Video) => {
    setVideoForm(item);
    setFormMode("edit");
    setFormType("video");
    setIsFormOpen(true);
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    setLoading(true);
    try {
      const isEdit = formMode === "edit";
      const url = isEdit ? `${API_ENDPOINTS.BLOGS}/${blogForm.id}` : API_ENDPOINTS.BLOGS;

      const response = await fetch(url, {
        method: isEdit ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(blogForm),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Failed to save Blog");

      await fetchData(token);
      setIsFormOpen(false);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const openAddBlog = () => {
    setBlogForm(initialBlogState);
    setFormMode("add");
    setFormType("blog");
    setIsFormOpen(true);
  };

  const openEditBlog = (item: Blog) => {
    setBlogForm(item);
    setFormMode("edit");
    setFormType("blog");
    setIsFormOpen(true);
  };

  // Filters logic
  const filteredEnquiries = enquiries.filter((e) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      e.name?.toLowerCase().includes(search) ||
      e.email?.toLowerCase().includes(search) ||
      e.phoneNumber?.includes(searchTerm) ||
      e.preferredYatra?.toLowerCase().includes(search) ||
      e.message?.toLowerCase().includes(search);

    const matchesStatus = statusFilter === "All" || e.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0d040f] text-white flex flex-col justify-between">
      <section className="relative py-8 px-4 md:px-8 overflow-hidden min-h-[92vh] grow flex">
        <FlowerField count={5} />

        <div className="w-full max-w-480 mx-auto relative z-10 flex flex-col md:flex-row gap-6 mt-2">
          {/* LEFT SIDEBAR NAVIGATION */}
          <aside className="w-full md:w-72 shrink-0 space-y-6">
            <div className="bg-white/3 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-soft space-y-8">
              <div className="border-b border-white/5 pb-6 text-center md:text-left">
                <h2 className="font-display font-bold text-xl text-white tracking-wide">
                  Samyam <span className="text-amber-400">Admin</span>
                </h2>
                <p className="text-[10px] text-white/40 font-body uppercase tracking-widest mt-2">
                  ADMIN #{adminEmail?.slice(0, 6).toUpperCase()}
                </p>
              </div>

              <nav className="flex flex-col gap-2 font-body">
                {[
                  { id: "dashboard", label: "Overview", icon: LayoutDashboard },
                  { id: "enquiries", label: "Enquiries", icon: Mail },
                  { id: "yatras", label: "Yatras", icon: Compass },
                  { id: "teerthas", label: "Teerthas", icon: MapPin },
                  { id: "videos", label: "Knowledge Portal", icon: Film },
                  { id: "blogs", label: "CEO Journal", icon: FileText },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id as any);
                        setSearchTerm("");
                      }}
                      className={`w-full px-5 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-3 transition-all duration-300 border-2 cursor-pointer ${
                        activeTab === item.id
                          ? "bg-linear-to-r from-[#FF7A00] to-[#A82A9C] text-white border-[#0090FF] shadow-lg shadow-[#FF7A00]/20 scale-[1.02]"
                          : "text-white/50 hover:text-white hover:bg-white/5 border-transparent"
                      }`}
                    >
                      <Icon size={16} />
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              <div className="border-t border-white/5 pt-6">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-3 bg-red-500/10 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all rounded-full text-[10px] font-bold uppercase tracking-widest font-body flex items-center justify-center gap-2 cursor-pointer text-red-400"
                >
                  <LogOut size={14} />
                  Logout
                </button>
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT PANEL */}
          <main className="flex-1 min-w-0 bg-white/1 backdrop-blur-3xl border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl overflow-y-auto">
            {error && (
              <div className="p-4 mb-6 bg-red-500/10 border border-red-500/20 text-red-200 text-xs rounded-2xl text-center font-body flex items-center justify-center gap-2">
                <AlertCircle size={14} /> {error}
              </div>
            )}
            {successMsg && (
              <div className="p-4 mb-6 bg-green-500/10 border border-green-500/20 text-green-200 text-xs rounded-2xl text-center font-body flex items-center justify-center gap-2 animate-pulse">
                <CheckCircle2 size={14} /> {successMsg}
              </div>
            )}

            {/* TAB CONTENT: DASHBOARD */}
            {activeTab === "dashboard" && (
              <div className="space-y-10 animate-fade-in">
                <div className="relative overflow-hidden rounded-3xl bg-white/[0.01] backdrop-blur-3xl border border-white/5 p-8 md:p-10">
                  {/* Accent Glow */}
                  <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[#FF7A00]/5 blur-3xl" />
                  <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#A82A9C]/5 blur-3xl" />

                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FF7A00]/5 via-transparent to-[#A82A9C]/5 pointer-events-none" />

                  <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
                    {/* Left Content */}
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF7A00]/10 bg-[#FF7A00]/5 mb-5">
                        <span className="h-2 w-2 rounded-full bg-[#FF7A00] animate-pulse" />

                        <span className="text-[10px] font-black uppercase tracking-[0.25em] bg-gradient-to-r from-[#FF7A00] to-[#A82A9C] bg-clip-text text-transparent">
                          Admin Control Center
                        </span>
                      </div>

                      <h1 className="text-4xl md:text-5xl font-black leading-none">
                        <span className="text-white">Welcome Back,</span>

                        <span className="block mt-2 bg-gradient-to-r from-[#FF7A00] via-[#FFB347] to-[#A82A9C] bg-clip-text text-transparent">
                          Administrator
                        </span>
                      </h1>

                      <p className="mt-5 max-w-2xl text-sm md:text-base text-white/50 leading-relaxed">
                        Monitor enquiries, manage yatras, publish blogs, curate teerthas, and
                        control platform content from a single dashboard.
                      </p>

                      {/* Accent Line */}
                      <div className="mt-6 h-px w-40 bg-gradient-to-r from-[#FF7A00] via-[#FFB347] to-[#A82A9C]" />
                    </div>

                    {/* Right Side Button */}
                  </div>
                </div>

                {/* Statistics Overview */}
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {[
                    {
                      label: "Enquiries",
                      val: stats?.totalEnquiries ?? enquiries.length,
                      color: "text-amber-400",
                      icon: Mail,
                    },
                    {
                      label: "Yatras",
                      val: stats?.totalRetreats ?? yatras.length,
                      color: "text-sky-400",
                      icon: Compass,
                    },
                    {
                      label: "Videos",
                      val: stats?.totalVideos ?? videos.length,
                      color: "text-purple-400",
                      icon: Film,
                    },
                    {
                      label: "Teerthas",
                      val: stats?.totalTeerthas ?? teerthas.length,
                      color: "text-emerald-400",
                      icon: MapPin,
                    },
                    {
                      label: "Blogs",
                      val: stats?.totalBlogs ?? blogs.length,
                      color: "text-rose-400",
                      icon: FileText,
                    },
                  ].map((st, i) => (
                    <div
                      key={i}
                      className="bg-white/2 border border-white/5 p-6 rounded-2xl shadow-soft hover:border-white/10 transition-all flex flex-col items-center text-center"
                    >
                      <st.icon size={16} className={`${st.color} opacity-50 mb-2`} />
                      <p className={`text-4xl font-display font-black ${st.color}`}>{st.val}</p>
                      <p className="text-[9px] text-white/30 font-bold uppercase tracking-widest mt-1">
                        {st.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                  {[
                    {
                      title: "Enquiries",
                      desc: "Review seeker requests",
                      icon: "✉",
                      tab: "enquiries",
                    },
                    {
                      title: "Teerthas",
                      desc: "Curate destinations",
                      icon: "🕉",
                      tab: "teerthas",
                    },
                    {
                      title: "Knowledge",
                      desc: "Manage vault videos",
                      icon: "📚",
                      tab: "videos",
                    },
                    {
                      title: "Blogs",
                      desc: "Manage articles & insights",
                      icon: "📝",
                      tab: "blogs",
                    },
                  ].map((action, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTab(action.tab as any)}
                      className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.04] hover:border-[#FF7A00]/30 hover:shadow-lg hover:shadow-[#FF7A00]/5 transition-all flex flex-col items-start group text-left cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                        {action.icon}
                      </div>

                      <h4 className="text-lg font-bold font-display text-white mb-1">
                        {action.title}
                      </h4>

                      <p className="text-[10px] text-white/40 font-body leading-relaxed mb-4">
                        {action.desc}
                      </p>

                      <span className="text-[9px] font-bold uppercase tracking-widest text-amber-400 group-hover:translate-x-1 transition-transform">
                        Manage →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT: ENQUIRIES */}
            {activeTab === "enquiries" && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 border-b border-white/5 pb-8">
                  <div>
                    <h1 className="text-3xl font-display font-bold">Seeker Requests</h1>
                    <p className="text-[10px] text-white/40 font-body uppercase tracking-widest mt-1">
                      Manage sacred inquiries
                    </p>
                  </div>

                  <div className="relative w-full xl:w-80 font-body">
                    <Search className="absolute left-4 top-3.5 text-white/20" size={16} />
                    <input
                      type="text"
                      placeholder="Search pilgrims..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/[0.03] border border-white/5 text-white placeholder-white/20 focus:outline-none focus:border-amber-400 text-xs transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white/[0.02] border border-white/5 rounded-2xl font-body w-fit">
                  {(["All", "New", "Contacted", "Resolved"] as const).map((status) => {
                    const count =
                      status === "All"
                        ? enquiries.length
                        : enquiries.filter((e) => e.status === status).length;
                    return (
                      <button
                        key={status}
                        onClick={() => setStatusFilter(status)}
                        className={`px-5 py-2 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all cursor-pointer ${
                          statusFilter === status
                            ? "bg-amber-400 text-[#0d040f] shadow-sm"
                            : "text-white/40 hover:text-white"
                        }`}
                      >
                        {status} <span className="opacity-50 ml-1">({count})</span>
                      </button>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {filteredEnquiries.map((enquiry) => (
                    <div
                      key={enquiry.id}
                      className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl space-y-6 text-left font-body relative hover:bg-white/[0.04] transition-all group"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/5 pb-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <h4 className="text-xl font-bold font-display text-white">
                              {enquiry.name}
                            </h4>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-bold uppercase tracking-widest text-amber-400">
                              {enquiry.preferredYatra}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-x-6 text-[11px] text-white/50">
                            <span>📞 {enquiry.phoneNumber}</span>
                            {enquiry.email && <span>✉ {enquiry.email}</span>}
                            <span>🕒 {new Date(enquiry.createdAt).toLocaleDateString()}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <select
                            value={enquiry.status}
                            onChange={(e) =>
                              handleUpdateEnquiryStatus(
                                enquiry.id,
                                e.target.value as Enquiry["status"],
                              )
                            }
                            className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest focus:outline-none border cursor-pointer ${
                              enquiry.status === "New"
                                ? "bg-sky-500/10 border-sky-500/20 text-sky-400"
                                : enquiry.status === "Contacted"
                                  ? "bg-amber-400/10 border-amber-400/20 text-amber-400"
                                  : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                            } [&>option]:bg-[#140817]`}
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Resolved">Resolved</option>
                          </select>

                          <button
                            onClick={() => setDeleteConfirm({ id: enquiry.id, type: "enquiry" })}
                            className="w-9 h-9 flex items-center justify-center rounded-xl bg-red-500/5 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>

                      <p className="text-sm text-white/70 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5 italic">
                        "{enquiry.message}"
                      </p>
                    </div>
                  ))}
                  {filteredEnquiries.length === 0 && (
                    <div className="py-20 text-center text-white/30 text-xs font-body uppercase tracking-widest">
                      No matching pilgrim requests
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB CONTENT: YATRA RETREATS */}
            {activeTab === "yatras" && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 border-b border-white/5 pb-8">
                  <div>
                    <h1 className="text-3xl font-display font-bold text-white">
                      Yatras & Retreats
                    </h1>
                    <p className="text-[10px] text-white/40 font-body uppercase tracking-widest mt-1">
                      Dynamic Travel Itineraries
                    </p>
                  </div>
                  <button
                    onClick={openAddYatra}
                    className="px-6 py-3 bg-linear-to-r from-[#FF7A00] to-[#A82A9C] text-white font-bold rounded-full text-[10px] uppercase tracking-widest hover:scale-105 hover:shadow-lg hover:shadow-[#FF7A00]/35 transition cursor-pointer flex items-center gap-2"
                  >
                    <PlusCircle size={14} /> Create Journey
                  </button>
                </div>
                {yatras.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">No Yatras Found</h3>

                    <p className="text-white/50 text-sm">
                      Create your first spiritual journey to get started.
                    </p>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                  {yatras.map((y) => (
                    <div
                      key={y.id}
                      className="bg-white/2 border border-white/5 rounded-3xl overflow-hidden shadow-soft flex flex-col justify-between hover:bg-white/[0.04] transition-all group"
                    >
                      <div>
                        <div className="aspect-video bg-black relative overflow-hidden">
                          <img
                            src={y.thumbnailImage}
                            alt={y.name}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                "https://samyam.co/images/knowledge.jpeg";
                            }}
                          />

                          <div className="absolute inset-0 bg-linear-to-t from-[#0d040f] via-transparent to-transparent" />

                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-lg font-bold font-display text-white">{y.name}</h3>

                            <p className="text-[10px] text-amber-400 font-bold uppercase mt-0.5">
                              {y.duration} • {new Date(y.date).toLocaleDateString("en-IN")}
                            </p>
                          </div>
                        </div>

                        <div className="p-5 space-y-4">
                          <p className="text-white/50 text-[11px] leading-relaxed line-clamp-2">
                            {y.desc}
                          </p>

                          <div className="flex items-center justify-between text-[10px] font-bold">
                            <span className="text-sky-400">D: {y.doublePrice || "N/A"}</span>

                            <span className="text-amber-400">T: {y.triplePrice || "N/A"}</span>
                          </div>
                        </div>
                      </div>

                      <div className="px-5 py-4 bg-black/20 flex items-center justify-between border-t border-white/5">
                        <span
                          className={`px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest ${
                            y.isPublished
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : "bg-white/10 text-white/40 border border-white/10"
                          }`}
                        >
                          {y.isPublished ? "Live" : "Draft"}
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => openEditYatra(y)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-linear-to-r hover:from-[#FF7A00] hover:to-[#A82A9C] text-white/50 hover:text-white transition-all cursor-pointer"
                          >
                            <Edit size={14} />
                          </button>

                          <button
                            onClick={() =>
                              setDeleteConfirm({
                                id: y.id,
                                type: "yatra",
                              })
                            }
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500/5 hover:bg-red-500 text-red-400 hover:text-white transition cursor-pointer"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT: TEERTHAS */}
            {activeTab === "teerthas" && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 border-b border-white/5 pb-8">
                  <div>
                    <h1 className="text-3xl font-display font-bold text-white">Knowledge Vault</h1>
                    <p className="text-[10px] text-white/40 font-body uppercase tracking-widest mt-1">
                      Manage Spiritual Content
                    </p>
                  </div>
                  <button
                    onClick={openAddTeertha}
                    className="px-6 py-3 bg-linear-to-r from-[#FF7A00] to-[#A82A9C] text-white font-bold rounded-full text-[10px] uppercase tracking-widest hover:scale-105 hover:shadow-lg hover:shadow-[#FF7A00]/35 transition cursor-pointer flex items-center gap-2"
                  >
                    <PlusCircle size={14} /> Add Teertha
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                  {teerthas.map((t) => (
                    <div
                      key={t.id}
                      className="bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden flex flex-col hover:bg-white/[0.04] transition-all group"
                    >
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={t.thumbnailImage || t.img}
                          alt={t.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d040f] via-black/20 to-transparent" />

                        {/* Date */}
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur text-[10px] font-bold text-white">
                          {t.date}
                        </div>

                        {/* Name */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-bold text-white">{t.name}</h3>

                          <p className="text-[10px] uppercase tracking-widest text-white/60 mt-1">
                            {t.region}
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        {/* Tagline */}
                        {t.tagline && (
                          <div className="mb-3">
                            <span className="px-3 py-1 rounded-full bg-[#FF7A00]/10 text-[#FFB366] text-[10px] font-bold uppercase">
                              {t.tagline}
                            </span>
                          </div>
                        )}

                        {/* Description */}
                        <p className="text-white/60 text-sm line-clamp-3">{t.description}</p>

                        {/* Significance */}
                        <div className="mt-4 p-3 rounded-2xl bg-[#FF7A00]/5 border border-[#FF7A00]/10">
                          <p className="text-[#FFB366] text-[11px] leading-relaxed">
                            {t.significance}
                          </p>
                        </div>

                        {/* Highlights */}
                        {t.highlights?.length > 0 && (
                          <div className="mt-4">
                            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">
                              Highlights
                            </p>

                            <ul className="space-y-1">
                              {t.highlights.slice(0, 3).map((highlight, index) => (
                                <li
                                  key={index}
                                  className="text-xs text-white/70 flex items-center gap-2"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Bottom Info */}
                        <div className="mt-auto pt-5">
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white/[0.03] rounded-xl p-3">
                              <p className="text-[9px] uppercase text-white/40">Duration</p>
                              <p className="text-white text-xs font-semibold">{t.duration}</p>
                            </div>

                            <div className="bg-white/[0.03] rounded-xl p-3">
                              <p className="text-[9px] uppercase text-white/40">Triple Sharing</p>
                              <p className="text-[#FFB366] text-xs font-bold">{t.triplePrice}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="px-5 py-4 bg-black/20 flex items-center justify-end gap-2 border-t border-white/5">
                        <button
                          onClick={() => openEditTeertha(t)}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-[#FF7A00] hover:to-[#A82A9C] text-white/50 hover:text-white transition-all"
                        >
                          <Edit size={14} />
                        </button>

                        <button
                          onClick={() =>
                            setDeleteConfirm({
                              id: t.id!,
                              type: "teertha",
                            })
                          }
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500/5 hover:bg-red-500 text-red-400 hover:text-white transition"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT: VIDEOS */}
            {activeTab === "videos" && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 border-b border-white/5 pb-8">
                  <div>
                    <h1 className="text-3xl font-display font-bold text-white">Knowledge Vault</h1>
                    <p className="text-[10px] text-white/40 font-body uppercase tracking-widest mt-1">
                      Manage Spiritual Content
                    </p>
                  </div>
                  <button
                    onClick={openAddVideo}
                    className="px-6 py-3 bg-linear-to-r from-[#FF7A00] to-[#A82A9C] text-white font-bold rounded-full text-[10px] uppercase tracking-widest hover:scale-105 hover:shadow-lg hover:shadow-[#FF7A00]/35 transition cursor-pointer flex items-center gap-2"
                  >
                    <PlusCircle size={14} /> Add Video
                  </button>
                </div>
                {videos.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      No Knowledge Portal Videos Found
                    </h3>
                    <p className="text-white/50 text-sm">
                      Create your first spiritual journey to get started.
                    </p>
                  </div>
                )}
                <div className="space-y-12">
                  {[
                    "Kashi Knowledge Portal",
                    "Kashi Knowledge Portal • Quick Bits",
                    "Testimonials (Coming Soon)",
                  ].map((cat) => {
                    const catVideos = videos.filter((v) => v.category === cat);
                    if (catVideos.length === 0) return null;
                    return (
                      <div key={cat} className="space-y-6">
                        <div className="flex items-center gap-4">
                          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-amber-400 whitespace-nowrap">
                            {cat}
                          </h3>
                          <div className="h-px w-full bg-white/5" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {catVideos.map((video) => (
                            <div
                              key={video.id}
                              className="bg-white/2 border border-white/5 rounded-3xl overflow-hidden hover:bg-white/4 transition-all duration-300 group"
                            >
                              {/* Thumbnail */}
                              <div className="relative aspect-video overflow-hidden">
                                <img
                                  src={video.thumbnailImage}
                                  alt={video.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src =
                                      "https://samyam.co/images/knowledge.jpeg";
                                  }}
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    ▶
                                  </div>
                                </div>

                                {/* Featured Badge */}
                                {video.featured && (
                                  <div className="absolute top-3 left-3">
                                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#A82A9C] text-white text-[9px] font-bold uppercase tracking-wider">
                                      Featured
                                    </span>
                                  </div>
                                )}

                                {/* Publish Status */}
                                <div className="absolute top-3 right-3">
                                  <span
                                    className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                                      video.isPublished
                                        ? "bg-green-500/20 text-green-400"
                                        : "bg-red-500/20 text-red-400"
                                    }`}
                                  >
                                    {video.isPublished ? "Published" : "Draft"}
                                  </span>
                                </div>
                              </div>

                              {/* Content */}
                              <div className="p-5">
                                <p className="text-[10px] uppercase tracking-widest text-[#FFB366] font-bold mb-2">
                                  {video.category}
                                </p>

                                <h3 className="text-white font-bold text-lg line-clamp-2 mb-2">
                                  {video.title}
                                </h3>

                                <p className="text-white/50 text-sm line-clamp-3 leading-relaxed">
                                  {video.description}
                                </p>
                              </div>

                              {/* Footer */}
                              <div className="px-5 py-4 border-t border-white/5 flex justify-between items-center">
                                <a
                                  href={video.youtubeLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-[#FFB366] hover:text-white transition"
                                >
                                  Watch Video →
                                </a>

                                <div className="flex gap-2">
                                  <button
                                    onClick={() => openEditVideo(video)}
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-linear-to-r hover:from-[#FF7A00] hover:to-[#A82A9C] text-white/50 hover:text-white transition-all"
                                  >
                                    <Edit size={14} />
                                  </button>

                                  <button
                                    onClick={() =>
                                      setDeleteConfirm({
                                        id: video.id!,
                                        type: "video",
                                      })
                                    }
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500/5 hover:bg-red-500 text-red-400 hover:text-white transition"
                                  >
                                    <Trash2 size={14} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB CONTENT: BLOGS */}
            {activeTab === "blogs" && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 border-b border-white/5 pb-8">
                  <div>
                    <h1 className="text-3xl font-display font-bold text-white">CEO Journal</h1>
                    <p className="text-[10px] text-white/40 font-body uppercase tracking-widest mt-1">
                      Manage philosophical blogs
                    </p>
                  </div>
                  <button
                    onClick={openAddBlog}
                    className="px-6 py-3 bg-gradient-to-r from-[#FF7A00] to-[#A82A9C] text-white font-bold rounded-full text-[10px] uppercase tracking-widest hover:scale-105 hover:shadow-lg hover:shadow-[#FF7A00]/35 transition cursor-pointer flex items-center gap-2"
                  >
                    <PlusCircle size={14} /> New Post
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {blogs.map((b) => (
                      <div
                        key={b.id}
                        className="bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:bg-white/[0.04] transition-all group h-full flex flex-col"
                      >
                        {/* Thumbnail */}
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <img
                            src={b.thumbnailImage}
                            alt={b.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                "https://samyam.co/images/knowledge.jpeg";
                            }}
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[9px] font-bold uppercase tracking-wider text-white">
                              {b.category}
                            </span>
                          </div>

                          {b.isFeatured && (
                            <div className="absolute top-4 right-4">
                              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#A82A9C] text-[9px] font-bold uppercase tracking-wider text-white">
                                Featured
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs text-white/40">{b.author}</span>

                            <span
                              className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${
                                b.isPublished
                                  ? "bg-emerald-500/10 text-emerald-400"
                                  : "bg-white/5 text-white/30"
                              }`}
                            >
                              {b.isPublished ? "Published" : "Draft"}
                            </span>
                          </div>

                          <h3 className="text-xl font-display font-bold text-white mb-3 line-clamp-2">
                            {b.title}
                          </h3>

                          <p className="text-sm text-white/60 leading-relaxed line-clamp-3 mb-4">
                            {b.excerpt}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {b.tags?.slice(0, 3).map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 rounded-full bg-white/5 text-[10px] text-white/50"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>

                          {/* Push footer to bottom */}
                          <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                            <span className="text-[11px] text-[#FFB366] font-medium">
                              {b.readTime}
                            </span>

                            <div className="flex gap-3">
                              <button
                                onClick={() => openEditBlog(b)}
                                className="px-5 py-2 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gradient-to-r hover:from-[#FF7A00] hover:to-[#A82A9C] hover:text-white transition-all cursor-pointer"
                              >
                                <Edit size={14} />
                              </button>

                              <button
                                onClick={() =>
                                  setDeleteConfirm({
                                    id: b.id!,
                                    type: "blog",
                                  })
                                }
                                className="px-5 py-2 bg-red-500/5 text-red-400 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-red-500 hover:text-white transition cursor-pointer"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </section>

      {/* DYNAMIC FORMS MODAL */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-100 flex items-center justify-center p-4">
          <div className="bg-[#1a0a1e] border border-white/10 rounded-[2.5rem] w-full max-w-5xl overflow-hidden shadow-2xl relative font-body text-xs text-left max-h-[90vh] flex flex-col">
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/1">
              <div>
                <h2 className="text-2xl font-display font-bold text-white leading-tight">
                  {formMode === "add" ? "Create New" : "Edit"}{" "}
                  <span className="text-amber-400">
                    {formType === "yatra"
                      ? "Yatra Itinerary"
                      : formType === "teertha"
                        ? "Teertha Entry"
                        : formType === "video"
                          ? "Vault Video"
                          : "Blog Post"}
                  </span>
                </h2>
              </div>
              <button
                onClick={() => setIsFormOpen(false)}
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full transition text-white/60 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
              {/* YATRA FORM */}
              {formType === "yatra" && (
                <form onSubmit={handleYatraSubmit} className="space-y-8">
                  {/* BASIC INFORMATION */}
                  <div>
                    <h3 className="mb-6 text-sm font-bold text-white">Basic Information</h3>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Journey Name *
                        </label>

                        <input
                          required
                          className={inputClass}
                          type="text"
                          placeholder="Shiv Dham Yatra"
                          value={yatraForm.name}
                          onChange={(e) =>
                            setYatraForm((prev) => ({
                              ...prev,
                              name: e.target.value,
                              slug: e.target.value
                                .trim()
                                .toLowerCase()
                                .replace(/\s+/g, "-")
                                .replace(/[^\w-]/g, ""),
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Dates
                        </label>

                        <input
                          className={inputClass}
                          type="text"
                          placeholder="20 Oct - 25 Oct"
                          value={yatraForm.date}
                          onChange={(e) =>
                            setYatraForm((prev) => ({
                              ...prev,
                              date: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Duration
                        </label>

                        <input
                          className={inputClass}
                          type="text"
                          placeholder="6 Days / 5 Nights"
                          value={yatraForm.duration}
                          onChange={(e) =>
                            setYatraForm((prev) => ({
                              ...prev,
                              duration: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Slug
                        </label>

                        <input
                          className={inputClass}
                          type="text"
                          value={yatraForm.slug}
                          onChange={(e) =>
                            setYatraForm((prev) => ({
                              ...prev,
                              slug: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2 lg:col-span-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Journey Description
                        </label>

                        <textarea
                          rows={5}
                          className={textareaClass}
                          placeholder="Describe your yatra..."
                          value={yatraForm.desc}
                          onChange={(e) =>
                            setYatraForm((prev) => ({
                              ...prev,
                              desc: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Journey Slogn *
                        </label>

                        <input
                          required
                          className={inputClass}
                          type="text"
                          placeholder="Shiv Dham Yatra"
                          value={yatraForm.slogan}
                          onChange={(e) =>
                            setYatraForm((prev) => ({
                              ...prev,
                              slogan: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Stays Heading
                        </label>

                        <input
                          className={inputClass}
                          type="text"
                          placeholder="20 Oct - 25 Oct"
                          value={yatraForm.staysHeading}
                          onChange={(e) =>
                            setYatraForm((prev) => ({
                              ...prev,
                              staysHeading: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2 lg:col-span-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Stay Description
                        </label>

                        <textarea
                          rows={5}
                          className={textareaClass}
                          placeholder="Describe your yatra..."
                          value={yatraForm.staysDesc}
                          onChange={(e) =>
                            setYatraForm((prev) => ({
                              ...prev,
                              staysDesc: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* COVER & PRICING */}
                  <div className={cardClass}>
                    <h3 className="mb-6 text-sm font-bold text-white">Pricing & Cover</h3>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Banner Image URL
                        </label>

                        <input
                          className={inputClass}
                          type="url"
                          placeholder="https://..."
                          value={yatraForm.img}
                          onChange={(e) =>
                            setYatraForm((prev) => ({
                              ...prev,
                              img: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Cover Image URL
                        </label>

                        <input
                          className={inputClass}
                          type="url"
                          placeholder="https://..."
                          value={yatraForm.thumbnailImage}
                          onChange={(e) =>
                            setYatraForm((prev) => ({
                              ...prev,
                              thumbnailImage: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Double Occupancy
                        </label>

                        <input
                          className={inputClass}
                          type="text"
                          placeholder="₹15,999"
                          value={yatraForm.doublePrice}
                          onChange={(e) =>
                            setYatraForm((prev) => ({
                              ...prev,
                              doublePrice: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Triple Occupancy
                        </label>

                        <input
                          className={inputClass}
                          type="text"
                          placeholder="₹13,999"
                          value={yatraForm.triplePrice}
                          onChange={(e) =>
                            setYatraForm((prev) => ({
                              ...prev,
                              triplePrice: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* PUBLISH */}
                  <div className={cardClass}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-white">Published Status</h3>
                        <p className="text-xs text-white/40">Visibility on public portal</p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setYatraForm((prev) => ({
                            ...prev,
                            isPublished: !prev.isPublished,
                          }))
                        }
                        className={`relative h-7 w-14 rounded-full transition ${
                          yatraForm.isPublished
                            ? "bg-linear-to-r from-[#FF7A00] to-[#A82A9C]"
                            : "bg-white/10"
                        }`}
                      >
                        <div
                          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
                            yatraForm.isPublished ? "right-1" : "left-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* ADVANCED */}
                  <div className={cardClass}>
                    <button
                      type="button"
                      onClick={() => setShowAdvanced(!showAdvanced)}
                      className="text-xs font-black uppercase tracking-widest text-amber-400"
                    >
                      {showAdvanced ? "Hide Advanced Details" : "Show Advanced Details"}
                    </button>

                    {showAdvanced && (
                      <div className="mt-8 space-y-8">
                        {/* INCLUSIONS */}
                        <div className={cardClass}>
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-white">Inclusions</h3>

                            <button
                              type="button"
                              onClick={() =>
                                setYatraForm((prev) => ({
                                  ...prev,
                                  inclusions: [...(prev.inclusions || []), ""],
                                }))
                              }
                              className="px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-bold"
                            >
                              Add Inclusion
                            </button>
                          </div>

                          {(yatraForm.inclusions || []).map((item, index) => (
                            <div key={index} className="flex gap-3 mb-3">
                              <input
                                className={inputClass}
                                value={item}
                                placeholder="Hotel Accommodation"
                                onChange={(e) => {
                                  const updated = [...(yatraForm.inclusions || [])];
                                  updated[index] = e.target.value;

                                  setYatraForm((prev) => ({
                                    ...prev,
                                    inclusions: updated,
                                  }));
                                }}
                              />

                              <button
                                type="button"
                                onClick={() =>
                                  setYatraForm((prev) => ({
                                    ...prev,
                                    inclusions:
                                      prev.inclusions?.filter((_, i) => i !== index) || [],
                                  }))
                                }
                                className="px-4 rounded-xl bg-red-500 text-white"
                              >
                                ✕
                              </button>
                            </div>
                          ))}
                        </div>

                        {/* GALLERY */}
                        <div className={cardClass}>
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-white">Gallery Images</h3>

                            <button
                              type="button"
                              onClick={() =>
                                setYatraForm((prev) => ({
                                  ...prev,
                                  galleryImages: [...prev.galleryImages, ""],
                                }))
                              }
                              className="px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-bold"
                            >
                              Add Image
                            </button>
                          </div>

                          <div className="space-y-3">
                            {yatraForm.galleryImages.map((image, index) => (
                              <div key={index} className="flex gap-3">
                                <input
                                  className={inputClass}
                                  placeholder="Image URL"
                                  value={image}
                                  onChange={(e) => {
                                    const updated = [...yatraForm.galleryImages];

                                    updated[index] = e.target.value;

                                    setYatraForm((prev) => ({
                                      ...prev,
                                      galleryImages: updated,
                                    }));
                                  }}
                                />

                                <button
                                  type="button"
                                  onClick={() =>
                                    setYatraForm((prev) => ({
                                      ...prev,
                                      galleryImages: prev.galleryImages.filter(
                                        (_, i) => i !== index,
                                      ),
                                    }))
                                  }
                                  className="px-4 rounded-xl bg-red-500 text-white"
                                >
                                  ✕
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* ITINERARY */}
                        <div className={cardClass}>
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-white">Itinerary</h3>

                            <button
                              type="button"
                              onClick={() =>
                                setYatraForm((prev) => ({
                                  ...prev,
                                  itinerary: [
                                    ...(prev.itinerary || []),
                                    {
                                      day: (prev.itinerary?.length || 0) + 1,
                                      points: [""],
                                    },
                                  ],
                                }))
                              }
                              className="px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-bold"
                            >
                              Add Day
                            </button>
                          </div>

                          {(yatraForm.itinerary || []).map((day, dayIndex) => (
                            <div
                              key={dayIndex}
                              className="border border-white/10 rounded-2xl p-4 mb-4"
                            >
                              <div className="flex justify-between items-center mb-4">
                                <h4 className="text-white font-bold">Day {day.day}</h4>

                                <button
                                  type="button"
                                  onClick={() =>
                                    setYatraForm((prev) => ({
                                      ...prev,
                                      itinerary:
                                        prev.itinerary?.filter((_, i) => i !== dayIndex) || [],
                                    }))
                                  }
                                  className="px-4 rounded-xl bg-red-500 text-white"
                                >
                                  ✕
                                </button>
                              </div>

                              {day.points.map((point, pointIndex) => (
                                <div key={pointIndex} className="flex gap-3 mb-3">
                                  <input
                                    className={inputClass}
                                    value={point}
                                    placeholder="Ganga Aarti"
                                    onChange={(e) => {
                                      const updated = [...(yatraForm.itinerary || [])];
                                      updated[dayIndex].points[pointIndex] = e.target.value;

                                      setYatraForm((prev) => ({
                                        ...prev,
                                        itinerary: updated,
                                      }));
                                    }}
                                  />

                                  <button
                                    type="button"
                                    onClick={() => {
                                      const updated = [...(yatraForm.itinerary || [])];

                                      updated[dayIndex].points = updated[dayIndex].points.filter(
                                        (_, i) => i !== pointIndex,
                                      );

                                      setYatraForm((prev) => ({
                                        ...prev,
                                        itinerary: updated,
                                      }));
                                    }}
                                    className="px-4 rounded-xl bg-red-500 text-white"
                                  >
                                    ✕
                                  </button>
                                </div>
                              ))}

                              <button
                                type="button"
                                onClick={() => {
                                  const updated = [...(yatraForm.itinerary || [])];

                                  updated[dayIndex].points.push("");

                                  setYatraForm((prev) => ({
                                    ...prev,
                                    itinerary: updated,
                                  }));
                                }}
                                className="text-xs text-amber-400"
                              >
                                + Add Point
                              </button>
                            </div>
                          ))}
                        </div>

                        {/* DARSHANS */}
                        <div className={cardClass}>
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-white">Darshans</h3>

                            <button
                              type="button"
                              onClick={() =>
                                setYatraForm((prev) => ({
                                  ...prev,
                                  darshans: [
                                    ...(prev.darshans || []),
                                    {
                                      title: "",
                                      items: [""],
                                    },
                                  ],
                                }))
                              }
                              className="px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-bold"
                            >
                              Add Category
                            </button>
                          </div>

                          {(yatraForm.darshans || []).map((category, categoryIndex) => (
                            <div
                              key={categoryIndex}
                              className="border border-white/10 rounded-2xl p-4 mb-4"
                            >
                              <div className="flex gap-3 mb-4">
                                <input
                                  className={inputClass}
                                  value={category.title}
                                  placeholder="Jyotirlinga Darshan"
                                  onChange={(e) => {
                                    const updated = [...(yatraForm.darshans || [])];
                                    updated[categoryIndex].title = e.target.value;

                                    setYatraForm((prev) => ({
                                      ...prev,
                                      darshans: updated,
                                    }));
                                  }}
                                />

                                <button
                                  type="button"
                                  onClick={() =>
                                    setYatraForm((prev) => ({
                                      ...prev,
                                      darshans:
                                        prev.darshans?.filter((_, i) => i !== categoryIndex) || [],
                                    }))
                                  }
                                  className="px-4 rounded-xl bg-red-500 text-white"
                                >
                                  ✕
                                </button>
                              </div>

                              {category.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="flex gap-3 mb-3">
                                  <input
                                    className={inputClass}
                                    value={item}
                                    placeholder="Kashi Vishwanath Temple"
                                    onChange={(e) => {
                                      const updated = [...(yatraForm.darshans || [])];
                                      updated[categoryIndex].items[itemIndex] = e.target.value;

                                      setYatraForm((prev) => ({
                                        ...prev,
                                        darshans: updated,
                                      }));
                                    }}
                                  />

                                  <button
                                    type="button"
                                    onClick={() => {
                                      const updated = [...(yatraForm.darshans || [])];

                                      updated[categoryIndex].items = updated[
                                        categoryIndex
                                      ].items.filter((_, i) => i !== itemIndex);

                                      setYatraForm((prev) => ({
                                        ...prev,
                                        darshans: updated,
                                      }));
                                    }}
                                    className="px-4 rounded-xl bg-red-500 text-white"
                                  >
                                    ✕
                                  </button>
                                </div>
                              ))}

                              <button
                                type="button"
                                onClick={() => {
                                  const updated = [...(yatraForm.darshans || [])];

                                  updated[categoryIndex].items.push("");

                                  setYatraForm((prev) => ({
                                    ...prev,
                                    darshans: updated,
                                  }));
                                }}
                                className="text-xs text-amber-400"
                              >
                                + Add Darshan
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* FOOTER */}
                  <div className="pt-4 flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="px-8 py-3 rounded-full bg-white/5 text-white/60 font-bold uppercase tracking-widest text-[10px]"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="px-10 py-3 rounded-full bg-linear-to-r from-[#FF7A00] to-[#A82A9C] text-white font-black uppercase tracking-widest text-[10px]"
                    >
                      {loading ? "Saving..." : "Save Yatras"}
                    </button>
                  </div>
                </form>
              )}

              {/* TEERTHA FORM */}
              {formType === "teertha" && (
                <form onSubmit={handleTeerthaSubmit} className="space-y-8">
                  {/* BASIC INFORMATION */}
                  <div>
                    <h3 className="mb-6 text-sm font-bold text-white">Basic Information</h3>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Journey Name *
                        </label>

                        <input
                          required
                          className={inputClass}
                          type="text"
                          placeholder="Shiv Dham Yatra"
                          value={teerthaForm.name}
                          onChange={(e) =>
                            setTeerthaForm((prev) => ({
                              ...prev,
                              name: e.target.value,
                              slug: e.target.value
                                .trim()
                                .toLowerCase()
                                .replace(/\s+/g, "-")
                                .replace(/[^\w-]/g, ""),
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Dates
                        </label>

                        <input
                          className={inputClass}
                          type="text"
                          placeholder="20 Oct - 25 Oct"
                          value={teerthaForm.date}
                          onChange={(e) =>
                            setTeerthaForm((prev) => ({
                              ...prev,
                              date: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Duration
                        </label>

                        <input
                          className={inputClass}
                          type="text"
                          placeholder="6 Days / 5 Nights"
                          value={teerthaForm.duration}
                          onChange={(e) =>
                            setTeerthaForm((prev) => ({
                              ...prev,
                              duration: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Slug
                        </label>

                        <input
                          className={inputClass}
                          type="text"
                          value={teerthaForm.slug}
                          onChange={(e) =>
                            setTeerthaForm((prev) => ({
                              ...prev,
                              slug: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Tagline
                        </label>

                        <input
                          className={inputClass}
                          type="text"
                          value={teerthaForm.tagline}
                          onChange={(e) =>
                            setTeerthaForm((prev) => ({
                              ...prev,
                              tagline: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Region
                        </label>

                        <input
                          className={inputClass}
                          type="text"
                          value={teerthaForm.region}
                          onChange={(e) =>
                            setTeerthaForm((prev) => ({
                              ...prev,
                              region: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2 lg:col-span-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Significance
                        </label>

                        <input
                          className={inputClass}
                          type="text"
                          value={teerthaForm.significance}
                          onChange={(e) =>
                            setTeerthaForm((prev) => ({
                              ...prev,
                              significance: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2 lg:col-span-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Journey Description
                        </label>

                        <textarea
                          rows={5}
                          className={textareaClass}
                          placeholder="Describe your yatra..."
                          value={teerthaForm.description}
                          onChange={(e) =>
                            setTeerthaForm((prev) => ({
                              ...prev,
                              description: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2 lg:col-span-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Basic Description
                        </label>

                        <textarea
                          rows={5}
                          className={textareaClass}
                          placeholder="Describe your yatra..."
                          value={teerthaForm.desc}
                          onChange={(e) =>
                            setTeerthaForm((prev) => ({
                              ...prev,
                              desc: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Journey Slogn *
                        </label>

                        <input
                          required
                          className={inputClass}
                          type="text"
                          placeholder="Shiv Dham Yatra"
                          value={teerthaForm.slogan}
                          onChange={(e) =>
                            setTeerthaForm((prev) => ({
                              ...prev,
                              slogan: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Stays Heading
                        </label>

                        <input
                          className={inputClass}
                          type="text"
                          placeholder="20 Oct - 25 Oct"
                          value={teerthaForm.staysHeading}
                          onChange={(e) =>
                            setTeerthaForm((prev) => ({
                              ...prev,
                              staysHeading: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2 lg:col-span-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Stay Description
                        </label>

                        <textarea
                          rows={5}
                          className={textareaClass}
                          placeholder="Describe your teerthas..."
                          value={teerthaForm.staysDesc}
                          onChange={(e) =>
                            setTeerthaForm((prev) => ({
                              ...prev,
                              staysDesc: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* COVER & PRICING */}
                  <div className={cardClass}>
                    <h3 className="mb-6 text-sm font-bold text-white">Pricing & Cover</h3>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Banner Image URL
                        </label>

                        <input
                          className={inputClass}
                          type="url"
                          placeholder="https://..."
                          value={teerthaForm.img}
                          onChange={(e) =>
                            setTeerthaForm((prev) => ({
                              ...prev,
                              img: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Cover Image URL
                        </label>

                        <input
                          className={inputClass}
                          type="url"
                          placeholder="https://..."
                          value={teerthaForm.thumbnailImage}
                          onChange={(e) =>
                            setTeerthaForm((prev) => ({
                              ...prev,
                              thumbnailImage: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Double Occupancy
                        </label>

                        <input
                          className={inputClass}
                          type="text"
                          placeholder="₹15,999"
                          value={teerthaForm.doublePrice}
                          onChange={(e) =>
                            setTeerthaForm((prev) => ({
                              ...prev,
                              doublePrice: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                          Triple Occupancy
                        </label>

                        <input
                          className={inputClass}
                          type="text"
                          placeholder="₹13,999"
                          value={teerthaForm.triplePrice}
                          onChange={(e) =>
                            setTeerthaForm((prev) => ({
                              ...prev,
                              triplePrice: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* PUBLISH */}
                  <div className={cardClass}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-white">Published Status</h3>
                        <p className="text-xs text-white/40">Visibility on public portal</p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setTeerthaForm((prev) => ({
                            ...prev,
                            isPublished: !prev.isPublished,
                          }))
                        }
                        className={`relative h-7 w-14 rounded-full transition ${
                          teerthaForm.isPublished
                            ? "bg-linear-to-r from-[#FF7A00] to-[#A82A9C]"
                            : "bg-white/10"
                        }`}
                      >
                        <div
                          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
                            teerthaForm.isPublished ? "right-1" : "left-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* ADVANCED */}
                  <div className={cardClass}>
                    <button
                      type="button"
                      onClick={() => setShowAdvanced(!showAdvanced)}
                      className="text-xs font-black uppercase tracking-widest text-amber-400"
                    >
                      {showAdvanced ? "Hide Advanced Details" : "Show Advanced Details"}
                    </button>

                    {showAdvanced && (
                      <div className="mt-8 space-y-8">
                        {/* HIGHLIGHTS */}
                        <div className={cardClass}>
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-white">Highlights</h3>

                            <button
                              type="button"
                              onClick={() =>
                                setTeerthaForm((prev) => ({
                                  ...prev,
                                  highlights: [...(prev.highlights || []), ""],
                                }))
                              }
                              className="px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-bold"
                            >
                              Add Highlight
                            </button>
                          </div>

                          {(teerthaForm.highlights || []).map((highlight, index) => (
                            <div key={index} className="flex gap-3 mb-3">
                              <input
                                className={inputClass}
                                value={highlight}
                                placeholder="Mahakaleshwar Bhasma Aarti"
                                onChange={(e) => {
                                  const updated = [...(teerthaForm.highlights || [])];
                                  updated[index] = e.target.value;

                                  setTeerthaForm((prev) => ({
                                    ...prev,
                                    highlights: updated,
                                  }));
                                }}
                              />

                              <button
                                type="button"
                                onClick={() => {
                                  const updated = (teerthaForm.highlights || []).filter(
                                    (_, i) => i !== index,
                                  );

                                  setTeerthaForm((prev) => ({
                                    ...prev,
                                    highlights: updated,
                                  }));
                                }}
                                className="px-4 rounded-xl bg-red-500 text-white"
                              >
                                ✕
                              </button>
                            </div>
                          ))}
                        </div>
                        {/* INCLUSIONS */}
                        <div className={cardClass}>
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-white">Inclusions</h3>

                            <button
                              type="button"
                              onClick={() =>
                                setTeerthaForm((prev) => ({
                                  ...prev,
                                  inclusions: [...(prev.inclusions || []), ""],
                                }))
                              }
                              className="px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-bold"
                            >
                              Add Inclusion
                            </button>
                          </div>

                          {(teerthaForm.inclusions || []).map((item, index) => (
                            <div key={index} className="flex gap-3 mb-3">
                              <input
                                className={inputClass}
                                value={item}
                                placeholder="Hotel Accommodation"
                                onChange={(e) => {
                                  const updated = [...(teerthaForm.inclusions || [])];
                                  updated[index] = e.target.value;
                                  setTeerthaForm((prev) => ({
                                    ...prev,
                                    inclusions: updated,
                                  }));
                                }}
                              />

                              <button
                                type="button"
                                onClick={() =>
                                  setTeerthaForm((prev) => ({
                                    ...prev,
                                    inclusions:
                                      prev.inclusions?.filter((_, i) => i !== index) || [],
                                  }))
                                }
                                className="px-4 rounded-xl bg-red-500 text-white"
                              >
                                ✕
                              </button>
                            </div>
                          ))}
                        </div>

                        {/* GALLERY */}
                        <div className={cardClass}>
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-white">Gallery Images</h3>

                            <button
                              type="button"
                              onClick={() =>
                                setTeerthaForm((prev) => ({
                                  ...prev,
                                  galleryImages: [...prev.galleryImages, ""],
                                }))
                              }
                              className="px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-bold"
                            >
                              Add Image
                            </button>
                          </div>

                          <div className="space-y-3">
                            {teerthaForm.galleryImages.map((image, index) => (
                              <div key={index} className="flex gap-3">
                                <input
                                  className={inputClass}
                                  placeholder="Image URL"
                                  value={image}
                                  onChange={(e) => {
                                    const updated = [...teerthaForm.galleryImages];

                                    updated[index] = e.target.value;

                                    setTeerthaForm((prev) => ({
                                      ...prev,
                                      galleryImages: updated,
                                    }));
                                  }}
                                />

                                <button
                                  type="button"
                                  onClick={() =>
                                    setTeerthaForm((prev) => ({
                                      ...prev,
                                      galleryImages: prev.galleryImages.filter(
                                        (_, i) => i !== index,
                                      ),
                                    }))
                                  }
                                  className="px-4 rounded-xl bg-red-500 text-white"
                                >
                                  ✕
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* ITINERARY */}
                        <div className={cardClass}>
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-white">Itinerary</h3>

                            <button
                              type="button"
                              onClick={() =>
                                setTeerthaForm((prev) => ({
                                  ...prev,
                                  itinerary: [
                                    ...(prev.itinerary || []),
                                    {
                                      day: (prev.itinerary?.length || 0) + 1,
                                      points: [""],
                                    },
                                  ],
                                }))
                              }
                              className="px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-bold"
                            >
                              Add Day
                            </button>
                          </div>

                          {(teerthaForm.itinerary || []).map((day, dayIndex) => (
                            <div
                              key={dayIndex}
                              className="border border-white/10 rounded-2xl p-4 mb-4"
                            >
                              <div className="flex justify-between items-center mb-4">
                                <h4 className="text-white font-bold">Day {day.day}</h4>

                                <button
                                  type="button"
                                  onClick={() =>
                                    setTeerthaForm((prev) => ({
                                      ...prev,
                                      itinerary:
                                        prev.itinerary?.filter((_, i) => i !== dayIndex) || [],
                                    }))
                                  }
                                  className="px-4 rounded-xl bg-red-500 text-white"
                                >
                                  ✕
                                </button>
                              </div>

                              {day.points.map((point, pointIndex) => (
                                <div key={pointIndex} className="flex gap-3 mb-3">
                                  <input
                                    className={inputClass}
                                    value={point}
                                    placeholder="Ganga Aarti"
                                    onChange={(e) => {
                                      const updated = [...(teerthaForm.itinerary || [])];
                                      updated[dayIndex].points[pointIndex] = e.target.value;
                                      setTeerthaForm((prev) => ({
                                        ...prev,
                                        itinerary: updated,
                                      }));
                                    }}
                                  />

                                  <button
                                    type="button"
                                    onClick={() => {
                                      const updated = [...(teerthaForm.itinerary || [])];
                                      updated[dayIndex].points = updated[dayIndex].points.filter(
                                        (_, i) => i !== pointIndex,
                                      );
                                      setTeerthaForm((prev) => ({
                                        ...prev,
                                        itinerary: updated,
                                      }));
                                    }}
                                    className="px-4 rounded-xl bg-red-500 text-white"
                                  >
                                    ✕
                                  </button>
                                </div>
                              ))}

                              <button
                                type="button"
                                onClick={() => {
                                  const updated = [...(teerthaForm.itinerary || [])];

                                  updated[dayIndex].points.push("");

                                  setTeerthaForm((prev) => ({
                                    ...prev,
                                    itinerary: updated,
                                  }));
                                }}
                                className="text-xs text-amber-400"
                              >
                                + Add Point
                              </button>
                            </div>
                          ))}
                        </div>

                        {/* DARSHANS */}
                        <div className={cardClass}>
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-white">Darshans</h3>

                            <button
                              type="button"
                              onClick={() =>
                                setTeerthaForm((prev) => ({
                                  ...prev,
                                  darshans: [
                                    ...(prev.darshans || []),
                                    {
                                      title: "",
                                      items: [""],
                                    },
                                  ],
                                }))
                              }
                              className="px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-bold"
                            >
                              Add Category
                            </button>
                          </div>

                          {(teerthaForm.darshans || []).map((category, categoryIndex) => (
                            <div
                              key={categoryIndex}
                              className="border border-white/10 rounded-2xl p-4 mb-4"
                            >
                              <div className="flex gap-3 mb-4">
                                <input
                                  className={inputClass}
                                  value={category.title}
                                  placeholder="Jyotirlinga Darshan"
                                  onChange={(e) => {
                                    const updated = [...(teerthaForm.darshans || [])];
                                    updated[categoryIndex].title = e.target.value;

                                    setTeerthaForm((prev) => ({
                                      ...prev,
                                      darshans: updated,
                                    }));
                                  }}
                                />

                                <button
                                  type="button"
                                  onClick={() =>
                                    setTeerthaForm((prev) => ({
                                      ...prev,
                                      darshans:
                                        prev.darshans?.filter((_, i) => i !== categoryIndex) || [],
                                    }))
                                  }
                                  className="px-4 rounded-xl bg-red-500 text-white"
                                >
                                  ✕
                                </button>
                              </div>

                              {category.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="flex gap-3 mb-3">
                                  <input
                                    className={inputClass}
                                    value={item}
                                    placeholder="Kashi Vishwanath Temple"
                                    onChange={(e) => {
                                      const updated = [...(teerthaForm.darshans || [])];
                                      updated[categoryIndex].items[itemIndex] = e.target.value;

                                      setTeerthaForm((prev) => ({
                                        ...prev,
                                        darshans: updated,
                                      }));
                                    }}
                                  />

                                  <button
                                    type="button"
                                    onClick={() => {
                                      const updated = [...(teerthaForm.darshans || [])];

                                      updated[categoryIndex].items = updated[
                                        categoryIndex
                                      ].items.filter((_, i) => i !== itemIndex);

                                      setTeerthaForm((prev) => ({
                                        ...prev,
                                        darshans: updated,
                                      }));
                                    }}
                                    className="px-4 rounded-xl bg-red-500 text-white"
                                  >
                                    ✕
                                  </button>
                                </div>
                              ))}

                              <button
                                type="button"
                                onClick={() => {
                                  const updated = [...(teerthaForm.darshans || [])];

                                  updated[categoryIndex].items.push("");

                                  setTeerthaForm((prev) => ({
                                    ...prev,
                                    darshans: updated,
                                  }));
                                }}
                                className="text-xs text-amber-400"
                              >
                                + Add Darshan
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* FOOTER */}
                  <div className="pt-4 flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="px-8 py-3 rounded-full bg-white/5 text-white/60 font-bold uppercase tracking-widest text-[10px]"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="px-10 py-3 rounded-full bg-linear-to-r from-[#FF7A00] to-[#A82A9C] text-white font-black uppercase tracking-widest text-[10px]"
                    >
                      {loading ? "Saving..." : "Save Teerthas"}
                    </button>
                  </div>
                </form>
              )}

              {/* VIDEO FORM  */}
              {formType === "video" && (
                <form onSubmit={handleVideoSubmit} className="space-y-8">
                  {/* TITLE */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                      Video Title
                    </label>

                    <input
                      type="text"
                      required
                      value={videoForm.title}
                      onChange={(e) =>
                        setVideoForm((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-400"
                      placeholder="The Spiritual Significance of Kashi"
                    />
                  </div>

                  {/* DESCRIPTION */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                      Description
                    </label>

                    <textarea
                      rows={5}
                      required
                      value={videoForm.description}
                      onChange={(e) =>
                        setVideoForm((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-400 resize-none"
                      placeholder="An insightful discussion on the spiritual importance of Kashi and its timeless traditions."
                    />
                  </div>

                  {/* CATEGORY */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                      Category
                    </label>

                    <select
                      value={videoForm.category}
                      onChange={(e) =>
                        setVideoForm((prev) => ({
                          ...prev,
                          category: e.target.value,
                        }))
                      }
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-amber-400 cursor-pointer [&>option]:bg-[#1a0a1e]"
                    >
                      <option value="Kashi Knowledge Portal">Kashi Knowledge Portal</option>

                      <option value="Kashi Knowledge Portal • Quick Bits">Quick Bits</option>

                      <option value="Testimonials (Coming Soon)">Testimonials</option>
                    </select>
                  </div>

                  {/* YOUTUBE LINK */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                      YouTube Link
                    </label>

                    <input
                      type="url"
                      required
                      value={videoForm.youtubeLink}
                      onChange={(e) =>
                        setVideoForm((prev) => ({
                          ...prev,
                          youtubeLink: e.target.value,
                        }))
                      }
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-400"
                      placeholder="https://www.youtube.com/watch?v=..."
                    />
                  </div>

                  {/* THUMBNAIL */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                      Thumbnail Image URL
                    </label>

                    <input
                      type="url"
                      required
                      value={videoForm.thumbnailImage}
                      onChange={(e) =>
                        setVideoForm((prev) => ({
                          ...prev,
                          thumbnailImage: e.target.value,
                        }))
                      }
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-400"
                      placeholder="https://example.com/thumbnail.jpg"
                    />
                  </div>

                  {/* TOGGLES */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* FEATURED */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-semibold">Featured Video</h3>
                        <p className="text-xs text-white/40">Show on homepage highlights</p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setVideoForm((prev) => ({
                            ...prev,
                            featured: !prev.featured,
                          }))
                        }
                        className={`relative h-7 w-14 rounded-full transition ${
                          videoForm.featured
                            ? "bg-gradient-to-r from-[#FF7A00] to-[#A82A9C]"
                            : "bg-white/10"
                        }`}
                      >
                        <div
                          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
                            videoForm.featured ? "right-1" : "left-1"
                          }`}
                        />
                      </button>
                    </div>

                    {/* PUBLISHED */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-semibold">Published</h3>
                        <p className="text-xs text-white/40">Visible to website visitors</p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setVideoForm((prev) => ({
                            ...prev,
                            isPublished: !prev.isPublished,
                          }))
                        }
                        className={`relative h-7 w-14 rounded-full transition ${
                          videoForm.isPublished
                            ? "bg-gradient-to-r from-[#FF7A00] to-[#A82A9C]"
                            : "bg-white/10"
                        }`}
                      >
                        <div
                          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
                            videoForm.isPublished ? "right-1" : "left-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* ACTIONS */}
                  <div className="pt-6 border-t border-white/5 flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="px-8 py-3 rounded-full bg-white/5 text-white/60 font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 hover:text-white transition cursor-pointer"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="px-10 py-3 rounded-full bg-linear-to-r from-[#FF7A00] to-[#A82A9C] text-white font-black uppercase tracking-widest text-[10px] shadow-lg shadow-[#FF7A00]/20 hover:scale-105 transition cursor-pointer"
                    >
                      {loading ? "Saving..." : "Save Video"}
                    </button>
                  </div>
                </form>
              )}

              {/* BLOG FORM */}
              {formType === "blog" && (
                <form onSubmit={handleBlogSubmit} className="space-y-8">
                  {/* Title */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                      Blog Title
                    </label>

                    <input
                      type="text"
                      required
                      value={blogForm.title}
                      onChange={(e) =>
                        setBlogForm({
                          ...blogForm,
                          title: e.target.value,
                          slug: e.target.value
                            .toLowerCase()
                            .trim()
                            .replace(/\s+/g, "-")
                            .replace(/[^\w-]/g, ""),
                        })
                      }
                      className="w-full px-5 py-4 rounded-2xl bg-white/4 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-400"
                      placeholder="Best Career Options After Graduation"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                      Blog Slug
                    </label>

                    <input
                      type="text"
                      required
                      value={blogForm.slug}
                      onChange={(e) =>
                        setBlogForm({
                          ...blogForm,
                          slug: e.target.value
                            .toLowerCase()
                            .trim()
                            .replace(/\s+/g, "-")
                            .replace(/[^\w-]/g, ""),
                        })
                      }
                      className="w-full px-5 py-4 rounded-2xl bg-white/4 border border-white/10 text-white"
                      placeholder="best-career-options-after-graduation"
                    />
                  </div>

                  {/* Excerpt */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                      Excerpt
                    </label>

                    <textarea
                      rows={3}
                      required
                      value={blogForm.excerpt}
                      onChange={(e) =>
                        setBlogForm({
                          ...blogForm,
                          excerpt: e.target.value,
                        })
                      }
                      className="w-full px-5 py-4 rounded-2xl bg-white/4 border border-white/10 text-white"
                      placeholder="Short summary of the blog..."
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                      Blog Content
                    </label>

                    <textarea
                      rows={10}
                      required
                      value={blogForm.content}
                      onChange={(e) =>
                        setBlogForm({
                          ...blogForm,
                          content: e.target.value,
                        })
                      }
                      className="w-full px-5 py-4 rounded-2xl bg-white/4 border border-white/10 text-white"
                      placeholder="<h2>Career Guide</h2><p>...</p>"
                    />
                  </div>

                  {/* Thumbnail */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                      Thumbnail Image
                    </label>

                    <input
                      type="url"
                      required
                      value={blogForm.thumbnailImage}
                      onChange={(e) =>
                        setBlogForm({
                          ...blogForm,
                          thumbnailImage: e.target.value,
                        })
                      }
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white"
                      placeholder="https://yourcdn.com/blog.jpg"
                    />
                  </div>

                  {/* Author + Category */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                        Author
                      </label>

                      <input
                        type="text"
                        value={blogForm.author}
                        onChange={(e) =>
                          setBlogForm({
                            ...blogForm,
                            author: e.target.value,
                          })
                        }
                        className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white"
                        placeholder="Kashi Team"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                        Category
                      </label>

                      <input
                        type="text"
                        value={blogForm.category}
                        onChange={(e) =>
                          setBlogForm({
                            ...blogForm,
                            category: e.target.value,
                          })
                        }
                        className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white"
                        placeholder="Career"
                      />
                    </div>
                  </div>

                  {/* Tags + Read Time */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                        Tags
                      </label>

                      <input
                        type="text"
                        value={blogForm.tags.join(", ")}
                        onChange={(e) =>
                          setBlogForm({
                            ...blogForm,
                            tags: e.target.value
                              .split(",")
                              .map((tag) => tag.trim())
                              .filter(Boolean),
                          })
                        }
                        className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white"
                        placeholder="career, graduation, jobs"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">
                        Read Time
                      </label>

                      <input
                        type="text"
                        value={blogForm.readTime}
                        onChange={(e) =>
                          setBlogForm({
                            ...blogForm,
                            readTime: e.target.value,
                          })
                        }
                        className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white"
                        placeholder="6 min read"
                      />
                    </div>
                  </div>

                  {/* Featured + Published */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* FEATURED */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-semibold">Featured Video</h3>
                        <p className="text-xs text-white/40">Show on homepage highlights</p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setBlogForm((prev) => ({
                            ...prev,
                            featured: !prev.featured,
                          }))
                        }
                        className={`relative h-7 w-14 rounded-full transition ${
                          blogForm.featured
                            ? "bg-gradient-to-r from-[#FF7A00] to-[#A82A9C]"
                            : "bg-white/10"
                        }`}
                      >
                        <div
                          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
                            blogForm.featured ? "right-1" : "left-1"
                          }`}
                        />
                      </button>
                    </div>

                    {/* PUBLISHED */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-semibold">Published</h3>
                        <p className="text-xs text-white/40">Visible to website visitors</p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setBlogForm((prev) => ({
                            ...prev,
                            isPublished: !prev.isPublished,
                          }))
                        }
                        className={`relative h-7 w-14 rounded-full transition ${
                          blogForm.isPublished
                            ? "bg-gradient-to-r from-[#FF7A00] to-[#A82A9C]"
                            : "bg-white/10"
                        }`}
                      >
                        <div
                          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
                            blogForm.isPublished ? "right-1" : "left-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="px-8 py-3 rounded-full bg-white/5 text-white/60 font-bold uppercase tracking-widest text-[10px]"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="px-10 py-3 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#A82A9C] text-white font-black uppercase tracking-widest text-[10px]"
                    >
                      {loading ? "Saving..." : "Save Blog"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* DELETE DIALOG */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-[#000]/80 backdrop-blur-md z-[110] flex items-center justify-center p-4">
          <div className="bg-[#1a0a1e] border border-white/10 rounded-[2.5rem] w-full max-w-sm p-8 space-y-8 shadow-2xl text-center">
            <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center text-red-500 mx-auto text-2xl">
              ⚠️
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-display font-bold text-white">Delete Permanently?</h3>
              <p className="text-white/40 text-xs leading-relaxed">
                This action cannot be undone. All data related to this {deleteConfirm.type} will be
                removed from our sacred vaults.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition cursor-pointer"
              >
                Keep it
              </button>
              <button
                onClick={handleDeleteItem}
                className="flex-1 py-4 bg-red-500 text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-red-500/20 cursor-pointer"
              >
                {loadingDeleted ? "Deleting..." : "Delete Now"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

