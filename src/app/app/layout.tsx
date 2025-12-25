import AppSidebar from "@/components/layout/AppSidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-white text-gray-900">

      <AppSidebar />
      <main className="flex-1 bg-gray-50">{children}</main>
    </div>
  );
}
