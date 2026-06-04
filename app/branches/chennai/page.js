import BranchPageClient from "../BranchPageClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Study Abroad Consultancy in Chennai",
  description: "GVK EduTech - Best study abroad consultancy in Chennai. Expert guidance for MBBS and Masters abroad. Visit our Chennai office for free counseling.",
};

export default function ChennaiPage() {
  return <BranchPageClient city="Chennai" />;
}