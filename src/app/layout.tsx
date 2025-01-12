import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Abdullah - BUET Faculty Profile",
  description:
    "Explore the professional profile of Muhammad Abdullah, a distinguished faculty member of Bangladesh University of Engineering and Technology (BUET). Learn about his academic contributions, research, and achievements.",
  keywords: [
    "Muhammad Abdullah",
    "BUET Faculty",
    "Bangladesh University of Engineering and Technology",
    "Faculty Profile",
    "Academic Research",
    "Engineering Professor",
  ],
  authors: [{ name: "Muhammad Abdullah" }],
  openGraph: {
    title: "Muhammad Abdullah - Faculty Profile at BUET",
    description:
      "Discover the academic and professional journey of Muhammad Abdullah, a respected faculty member at Bangladesh University of Engineering and Technology.",
    url: "https://yourwebsite.com/muhammad-abdullah",
    type: "profile",
    images: [
      {
        url: "https://yourwebsite.com/path-to-profile-image.jpg",
        alt: "Muhammad Abdullah - BUET Faculty",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
