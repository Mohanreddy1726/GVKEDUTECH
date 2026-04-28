import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Display */}
          <div className="mb-8">
            <span className="text-[150px] md:text-[200px] font-bold text-accent/10 leading-none select-none">
              404
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-[-40px]">
              Page Not Found
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you may have typed the wrong URL.
          </p>

          {/* Suggested Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button variant="accent" size="lg">
                <Home className="w-5 h-5 mr-2" />
                Go to Homepage
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="text-accent hover:underline text-sm">About Us</Link>
              <Link href="/mbbs" className="text-accent hover:underline text-sm">MBBS Abroad</Link>
              <Link href="/masters" className="text-accent hover:underline text-sm">Masters Programs</Link>
              <Link href="/blog" className="text-accent hover:underline text-sm">Blog</Link>
              <Link href="/services" className="text-accent hover:underline text-sm">Services</Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
