import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, Search } from "lucide-react";

async function getPosts() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/blog`, { cache: "no-store" });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

const categories = [
  { name: "All", icon: "📚" },
  { name: "MBBS Abroad", icon: "🏥" },
  { name: "Masters", icon: "🎓" },
  { name: "Scholarships", icon: "💰" },
  { name: "Visa Guide", icon: "📋" },
  { name: "Student Life", icon: "🌍" },
];

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <PageLayout>
      <PageHeader
        title="GVK EduTech Blog"
        subtitle="Insights, Tips & Guides for Your Study Abroad Journey"
        breadcrumb="Blog"
      />

      {/* Hero Section */}
      <section className="py-16 section-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Latest <span className="text-accent">Insights</span> & Tips
              </h2>
              <p className="text-lg text-muted-foreground">
                Expert advice, student stories, and comprehensive guides to help you make informed decisions about your education abroad.
              </p>
            </div>
          </ScrollReveal>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full h-14 pl-12 pr-4 rounded-full border border-border bg-card focus:border-accent focus:outline-none text-foreground"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-card border border-border hover:border-accent hover:bg-accent/5 transition-all text-sm font-medium"
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {posts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="scale">
              <Link href={`/blog/${posts[0].slug}`} className="group block">
                <div className="relative h-[400px] rounded-3xl overflow-hidden">
                  <Image
                    src={posts[0].image || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200"}
                    alt={posts[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <Badge variant="secondary" className="mb-4">{posts[0].category || "Featured"}</Badge>
                    <h3 className="text-3xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {posts[0].title}
                    </h3>
                    <p className="text-white/80 mb-4 line-clamp-2">{posts[0].excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(posts[0].createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        5 min read
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Recent Articles</h2>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground mb-4">No blog posts yet</p>
              <p className="text-muted-foreground">Check back soon for informative articles about studying abroad!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(1).map((post, index) => (
                <ScrollReveal key={post._id} animation="fade-up" delay={index * 100}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <Card className="overflow-hidden border-border hover:border-accent hover:shadow-xl transition-all duration-300 h-full">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                            {post.category || "Article"}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            5 min read
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-accent to-accent/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on studying abroad, scholarships, and student tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded-lg text-foreground"
            />
            <Button size="lg" variant="secondary" className="font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogPage;
