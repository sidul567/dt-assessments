import { Navbar } from "@/components/common/Navbar";

export default function PublicLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="relative flex flex-1 flex-col">
      <Navbar className="absolute inset-x-0 top-0 z-20" />
      <main className="flex-1">{children}</main>
    </div>
  );
}
