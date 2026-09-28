import type { Metadata } from "next";
import { SolutionPage } from "../components/SolutionPage";
import { retailData } from "./components/retailData";

export const metadata: Metadata = { title: "Retail POS Solutions | Aussie's POS", description: "Connected checkout, inventory, loyalty, returns, online sales, and reporting for retailers." };
export default function RetailPage() { return <SolutionPage data={retailData} />; }
