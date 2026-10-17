import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { GoogleAnalytics } from "@next/third-parties/google";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
    display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
    variable: "--font-heading",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    display: "swap",
});

const mono = JetBrains_Mono({
    variable: "--font-ui-mono",
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Rida Taki | Full Stack Portfolio",
    description: "Portfolio of Rida Taki, full stack and mobile developer.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${outfit.variable} ${plusJakarta.variable} ${mono.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col">
        {children}
        <Toaster position="top-right" richColors closeButton duration={4000} />
        <GoogleAnalytics gaId="G-DS2HD5NH07" />
        </body>
        </html>
    );
}