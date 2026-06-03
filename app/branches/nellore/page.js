import BranchPageClient from "../BranchPageClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Study Abroad Consultancy in Nellore | GVK EduTech",
  description: "GVK EduTech - Best study abroad consultancy in Nellore. Expert guidance for MBBS and Masters abroad. Visit our Nellore office for free counseling.",
};

export default function NellorePage() {
  return <BranchPageClient city="Nellore" />;
}