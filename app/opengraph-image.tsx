import { ImageResponse } from "next/og";

export const alt = "Rida Taki | Full Stack & Mobile Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#08080C",
          backgroundImage:
            "radial-gradient(circle at 50% 25%, rgba(217, 164, 65, 0.22) 0%, transparent 65%)",
          color: "white",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Top Status Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 20px",
            borderRadius: "9999px",
            backgroundColor: "rgba(217, 164, 65, 0.12)",
            border: "1px solid rgba(217, 164, 65, 0.4)",
            color: "#D9A441",
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: "0.08em",
            marginBottom: 20,
          }}
        >
          PORTFOLIO OFFICIEL 2026
        </div>

        {/* Main Name */}
        <div
          style={{
            fontSize: 82,
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: "#FFFFFF",
            marginBottom: 12,
          }}
        >
          Rida Taki
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 800,
            color: "#D9A441",
            marginBottom: 24,
          }}
        >
          Full Stack Java / Spring Boot & Mobile Developer
        </div>

        {/* Subtitle / Tech Stack */}
        <div
          style={{
            fontSize: 20,
            color: "#9CA3AF",
            maxWidth: 860,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Java 21 LTS • Spring Security • React • Next.js • Kotlin • MySQL • Docker
        </div>

        {/* Bottom Metadata Bar */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 24,
            color: "#6B7280",
            fontSize: 16,
          }}
        >
          <span>📍 Oued Zem, Maroc</span>
          <span>•</span>
          <span>takirida72@gmail.com</span>
          <span>•</span>
          <span>github.com/Rida1019-taki</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
