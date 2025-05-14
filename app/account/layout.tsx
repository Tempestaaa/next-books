import Sidebar from "@/components/layout/sidebar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 min-h-[calc(100dvh-4rem)] py-4">
      <Sidebar />
      <div className="w-[1px] bg-muted" />
      <div className="flex-1 px-2 flex flex-col gap-4 overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}
