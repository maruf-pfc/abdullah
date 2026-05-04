import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full bg-gradient-to-r from-[#8B0000] via-[#A80000] to-[#8B0000] shadow-lg border-b border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-5 sm:flex-row sm:space-y-0 sm:gap-6 animate-fade-in-up">
          <Image
            src="/logo.jpeg"
            alt="BUET Logo"
            width={85}
            height={85}
            className="rounded-full bg-white p-1 shadow-md hover:scale-105 transition-transform duration-300"
          />
          <div className="text-center sm:text-left drop-shadow-sm">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">
              বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয়
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-red-50 font-medium opacity-90">
              Bangladesh University of Engineering and Technology
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
}
