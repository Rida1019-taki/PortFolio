"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Zap,
  Award,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";

export interface HackathonItem {
  title: string;
  description: string;
  image: string;
  images?: string[];
  certificate?: string | null;
  tag?: string;
  date?: string;
  tags: string[];
}

interface HackathonCardProps {
  hackathon: HackathonItem;
  projectTag: string;
  certificateLabel?: string;
}

export default function HackathonCard({
  hackathon,
  projectTag,
  certificateLabel = "View Certificate",
}: HackathonCardProps) {
  const images =
    hackathon.images && hackathon.images.length > 0
      ? hackathon.images
      : [hackathon.image];

  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D9A441]/50 hover:shadow-[0_20px_50px_-15px_rgba(217,164,65,0.2)]">
        {/* Top Container: Image Gallery & Content */}
        <div className="w-full">
          {/* Main Image Slider View */}
          <div className="relative h-64 w-full overflow-hidden bg-neutral-950 group/img">
            <Image
              src={images[activeIdx]}
              alt={`${hackathon.title} - photo ${activeIdx + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover/img:scale-105 cursor-pointer"
              onClick={() => setLightboxOpen(true)}
            />

            {/* Gradient Mask for Smooth Blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

            {/* Top Badges (Category & Date) */}
            <div className="absolute top-3 inset-x-3 z-10 flex items-center justify-between pointer-events-none">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/75 px-3 py-1 text-[10px] font-mono font-medium text-white backdrop-blur-md">
                <Zap size={12} className="text-[#D9A441]" />
                <span>{hackathon.tag || projectTag}</span>
              </span>

              {hackathon.date && (
                <span className="rounded-full border border-white/15 bg-black/75 px-2.5 py-0.5 text-[10px] font-mono text-[#D9A441] backdrop-blur-md">
                  {hackathon.date}
                </span>
              )}
            </div>

            {/* Expand / Maximize Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(true);
              }}
              title="Click to view full photo"
              aria-label="View photo in fullscreen"
              className="absolute bottom-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-xl bg-black/75 border border-white/20 text-white hover:text-[#D9A441] hover:border-[#D9A441]/50 backdrop-blur-md transition-all opacity-0 group-hover/img:opacity-100"
            >
              <Maximize2 size={13} />
            </button>

            {/* Multi-image Controls (Arrows & Counter) */}
            {images.length > 1 && (
              <>
                {/* Arrow Left */}
                <button
                  type="button"
                  onClick={prevImage}
                  aria-label="Previous photo"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/75 border border-white/20 text-white hover:bg-[#D9A441] hover:text-black transition-all shadow-md backdrop-blur-md"
                >
                  <ChevronLeft size={16} />
                </button>

                {/* Arrow Right */}
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next photo"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/75 border border-white/20 text-white hover:bg-[#D9A441] hover:text-black transition-all shadow-md backdrop-blur-md"
                >
                  <ChevronRight size={16} />
                </button>

                {/* Counter Pill */}
                <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/75 px-2.5 py-0.5 text-[10px] font-mono text-gray-300 backdrop-blur-md pointer-events-none">
                  <span>
                    {activeIdx + 1} / {images.length}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Clickable Thumbnails Row (if multiple images) */}
          {images.length > 1 && (
            <div className="flex items-center gap-2 px-6 pt-3 overflow-x-auto no-scrollbar">
              {images.map((img, idx) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`relative h-12 w-14 shrink-0 rounded-lg overflow-hidden border transition-all duration-300 ${
                    activeIdx === idx
                      ? "border-[#D9A441] shadow-[0_0_10px_rgba(217,164,65,0.4)] scale-105"
                      : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                  }`}
                  aria-label={`Show photo ${idx + 1}`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    sizes="60px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Content Details */}
          <div className="p-6 sm:p-8 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#D9A441] leading-snug">
              {hackathon.title}
            </h3>

            <p className="text-sm text-[color:var(--muted)] leading-relaxed font-medium">
              {hackathon.description}
            </p>
          </div>
        </div>

        {/* Bottom Container: Certificate & Tags */}
        <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
          {hackathon.certificate && (
            <div className="pb-3">
              <a
                href={hackathon.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="group/cert inline-flex items-center gap-2 rounded-xl border border-[#D9A441]/40 bg-[#D9A441]/10 px-3.5 py-2 text-xs font-mono font-semibold text-[#D9A441] hover:bg-[#D9A441] hover:text-black transition-all duration-300 w-full justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <Award size={14} />
                  <span>{certificateLabel}</span>
                </span>
                <ExternalLink
                  size={12}
                  className="transition-transform group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5"
                />
              </a>
            </div>
          )}

          <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
            {hackathon.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-gray-300 transition-colors group-hover:border-[#D9A441]/30"
              >
                <span className="text-[#D9A441]">#</span>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Lightbox / Fullscreen Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-[#D9A441] transition-all"
              aria-label="Close fullscreen view"
            >
              <X size={20} />
            </button>

            {/* Fullscreen Image Container */}
            <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden border border-white/15 bg-neutral-950 shadow-2xl">
              <Image
                src={images[activeIdx]}
                alt={`${hackathon.title} - photo ${activeIdx + 1}`}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain"
                priority
              />

              {/* Prev / Next inside Lightbox */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 border border-white/20 text-white hover:bg-[#D9A441] hover:text-black transition-all shadow-xl backdrop-blur-md"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 border border-white/20 text-white hover:bg-[#D9A441] hover:text-black transition-all shadow-xl backdrop-blur-md"
                    aria-label="Next photo"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Caption & Thumbnails inside Lightbox */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-[#D9A441] font-bold">
                  {hackathon.title}
                </span>
                <span className="text-gray-500">•</span>
                <span>
                  Photo {activeIdx + 1} of {images.length}
                </span>
              </div>

              {/* Thumbnails row */}
              {images.length > 1 && (
                <div className="flex items-center gap-2">
                  {images.map((img, idx) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      className={`relative h-10 w-12 rounded-lg overflow-hidden border transition-all ${
                        activeIdx === idx
                          ? "border-[#D9A441] scale-110"
                          : "border-white/20 opacity-50 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumb ${idx + 1}`}
                        fill
                        sizes="50px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
