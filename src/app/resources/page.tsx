import type { Metadata } from "next";
import { SolutionPage } from "../components/SolutionPage";
import { resourcesData } from "./components/resourcesData";

export const metadata: Metadata = { title: "POS Guides and Resources | Aussie's POS", description: "Guides, product education, integration planning, onboarding help, and practical POS resources." };
export default function ResourcesPage() { return <SolutionPage data={resourcesData} />; }
