import Image from "next/image";

const AVATARS = [
  "/images/avatar-1.png",
  "/images/avatar-2.png",
  "/images/avatar-3.png",
  "/images/avatar-4.png",
  "/images/avatar-5.png",
  "/images/avatar-6.png",
  "/images/avatar-7.png",
];

export function AvatarStack() {
  return (
    <div className="flex items-center">
      {AVATARS.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={43}
          height={43}
          className="-mr-4 rounded-full ring-2 ring-white"
          style={{ zIndex: AVATARS.length - index }}
        />
      ))}
      <div className="-mr-4 flex size-[43px] items-center justify-center rounded-full bg-neutral-950 text-xs font-bold text-neutral-50 ring-2 ring-white">
        2K+
      </div>
    </div>
  );
}
