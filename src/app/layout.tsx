import type { Metadata } from "next";
import "./globals.css";
import "./home/home.css";
import "./detail.css";

export const metadata: Metadata = {
  title: "Aussie's POS Solution | Smarter business tools",
  description: "Connected point-of-sale, payments, hardware, and business tools for restaurants, retail, healthcare, and service teams.",
  icons: {
    icon: "/images/brand/aussies-favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body suppressHydrationWarning className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
