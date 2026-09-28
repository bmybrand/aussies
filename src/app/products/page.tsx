import type { Metadata } from "next";
import { SolutionPage } from "../components/SolutionPage";
import { productsData } from "./components/productsData";

export const metadata: Metadata = { title: "POS Products and Hardware | Aussie's POS", description: "Explore countertop, handheld, mobile, kitchen display, and self-service POS products." };
export default function ProductsPage() { return <SolutionPage data={productsData} />; }
