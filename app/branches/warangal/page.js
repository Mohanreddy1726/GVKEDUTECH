import BranchPageClient from "../BranchPageClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Study Abroad Consultancy in Warangal",
  description: "GVK EduTech - Best study abroad consultancy in Warangal. Expert guidance for MBBS and Masters abroad. Visit our Warangal office for free counseling.",
};

export default function WarangalPage() {
  return <BranchPageClient city="Warangal" />;
}