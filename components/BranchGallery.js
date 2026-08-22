import Image from "next/image";

const T = {
  navy: "#0F1B2D",
  navyMid: "#1A2B42",
  red: "#C8243A",
  redDark: "#A01828",
  surface: "#F8F9FB",
  surfaceAlt: "#E8EDF5",
  muted: "#5A7190",
  white: "#FFFFFF",
};

const PLACEHOLDER_PREFIX = "ADD_IMAGE_URL_HERE";

/**
 * BranchGallery — full-width hero-style image banners for a branch page.
 *
 * Each slot renders only if `url` is a real URL (not a placeholder string).
 * To add your image, replace the placeholder with a full ImageKit URL, e.g.:
 *   { url: "https://ik.imagekit.io/abhobz66j/GVK%20Images/your-image.jpg",
 *     title: "Branch inauguration",
 *     caption: "Our Hyderabad team at the launch event" }
 *
 * `alt` defaults to `title`. `height` controls the banner height (default 420px).
 */
export default function BranchGallery({ items = [], title = "Branch Gallery", subtitle = "" }) {
  const visible = items.filter(
    (it) => it && typeof it.url === "string" && !it.url.includes(PLACEHOLDER_PREFIX) && it.url.trim() !== ""
  );

  if (visible.length === 0) return null;

  return (
    <section className="py-20" style={{ background: T.surface }}>
      <div className="container mx-auto px-4">
        {title ? (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: T.navyMid }}>{title}</h2>
            {subtitle ? (
              <p className="max-w-2xl mx-auto" style={{ color: T.muted }}>{subtitle}</p>
            ) : null}
          </div>
        ) : null}

        <div className="space-y-10 max-w-5xl mx-auto">
          {visible.map((item, idx) => (
            <div
              key={idx}
              className="relative w-full rounded-2xl overflow-hidden shadow-lg"
              style={{ height: item.height || 420 }}
            >
              <Image
                src={item.url}
                alt={item.alt || item.title || `Gallery image ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(15,27,45,0.75) 0%, rgba(15,27,45,0.15) 45%, transparent 70%)" }}
              />
              {(item.title || item.caption) && (
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  {item.title ? (
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5 leading-tight">
                      {item.title}
                    </h3>
                  ) : null}
                  {item.caption ? (
                    <p className="text-sm md:text-base text-white/85 max-w-2xl">
                      {item.caption}
                    </p>
                  ) : null}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { PLACEHOLDER_PREFIX };
