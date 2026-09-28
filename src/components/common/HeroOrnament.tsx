import Image from "next/image";

interface HeroOrnamentProps {
  image: string;
  className: string;
}

export function HeroOrnament({ image, className }: HeroOrnamentProps) {
  return (
    <div className={className}>
      <Image
        alt=""
        src={image}
        fill
        sizes="400px"
        className="pointer-events-none object-contain"
      />
    </div>
  );
}
