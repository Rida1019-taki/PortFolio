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
    metadataBase: new URL("https://www.ridataki.dev"),
    title: {
        default: "Rida Taki | Full Stack & Mobile Developer",
        template: "%s | Rida Taki",
    },
    description: "Portfolio of Rida Taki — Full Stack Developer specializing in Java, Spring Boot, React, and modern scalable web architectures.",
    keywords: [
        "Rida Taki",
        "Full Stack Developer",
        "Software Engineer",
        "Java",
        "Spring Boot",
        "React",
        "Next.js",
        "Kotlin",
        "Web Developer",
        "Morocco",
    ],
    authors: [{ name: "Rida Taki", url: "https://www.ridataki.dev" }],
    creator: "Rida Taki",
    openGraph: {
        title: "Rida Taki | Full Stack & Mobile Developer",
        description: "Portfolio of Rida Taki — Full Stack Developer specializing in Java, Spring Boot, React, and modern scalable web architectures.",
        url: "https://www.ridataki.dev",
        siteName: "Rida Taki Portfolio",
        images: [
            {
                url: "/photo.jpg",
                width: 1200,
                height: 630,
                alt: "Rida Taki — Full Stack Developer",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Rida Taki | Full Stack & Mobile Developer",
        description: "Portfolio of Rida Taki — Full Stack Developer specializing in Java, Spring Boot, React, and modern scalable web architectures.",
        images: ["/photo.jpg"],
        creator: "@rida_taki",
    },
    icons: {
        icon: "/favicon.ico",
    },
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