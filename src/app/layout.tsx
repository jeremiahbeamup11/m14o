import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M14O | AI Infrastructure Intelligence for Small Cities",
  description:
    "Upload your municipal data. Get consultant-grade infrastructure analysis in 60 seconds. Risks, sustainability opportunities, redevelopment blueprints, and funding recommendations.",
  openGraph: {
    title: "M14O | AI Infrastructure Intelligence for Small Cities",
    description:
      "Upload your municipal data. Get consultant-grade infrastructure analysis in 60 seconds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans grain antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
