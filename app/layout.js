import { Gelasio, Urbanist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const gelasio = Gelasio({
  variable: "--font-gelasio",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Hercules Watch",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${urbanist.variable} ${gelasio.variable}`}>
      <body
        className="font-urbanist antialiased"
        suppressHydrationWarning={true}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
