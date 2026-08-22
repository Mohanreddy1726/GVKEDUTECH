// scripts/add-branch-gallery-stubs.js
// For stub branch pages that don't have the {/* ── Other Branches ── */} comment,
// insert the <BranchGallery /> block immediately before the <h2>Other Branch Offices</h2> heading.

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "app", "branches");

const COUNT_BY_CITY = {
  khammam: 4,
  mahabubnagar: 4,
  nizamabad: 4,
  kakinada: 4,
  kerala: 4,
};

function buildGalleryData(city, count) {
  const lines = [`const galleryImages = [`];
  for (let i = 1; i <= count; i++) {
    lines.push(
      `  { url: "ADD_IMAGE_URL_HERE_${i}", title: "Gallery image ${i}", caption: "" },`
    );
  }
  lines.push(`];`, ``);
  return lines.join("\n");
}

function buildGalleryRender(city) {
  return (
    `\n      {/* ── Branch Gallery ── */}\n` +
    `      <BranchGallery\n` +
    `        items={galleryImages}\n` +
    `        title="${city} Gallery"\n` +
    `        subtitle="Photos from our ${city} office, events, and student success stories"\n` +
    `      />\n\n      ` +
    `<section className="py-16" style={{ background: T.surface }}>\n` +
    `        <div className="container mx-auto px-4">\n` +
    `          <div className="text-center mb-10">\n` +
    `            <h2 className="text-2xl font-bold" style={{ color: T.navyMid }}>Other Branch Offices</h2>\n` +
    `          </div>\n`
  );
}

function ensureImport(content) {
  if (content.includes(`import BranchGallery from "@/components/BranchGallery"`)) {
    return content;
  }
  const target = `import Image from "next/image";`;
  if (!content.includes(target)) throw new Error(`Could not find Image import`);
  return content.replace(
    target,
    `${target}\nimport BranchGallery from "@/components/BranchGallery";`
  );
}

function ensureGalleryData(content, city, count) {
  if (content.includes(`const galleryImages = [`)) return content;
  const marker = `export default function`;
  const idx = content.indexOf(marker);
  if (idx === -1) throw new Error(`Could not find export default function`);
  return content.slice(0, idx) + buildGalleryData(city, count) + "\n" + content.slice(idx);
}

function ensureGalleryRender(content, city) {
  if (content.includes(`<BranchGallery`)) return content;
  // Anchor: <h2 ...>Other Branch Offices</h2>
  // We must split: remove the surrounding <section ...> opening tags too, since the gallery block also needs to be wrapped.
  // Simpler approach: replace the heading + the surrounding <section ...> wrapper.
  // Pattern: match `<section className="py-16" style={{ background: T.surface }}>\n        <div className="container mx-auto px-4">\n          <div className="text-center mb-10">\n            <h2 className="text-2xl font-bold" style={{ color: T.navyMid }}>Other Branch Offices</h2>`
  // and replace with our gallery + the same wrapper + same heading.
  const openingSectionRe =
    /<section className="py-16" style=\{\{ background: T\.surface \}\}>\s*\n\s*<div className="container mx-auto px-4">\s*\n\s*<div className="text-center mb-10">\s*\n\s*<h2 className="text-2xl font-bold" style=\{\{ color: T\.navyMid \}\}>/;
  if (!openingSectionRe.test(content)) {
    throw new Error(`Could not find Other Branches section opening`);
  }
  // Replace by inserting the gallery block just BEFORE the matched <section>
  return content.replace(openingSectionRe, (match) => {
    return (
      `{/* ── Branch Gallery ── */}\n` +
      `      <BranchGallery\n` +
      `        items={galleryImages}\n` +
      `        title="${city} Gallery"\n` +
      `        subtitle="Photos from our ${city} office, events, and student success stories"\n` +
      `      />\n\n      ` +
      match
    );
  });
}

function processCity(city) {
  const filePath = path.join(ROOT, city, "page.js");
  if (!fs.existsSync(filePath)) {
    console.log(`  SKIP (no file): ${city}`);
    return;
  }
  const count = COUNT_BY_CITY[city];
  if (!count) {
    console.log(`  SKIP (no count): ${city}`);
    return;
  }
  let content = fs.readFileSync(filePath, "utf8");
  content = ensureImport(content);
  content = ensureGalleryData(content, city, count);
  content = ensureGalleryRender(content, city);
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`  OK: ${city} (${count} slots)`);
}

console.log("Adding BranchGallery to stub branch pages:\n");
for (const city of Object.keys(COUNT_BY_CITY)) {
  processCity(city);
}
console.log("\nDone.");
