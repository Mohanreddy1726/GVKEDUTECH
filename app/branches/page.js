import { Metadata } from "next";
import BranchListClient from "./BranchListClient";

export const metadata = {
  title: "Our Branch Offices | GVK EduTech Consultants",
  description: "Visit GVK EduTech branch offices across India. Find the nearest office for free study abroad counseling in Hyderabad, Warangal, Bangalore, Chennai, and more.",
};

export default function BranchesPage() {
  return <BranchListClient />;
}