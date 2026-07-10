import "./globals.css";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Figtree, Vazirmatn } from "next/font/google";
import { MSWProvider } from "@/providers/msw-provider";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

const vazirmatn = Vazirmatn({
  display: "swap",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazirmatn",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      dir="rtl"
      className={`dark ${figtree.variable} ${vazirmatn.variable}`}
    >
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
        <MSWProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </MSWProvider>
      </body>
    </html>
  );
}
