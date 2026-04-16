import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/stores/sidebarStore';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export function DashboardLayout() {
  const { isCollapsed } = useSidebarStore();

  return (
    <div className="h-screen flex bg-background fixed w-full">
      <Sidebar />
      <div
        className={cn(
          'flex-1 flex flex-col min-h-screen transition-all duration-300',
          isCollapsed ? 'lg:ml-0' : 'lg:ml-0'
        )}
      >
        <Navbar />
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
