import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { FlowerField } from "@/components/FlowerField";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { API_ENDPOINTS } from "@/lib/api-config";
import { useState, useEffect, useRef } from "react";
import { FALLBACK_BLOGS } from "@/constants/blogs-page";

const blogHero = "https://i0.wp.com/mindeasy.com/wp-content/uploads/2023/05/What-are-Soul-Ties.jpg";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
  head: () => ({
    title: "Samyam Blogs | Sacred Wisdom & Spiritual Insights",
    meta: [
      {
        name: "description",
        content:
          "Explore articles on Yatra guides, Hindu rituals, spiritual practices, and sacred destinations written by scholars and spiritual practitioners.",
      },
    ],
  }),
});

const CATEGORIES = ["All", "Spirituality", "Travel Tips", "Yatra Guide", "Rituals", "Philosophy"];

/* ─── tiny helpers ─── */
const OM = () => (
  <span
    aria-hidden
    className="select-none text-amber-400/30 font-display leading-none"
    style={{ fontSize: "inherit" }}
  >
    ॐ
  </span>
);

const Divider = () => (
  <div className="flex items-center gap-3 my-1">
    <span className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
    <OM />
    <span className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-300/40 to-transparent" />
  </div>
);

/* ─── Featured card (first blog) ─── */
function FeaturedCard({
  blog,
  onExpand,
  isExpanded,
}: {
  blog: any;
  onExpand: () => void;
  isExpanded: boolean;
}) {
  return (
    <ScrollReveal variant="fade-up">
      <div
        className={`relative rounded-[2rem] overflow-hidden border transition-all duration-500 ${
          isExpanded
            ? "border-amber-400/50 shadow-[0_32px_80px_-16px_rgba(245,158,11,0.2)]"
            : "border-amber-900/20 shadow-[0_16px_60px_-12px_rgba(92,36,94,0.18)] hover:border-amber-400/30 hover:shadow-[0_24px_70px_-12px_rgba(245,158,11,0.15)]"
        }`}
        style={{ background: "linear-gradient(135deg, #fdf8f0 0%, #fff9f0 60%, #fef3e8 100%)" }}
      >
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[440px] overflow-hidden">
            <img
              src={blog.thumbnailImage}
              alt={blog.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#fdf8f0]/80 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fdf8f0]/90 to-transparent lg:hidden" />

            {/* Featured badge */}
            <div className="absolute top-5 left-5">
              <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] bg-amber-500 text-white shadow-lg">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                </svg>
                Featured
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 sm:p-12 flex flex-col justify-center gap-5">
            {/* Category + meta */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-amber-500/12 text-amber-700 border border-amber-500/25">
                {blog.category}
              </span>
              <span className="text-muted-foreground/50 text-[10px]">·</span>
              <span className="text-muted-foreground text-[11px] font-body">{blog.readTime}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-[#1a0a1e] leading-[1.1] tracking-tight">
              {blog.title}
            </h2>

            <Divider />

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-sm font-bold shadow-md">
                {blog.author?.charAt(0) ?? "S"}
              </div>
              <div className="flex flex-col">
                <span className="text-[#1a0a1e] font-semibold text-xs">{blog.author}</span>
                <span className="text-muted-foreground text-[10px] font-body">Author</span>
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-sm text-[#4a3050]/80 leading-relaxed font-body line-clamp-3">
              {blog.excerpt}
            </p>

            {/* Tags */}
            {blog.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {blog.tags.slice(0, 4).map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-[#f5e6ff]/60 text-purple-700 border border-purple-200/60"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <button
              onClick={onExpand}
              className="mt-2 w-fit flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full text-sm shadow-[0_6px_24px_rgba(245,158,11,0.35)] hover:scale-[1.04] hover:shadow-[0_8px_32px_rgba(245,158,11,0.5)] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              {isExpanded ? (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                  Close Article
                </>
              ) : (
                <>
                  Read Full Article
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Expanded content */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          } overflow-hidden`}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent mx-8" />
          <div className="px-8 sm:px-12 py-10 sm:py-14 space-y-6">
            {blog.coverImage && (
              <div className="rounded-2xl overflow-hidden max-h-96 w-full border border-amber-100">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <article
              className="prose prose-sm sm:prose-base max-w-none font-body
                prose-headings:font-display prose-headings:text-[#1a0a1e]
                prose-p:text-[#4a3050]/80 prose-p:leading-relaxed
                prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-[#1a0a1e]
                prose-blockquote:border-l-amber-400 prose-blockquote:text-[#4a3050]/70
                prose-img:rounded-xl"
              dangerouslySetInnerHTML={{
                __html:
                  blog.content ??
                  `<p>${blog.excerpt}</p><p class="opacity-50 italic">Full article content not available in preview.</p>`,
              }}
            />
            <button
              onClick={onExpand}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-amber-400/40 text-amber-700 text-xs sm:text-sm font-semibold hover:bg-amber-50 transition cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
              Collapse Article
            </button>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ─── Regular blog card ─── */
function BlogCard({
  blog,
  idx,
  onExpand,
  isExpanded,
}: {
  blog: any;
  idx: number;
  onExpand: () => void;
  isExpanded: boolean;
}) {
  const isEven = idx % 2 === 1;

  return (
    <ScrollReveal variant={isEven ? "fade-left" : "fade-right"}>
      <div
        className={`rounded-[1.75rem] overflow-hidden border transition-all duration-500 ${
          isExpanded
            ? "border-amber-400/40 shadow-[0_24px_70px_-16px_rgba(245,158,11,0.18)]"
            : "border-[#e8ddf0]/60 shadow-[0_8px_40px_-8px_rgba(92,36,94,0.08)] hover:border-amber-400/25 hover:shadow-[0_20px_60px_-12px_rgba(245,158,11,0.12)]"
        } bg-white`}
      >
        {/* Card header */}
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Content */}
            <div
              className={`space-y-4 text-left lg:col-span-7 order-2 ${isEven ? "lg:order-2" : "lg:order-1"}`}
            >
              {/* Category + meta row */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.18em] bg-amber-500/10 text-amber-700 border border-amber-500/20">
                  {blog.category}
                </span>
                <span className="text-[#9f8ba8] text-[10px]">·</span>
                <span className="text-[#9f8ba8] text-[11px] font-body">{blog.readTime}</span>
                {blog.isFeatured && (
                  <>
                    <span className="text-[#9f8ba8] text-[10px]">·</span>
                    <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.18em] bg-purple-500/8 text-purple-700 border border-purple-300/30">
                      Featured
                    </span>
                  </>
                )}
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#1a0a1e] leading-[1.15] tracking-tight">
                {blog.title}
              </h2>

              {/* Author */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-[10px] font-bold shadow">
                  {blog.author?.charAt(0) ?? "S"}
                </div>
                <span className="text-[#7a6680] text-xs font-body">
                  by <span className="text-[#1a0a1e] font-semibold">{blog.author}</span>
                </span>
              </div>

              {/* Excerpt */}
              <p className="text-sm text-[#6b5770]/80 leading-relaxed font-body line-clamp-3">
                {blog.excerpt}
              </p>

              {/* Tags */}
              {blog.tags?.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {blog.tags.slice(0, 4).map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-[9px] font-semibold bg-[#f7f0fc] text-purple-600 border border-purple-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA */}
              <div className="pt-1">
                <button
                  onClick={onExpand}
                  className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full text-xs sm:text-sm shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:shadow-[0_6px_28px_rgba(245,158,11,0.45)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  {isExpanded ? (
                    <>
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                      Close
                    </>
                  ) : (
                    <>
                      Read Article
                      <svg
                        className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Image */}
            <div className={`lg:col-span-5 order-1 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#f0e6f8]">
                <img
                  src={blog.thumbnailImage}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Expanded content */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          } overflow-hidden`}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent mx-6 sm:mx-10" />
          <div className="px-6 sm:px-10 py-8 sm:py-12 space-y-6">
            {blog.coverImage && (
              <div className="rounded-2xl overflow-hidden max-h-80 w-full border border-amber-100">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <article
              className="prose prose-sm sm:prose-base max-w-none font-body
                prose-headings:font-display prose-headings:text-[#1a0a1e]
                prose-p:text-[#6b5770]/80 prose-p:leading-relaxed
                prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-[#1a0a1e]
                prose-blockquote:border-l-amber-400
                prose-img:rounded-xl"
              dangerouslySetInnerHTML={{
                __html:
                  blog.content ??
                  `<p>${blog.excerpt}</p><p class="opacity-50 italic">Full article content not available in preview.</p>`,
              }}
            />
            <button
              onClick={onExpand}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-amber-400/40 text-amber-700 text-xs font-semibold hover:bg-amber-50 transition cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
              Collapse
            </button>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ─── Skeleton loader ─── */
function SkeletonCard({ i }: { i: number }) {
  return (
    <div
      className={`p-8 sm:p-10 rounded-[1.75rem] border border-[#f0e6f8]/60 bg-white animate-pulse ${
        i === 0 ? "h-80" : ""
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="h-5 bg-[#f5eef8] rounded-full w-1/4" />
          <div className="h-9 bg-[#f5eef8] rounded-xl w-3/4" />
          <div className="h-4 bg-[#f5eef8] rounded-full w-full" />
          <div className="h-4 bg-[#f5eef8] rounded-full w-5/6" />
          <div className="h-4 bg-[#f5eef8] rounded-full w-4/6" />
          <div className="flex gap-3 pt-2">
            <div className="h-10 w-28 bg-[#f5eef8] rounded-full" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/3] rounded-2xl bg-[#f5eef8]" />
        </div>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
function BlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.BLOGS);
        const result = await res.json();
        if (result.success && result.data && result.data.length > 0) {
          setBlogs(result.data.filter((b: any) => b.isPublished));
        } else {
          setBlogs(FALLBACK_BLOGS);
        }
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setBlogs(FALLBACK_BLOGS);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((b) => {
    const matchesCategory = activeCategory === "All" || b.category === activeCategory;
    const matchesSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const [featured, ...rest] = filteredBlogs;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#faf7fc] text-foreground flex flex-col justify-between">
      <Nav />

      {/* ─── HERO ─── */}
      <section
        data-nav-theme="dark"
        className="relative min-h-[80vh] flex items-end justify-center overflow-hidden"
      >
        {/* BG image */}
        <div className="absolute inset-0 z-0">
          <img
            src={blogHero}
            alt="Sacred Wisdom"
            className="w-full h-full object-cover object-center animate-ken-burns"
          />
          {/* Dark overlay with richer gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0510] via-[#1a0a1e]/60 to-[#1a0a1e]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0510]/40 to-transparent" />
          {/* Grain texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          {[
            { top: "18%", left: "8%", size: "w-2 h-2", color: "bg-amber-400/50", delay: "0s" },
            {
              top: "32%",
              right: "12%",
              size: "w-1.5 h-1.5",
              color: "bg-amber-300/35",
              delay: "2.5s",
            },
            {
              top: "55%",
              left: "65%",
              size: "w-2.5 h-2.5",
              color: "bg-purple-300/25",
              delay: "4s",
            },
            { top: "12%", right: "38%", size: "w-1 h-1", color: "bg-white/30", delay: "1.2s" },
            { top: "70%", left: "20%", size: "w-1.5 h-1.5", color: "bg-amber-200/20", delay: "3s" },
          ].map((p, i) => (
            <div
              key={i}
              className={`absolute ${p.size} rounded-full ${p.color} animate-gentle-float`}
              style={{
                top: p.top,
                left: (p as any).left,
                right: (p as any).right,
                animationDelay: p.delay,
              }}
            />
          ))}
        </div>

        {/* Hero content */}
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 pb-24 space-y-8">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 animate-hero-reveal-delay">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400/70" />
            <span className="text-amber-400/90 text-[10px] font-bold uppercase tracking-[0.4em] font-body">
              Sacred Wisdom & Insights
            </span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400/70" />
          </div>

          {/* Main heading */}
          <div className="animate-hero-reveal space-y-2">
            <h1 className="text-6xl md:text-8xl font-display font-semibold text-white tracking-tight leading-[0.9]">
              Stories of
            </h1>
            <h1 className="text-6xl md:text-8xl font-display font-semibold tracking-tight leading-[0.9]">
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                Devotion
              </span>
            </h1>
          </div>

          {/* Sub */}
          <p className="text-white/65 text-sm md:text-lg max-w-xl mx-auto font-body leading-relaxed animate-hero-reveal-delay">
            Writings by scholars, practitioners, and pilgrims — weaving ancient wisdom with the
            living experience of sacred Bharat.
          </p>

          {/* Search bar */}
          <div className="max-w-lg mx-auto relative animate-hero-reveal-delay">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-white/35">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by destination, ritual, or topic…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl border border-white/10 bg-white/8 backdrop-blur-2xl text-white placeholder:text-white/35 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all text-sm font-body"
            />
          </div>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-8 pt-2 animate-hero-reveal-delay">
            {[
              { n: blogs.length || "12+", l: "Articles" },
              { n: "5", l: "Categories" },
              { n: "∞", l: "Wisdom" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <span className="text-amber-400 font-display font-semibold text-xl">{s.n}</span>
                <span className="text-white/40 text-[10px] font-body uppercase tracking-widest">
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-gentle-float">
          <span className="text-white/25 text-[9px] uppercase tracking-[0.25em] font-body">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent" />
        </div>
      </section>

      {/* ─── FILTER STRIP ─── */}
      <section
        data-nav-theme="light"
        className="sticky top-0 z-30 py-4 px-6 border-b border-[#e8ddf0]/80"
        style={{ background: "rgba(250, 247, 252, 0.92)", backdropFilter: "blur(24px)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          {/* Categories */}
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-bold text-[#9f8ba8] uppercase tracking-[0.18em] font-body shrink-0 hidden sm:block">
              Category
            </span>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-4 py-2 rounded-xl text-[10px] font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_3px_16px_rgba(245,158,11,0.35)]"
                      : "bg-[#f0e8f8]/70 text-[#7a6680] hover:bg-[#e8ddf0] hover:text-[#1a0a1e]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Count indicator */}
          {!loading && (
            <span className="text-[#9f8ba8] text-[10px] font-body shrink-0">
              {filteredBlogs.length} of {blogs.length} articles
            </span>
          )}
        </div>
      </section>

      {/* ─── BLOGS LIST ─── */}
      <section
        data-nav-theme="light"
        className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#faf7fc] overflow-hidden"
      >
        <FlowerField count={10} />

        <div className="max-w-5xl mx-auto relative z-10 space-y-8 sm:space-y-10">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} i={i} />)
          ) : filteredBlogs.length > 0 ? (
            <>
              {/* Featured first blog */}
              {featured && (
                <FeaturedCard
                  blog={featured}
                  onExpand={() => handleToggle(featured.id)}
                  isExpanded={expandedId === featured.id}
                />
              )}

              {/* Decorative divider */}
              {rest.length > 0 && (
                <div className="flex items-center gap-6 py-2">
                  <span className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c8b0d8]/50 to-transparent" />
                  <div className="flex items-center gap-2 text-[#9f8ba8]">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-body font-semibold">
                      More Articles
                    </span>
                  </div>
                  <span className="flex-1 h-px bg-gradient-to-l from-transparent via-[#c8b0d8]/50 to-transparent" />
                </div>
              )}

              {/* Rest of blogs */}
              {rest.map((blog, idx) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                  idx={idx}
                  onExpand={() => handleToggle(blog.id)}
                  isExpanded={expandedId === blog.id}
                />
              ))}
            </>
          ) : (
            <div className="py-20 rounded-[1.75rem] border border-[#e8ddf0]/70 bg-white text-center">
              <div className="text-5xl mb-5">✨</div>
              <p className="text-[#9f8ba8] font-body text-sm">
                No articles found matching your search or filter.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-6 px-6 py-2.5 rounded-full border border-amber-400/40 text-amber-700 text-xs font-semibold hover:bg-amber-50 transition cursor-pointer"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom counter */}
        {!loading && filteredBlogs.length > 0 && (
          <div className="mt-16 flex items-center justify-center gap-4">
            <span className="w-16 h-px bg-[#e8ddf0]" />
            <span className="text-[#9f8ba8] text-[10px] font-body tracking-widest uppercase">
              {filteredBlogs.length} of {blogs.length} articles
            </span>
            <span className="w-16 h-px bg-[#e8ddf0]" />
          </div>
        )}
      </section>

      {/* ─── WRITE FOR US ─── */}
      <section
        data-nav-theme="dark"
        className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden border-t border-white/5"
        style={{ background: "linear-gradient(160deg, #4a1060 0%, #2a0050 40%, #1a0a3e 100%)" }}
      >
        {/* Decorative radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-amber-500/8 blur-[80px]" />
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-[60px]" />
        </div>

        <FlowerField count={6} />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <ScrollReveal variant="fade-up">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400/50" />
              <span className="text-amber-400/70 text-[9px] font-bold uppercase tracking-[0.35em] font-body">
                Contribute
              </span>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400/50" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-white leading-tight">
              Share Your
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                Sacred Journey
              </span>
            </h2>
            <p className="text-white/55 mt-5 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed font-body">
              Are you a scholar, practitioner, or pilgrim with a story to tell? We welcome voices
              that carry the light of Dharma and the spirit of Bharat.
            </p>
          </ScrollReveal>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 text-left">
            {[
              {
                i: "📿",
                t: "Spiritual Insights",
                d: "Share teachings, rituals, and wisdom from your tradition and practice.",
                accent: "from-amber-500/15 to-amber-500/5",
                border: "border-amber-500/20",
              },
              {
                i: "🗺️",
                t: "Yatra Diaries",
                d: "Write about your personal pilgrimage experiences across sacred Bharat.",
                accent: "from-orange-500/15 to-orange-500/5",
                border: "border-orange-400/20",
              },
              {
                i: "📖",
                t: "Scriptural Deep Dives",
                d: "Explore the Upanishads, Puranas, and epics for seekers on the path.",
                accent: "from-purple-500/15 to-purple-500/5",
                border: "border-purple-400/20",
              },
            ].map((c, idx) => (
              <ScrollReveal key={c.t} variant="fade-up" delay={idx * 130} className="h-full">
                <Link
                  to="/enquire"
                  className={`group p-7 rounded-3xl bg-gradient-to-br ${c.accent} border ${c.border} backdrop-blur-sm hover:border-amber-400/40 hover:shadow-[0_12px_40px_rgba(245,158,11,0.12)] transition-all duration-400 block h-full`}
                >
                  <div className="text-4xl">{c.i}</div>
                  <h3 className="text-xl text-white mt-4 mb-2 font-display font-semibold group-hover:text-amber-200 transition-colors">
                    {c.t}
                  </h3>
                  <p className="text-white/55 text-xs sm:text-sm leading-relaxed font-body">
                    {c.d}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA button */}
          <ScrollReveal variant="fade-up" delay={400}>
            <div className="mt-12">
              <Link
                to="/enquire"
                className="inline-flex items-center gap-2.5 px-9 py-4 bg-linear-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full text-sm shadow-[0_6px_32px_rgba(245,158,11,0.45)] hover:scale-[1.04] hover:shadow-[0_8px_40px_rgba(245,158,11,0.55)] active:scale-[0.98] transition-all duration-300"
              >
                Write for Samyam
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
