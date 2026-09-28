import type { Metadata } from "next";
import { SolutionPage } from "../components/SolutionPage";
import { servicesData } from "./components/servicesData";

export const metadata: Metadata = { title: "Service Business POS | Aussie's POS", description: "Appointments, invoices, customer management, schedules, and payments for service businesses." };
export default function ServicesPage() { return <SolutionPage data={servicesData} />; }
