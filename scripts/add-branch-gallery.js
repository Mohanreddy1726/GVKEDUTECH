// scripts/add-branch-gallery.js
// Adds BranchGallery component + galleryImages data + render block to each branch page.

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "app", "branches");

const COUNT_BY_CITY = {
  hyderabad: 12,
  warangal: 12,
  visakhapatnam: 8,
  vijayawada: 6,
  bangalore: 6,
  chennai: 6,
  suryapet: 6,
  karimnagar: 4,
  nellore: 4,
  tirupati: 4,
  nalgonda: 4,
  khammam: 4,
  mahabubnagar: 4,
  nizamabad: 4,
  kakinada: 4,
  kerala: 4,
};

function buildGalleryData(city, count) {
  const lines = [];
  lines.push(`const galleryImages = [`);
  for (let i = 1; i <= count; i++) {
    lines.push(
      `  { url: "ADD_IMAGE_URL_HERE_${i}", title: "Gallery image ${i}", caption: "" },`
    );
  }
  lines.push(`];`);
  lines.push(``);
  return lines.join("\n");
}

function buildGalleryRender(city) {
  return (
    `\n      {/* ── Branch Gallery ── */}\n` +
    `      <BranchGallery\n` +
    `        items={galleryImages}\n` +
    `        title="${city} Gallery"\n` +
    `        subtitle="Photos from our ${city} office, events, and student success stories"\n` +
    `      />\n`
  );
}

function ensureImport(content) {
  if (content.includes(`import BranchGallery from "@/components/BranchGallery"`)) {
    return content;
  }
  // Insert after the Image import line
  const target = `import Image from "next/image";`;
  if (!content.includes(target)) {
    throw new Error(`Could not find Image import in file`);
  }
  return content.replace(
    target,
    `${target}\nimport BranchGallery from "@/components/BranchGallery";`
  );
}

function ensureGalleryData(content, city, count) {
  if (content.includes(`const galleryImages = [`)) {
    return content;
  }
  // Insert right BEFORE `export default function`
  const marker = `export default function`;
  const idx = content.indexOf(marker);
  if (idx === -1) throw new Error(`Could not find export default function`);
  const before = content.slice(0, idx);
  const after = content.slice(idx);
  return before + buildGalleryData(city, count) + `\n` + after;
}

function ensureGalleryRender(content, city) {
  if (content.includes(`<BranchGallery`)) {
    return content;
  }
  // Insert just before the "Other Branches" comment block
  const anchor = `      {/* ── Other Branches ── */}`;
  if (!content.includes(anchor)) {
    throw new Error(`Could not find "Other Branches" anchor`);
  }
  return content.replace(anchor, buildGalleryRender(city).trimEnd() + `\n\n      ` + anchor);
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

console.log("Adding BranchGallery to all branch pages:\n");
for (const city of Object.keys(COUNT_BY_CITY)) {
  processCity(city);
}
console.log("\nDone.");
