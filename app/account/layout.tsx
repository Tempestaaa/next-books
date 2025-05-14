import Sidebar from "@/components/layout/sidebar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 max-h-[calc(100dvh-4rem)] h-[calc(100dvh-4rem)] py-4 overflow-hidden">
      <Sidebar />
      <div className="w-[1px] bg-muted" />
      <div className="flex-1 flex flex-col gap-4 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
