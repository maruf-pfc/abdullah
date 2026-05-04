"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { 
  LayoutDashboard, 
  FolderGit2, 
  BookOpen, 
  GraduationCap, 
  Briefcase,
  User,
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react";
import clsx from "clsx";

const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Profile", href: "/admin/profile", icon: User },
  { name: "Projects", href: "/admin/projects", icon: FolderGit2 },
  { name: "Publications", href: "/admin/publications", icon: BookOpen },
  { name: "Thesis", href: "/admin/thesis", icon: GraduationCap },
  { name: "Attachments", href: "/admin/attachments", icon: Briefcase },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = async () => {
    const res = await fetch("/api/auth/logout", { method: "POST" });
    if (res.ok) {
      router.push("/admin/login");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-white shadow-sm p-4 flex justify-between items-center z-20">
        <h1 className="text-xl font-bold text-[#8B0000]">Admin Panel</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-600 focus:outline-none">
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10 md:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={clsx(
        "fixed md:sticky top-0 left-0 h-screen w-64 bg-white shadow-md flex-shrink-0 flex flex-col z-20 transform transition-transform duration-300 ease-in-out",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="p-6 hidden md:block">
          <h1 className="text-2xl font-bold text-[#8B0000]">Admin Panel</h1>
          <p className="text-sm text-gray-500 mt-1">Portfolio Manager</p>
        </div>
        
        <nav className="flex-1 px-4 py-4 md:py-0 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={clsx(
                  "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                  isActive
                    ? "bg-[#f0ffd7] text-[#8B0000] font-medium"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#8B0000]"
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t space-y-2">
          <button 
            onClick={handleLogout}
            className="flex w-full items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
          <Link href="/" className="flex items-center justify-center text-sm text-blue-600 hover:underline py-2">
            &larr; Back to live site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto md:h-screen w-full">
        {children}
      </main>
    </div>
  );
}
