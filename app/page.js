import { AlertSection, Filters, Navbar, Sidebar } from "@/components";
import { OpenFilterProvider } from "@/contexts/openFilterContext";

export default function Home() {
  return (
    <OpenFilterProvider>
      <main className="flex items-start gap-5 md:gap-10">
        <Sidebar />
        <div className="py-6 flex-1 gap-6 ml-32 overflow-hidden h-screen relative mid-section">
          <Navbar />
          <AlertSection />
        </div>
        <Filters />
      </main>
    </OpenFilterProvider>
  );
}
