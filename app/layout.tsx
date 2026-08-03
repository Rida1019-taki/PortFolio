import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { GoogleAnalytics } from "@next/third-parties/google";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
    display: "swap",
});

const cormorant = Cormorant_Garamond({
    variable: "--font-cormorant",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

// استبدال Outfit بـ JetBrains_Mono باش يعطيك خط Mono حقيقي
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
            className={`${outfit.variable} ${cormorant.variable} ${mono.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col">
        {children}
        <Toaster position="top-right" richColors closeButton duration={4000} />
        </body>

        {/* Google Analytics داخل الـ html */}
        <GoogleAnalytics gaId="G-8DQ110SCP5" />
        </html>
    );
}