import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Share2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

async function getPost(slug) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/blog/${slug}/`, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

function formatContent(content) {
  if (!content) return "";

  // Convert plain text newlines (double newlines = paragraph, single = br)
  let formatted = content
    .replace(/\n\n+/g, '</p><p>')
    .replace(/\n/g, '<br>');

  // Wrap in paragraph tags if not already HTML
  if (!formatted.includes('<p>')) {
    formatted = '<p>' + formatted + '</p>';
  }

  return formatted;
}

async function getRecentPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/blog`, { cache: "no-store" });
    if (!res.ok) return [];
    const posts = await res.json();
    return posts.slice(0, 3);
  } catch {
    return [];
  }
}

const BlogPostPage = async ({ params }) => {
  const resolvedParams = await params;
  const [post, recentPosts] = await Promise.all([
    getPost(resolvedParams.slug),
    getRecentPosts(),
  ]);

  if (!post) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button variant="accent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Hero Image */}
      <div className="relative h-[400px] lg:h-[500px]">
        <Image
          src={post.image || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200"}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <Badge variant="secondary" className="mb-4 bg-white/90 backdrop-blur-sm">
            {post.category || "Article"}
          </Badge>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-white/80 text-sm">
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-sm font-bold">{post.author?.charAt(0) || "G"}</span>
              </div>
              {post.author || "GVK Edutech"}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              5 min read
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <div
                className="text-foreground leading-relaxed blog-content"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />
            </article>

            <style>{`
                .blog-content p {
                  margin-bottom: 1rem;
                }
                .blog-content h2 {
                  font-size: 1.75rem;
                  font-weight: bold;
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                }
                .blog-content h3 {
                  font-size: 1.25rem;
                  font-weight: bold;
                  margin-top: 1.5rem;
                  margin-bottom: 0.75rem;
                }
                .blog-content ul, .blog-content ol {
                  margin-left: 1.5rem;
                  margin-bottom: 1rem;
                }
                .blog-content li {
                  margin-bottom: 0.5rem;
                }
              `}</style>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border">
                <span className="text-sm text-muted-foreground mr-2">Tags:</span>
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Share */}
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border">
              <span className="text-sm text-muted-foreground">Share:</span>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Copy Link
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href={`https://api.whatsapp.com/send/?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://gvkedutech.com/blog/${post.slug}`)}`}
                  target="_blank"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Author Card */}
            <Card className="border-border mb-8">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-4">About the Author</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">{post.author?.charAt(0) || "G"}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{post.author || "GVK Edutech"}</p>
                    <p className="text-sm text-muted-foreground">Education Consultant</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Expert guidance for students seeking quality education abroad. GVK Edutech has helped 5000+ students achieve their dream of studying overseas.
                </p>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-4">Recent Articles</h3>
                <div className="space-y-4">
                  {recentPosts.map((recentPost) => (
                    <Link
                      key={recentPost._id}
                      href={`/blog/${recentPost.slug}`}
                      className="group block"
                    >
                      <div className="flex gap-3">
                        <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image
                            src={recentPost.image || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100"}
                            alt={recentPost.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-accent transition-colors">
                            {recentPost.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            {new Date(recentPost.createdAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPostPage;
