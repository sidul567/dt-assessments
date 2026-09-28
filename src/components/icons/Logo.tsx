import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 172 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g>
        <path
          d="M10.5 10.75C10.5 4.95101 5.79899 0.25 0 0.25V21.25C0 27.049 4.70101 31.75 10.5 31.75V10.75Z"
          fill="currentColor"
        />
        <path
          d="M18.375 10.75C24.174 10.75 28.875 15.451 28.875 21.25H21C15.201 21.25 10.5 16.549 10.5 10.75L18.375 10.75Z"
          fill="currentColor"
        />
        <path
          d="M18.375 31.75C24.174 31.75 28.875 27.049 28.875 21.25H21C15.201 21.25 10.5 25.951 10.5 31.75L18.375 31.75Z"
          fill="currentColor"
        />
      </g>
      <text
        x="37"
        y="16"
        dominantBaseline="central"
        fontFamily="var(--font-heading), sans-serif"
        fontWeight={600}
        fontSize="24"
        fill="currentColor"
      >
        ByteSpace
      </text>
    </svg>
  );
}
