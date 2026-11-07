import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rida Taki | Full Stack & Mobile Developer",
    short_name: "Rida Taki",
    description:
      "Portfolio of Rida Taki — Full Stack Developer specializing in Java, Spring Boot, React, and modern scalable web architectures.",
    start_url: "/",
    display: "standalone",
    background_color: "#08080C",
    theme_color: "#D9A441",
    icons: [
      {
        src: "/icon-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/icon-96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
