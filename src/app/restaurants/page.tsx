import type { Metadata } from "next";
import { SolutionPage } from "../components/SolutionPage";
import { restaurantsData } from "./components/restaurantsData";

export const metadata: Metadata = { title: "Restaurant POS Solutions | Aussie's POS", description: "Connected restaurant POS tools for tableside service, kitchens, online orders, payments, and reporting." };
export default function RestaurantsPage() { return <SolutionPage data={restaurantsData} />; }
