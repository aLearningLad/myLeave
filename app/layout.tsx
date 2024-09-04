import type { Metadata } from "next";
import { Inter, Taviraj, Baskervville } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const tav = Taviraj({ subsets: ["latin"], weight: ["500", "700", "900"] });
const basker = Baskervville({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "myLeave",
  description: "Tiny, easy-to-use leave management and minimalist HR platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={basker.className}>{children}</body>
    </html>
  );
}
