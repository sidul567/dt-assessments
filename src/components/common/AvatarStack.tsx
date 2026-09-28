import Image from "next/image";

const HERO_AVATARS = [
  "/images/avatar-1.png",
  "/images/avatar-2.png",
  "/images/avatar-3.png",
  "/images/avatar-4.png",
  "/images/avatar-5.png",
  "/images/avatar-6.png",
  "/images/avatar-7.png",
];

interface AvatarStackProps {
  avatars?: string[];
  size?: number;
  overlap?: number;
  badgeLabel?: string;
  badgeClassName?: string;
}

export function AvatarStack({
  avatars = HERO_AVATARS,
  size = 43,
  overlap = 16,
  badgeLabel = "2K+",
  badgeClassName = "bg-neutral-950 text-neutral-50",
}: AvatarStackProps) {
  return (
    <div className="flex items-center">
      {avatars.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={size}
          height={size}
          className="rounded-full ring-2 ring-white"
          style={{
            zIndex: avatars.length - index,
            width: size,
            height: size,
            marginRight: -overlap,
          }}
        />
      ))}
      <div
        className={`flex items-center justify-center rounded-full text-xs font-bold ring-2 ring-white ${badgeClassName}`}
        style={{ width: size, height: size, marginRight: -overlap }}
      >
        {badgeLabel}
      </div>
    </div>
  );
}
