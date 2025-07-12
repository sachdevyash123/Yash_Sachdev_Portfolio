import "./globals.css";
import Navbar from "@/app/components/Navbar";

export const metadata = {
  title: "Yash Sachdev Portfolio",
  description: "Portfolio website for Yash Sachdev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)] min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
