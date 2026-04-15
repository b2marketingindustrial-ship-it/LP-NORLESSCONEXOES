import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UtmWrapper from "./components/UtmWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Norless · Conexões Pneumáticas Parker",
  description:
    "Soluções em conexões pneumáticas Parker na Norless. Eficiência, confiabilidade e desempenho que conectam sua automação.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <UtmWrapper>{children}</UtmWrapper>
      </body>
    </html>
  );
}
