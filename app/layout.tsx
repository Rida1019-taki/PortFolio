import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import { LanguageProvider } from "@/components/LanguageProvider";

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
        "Kotlin",
        "Flutter",
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
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
            { url: "/icon-96.png", type: "image/png", sizes: "96x96" },
            { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
            { url: "/icon.png", type: "image/png", sizes: "512x512" },
        ],
        shortcut: "/favicon.ico",
        apple: [
            { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full antialiased">
        <head>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" href="/icon.png" type="image/png" />
            <link rel="apple-touch-icon" href="/apple-icon.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
                rel="stylesheet"
            />
        </head>
        <body className="min-h-full flex flex-col">
        <LanguageProvider>
            {children}
            <Toaster position="top-right" richColors closeButton duration={4000} />
            <GoogleAnalytics gaId="G-DS2HD5NH07" />
        </LanguageProvider>
        </body>
        </html>
    );
}
