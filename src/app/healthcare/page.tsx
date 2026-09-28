import type { Metadata } from "next";
import { SolutionPage } from "../components/SolutionPage";
import { healthcareData } from "./components/healthcareData";

export const metadata: Metadata = { title: "Healthcare Payment Solutions | Aussie's POS", description: "Clear payment, invoicing, remote transaction, and reporting tools for care-focused businesses." };
export default function HealthcarePage() { return <SolutionPage data={healthcareData} />; }
