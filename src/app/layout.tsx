import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// next/font exposes the family as the CSS variable --font-inter,
// which globals.css references via --font-sans.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jis Sunny | Full Stack Engineer",
  description:
    "Jis Sunny — Full Stack Engineer building scalable, AI-aware systems. Calicut, IN.",
};

// Runs before paint to set the saved theme and avoid a flash of the wrong mode.
const themeInit = `
(function () {
  try {
    var t = localStorage.getItem("portfolio-theme") || "dark";
    document.documentElement.setAttribute("data-theme", t);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
