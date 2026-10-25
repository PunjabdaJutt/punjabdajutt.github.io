import type { MediaBlock } from "@/lib/projects";
import { YouTubeFacade } from "./YouTubeFacade";

export function Media({ media }: { media: MediaBlock }) {
  switch (media.kind) {
    case "video-loop":
      return (
        <video
          className="aspect-video w-full rounded-2xl bg-surface object-cover"
          src={media.src}
          poster={media.poster}
          autoPlay
          loop
          muted
          playsInline
          aria-label={media.alt}
        />
      );
    case "youtube":
      return <YouTubeFacade id={media.id} title={media.title} />;
    case "image":
      return (
        <figure>
          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-surface">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={media.src}
              alt={media.alt}
              className={`h-full w-full ${
                media.fit === "contain" ? "object-contain p-3" : "object-cover"
              }`}
            />
          </div>
          {media.credit && (
            <figcaption className="mt-2 font-mono text-xs text-muted">
              {media.credit}
            </figcaption>
          )}
        </figure>
      );
    case "pending":
      return (
        <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-border bg-surface px-6 text-center">
          <p className="font-mono text-xs text-muted">{media.note}</p>
        </div>
      );
  }
}
