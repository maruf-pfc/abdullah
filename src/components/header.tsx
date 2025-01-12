import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full bg-[#8B0000]">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:gap-6">
          <Image
            src="/logo.jpeg"
            alt="BUET Logo"
            width={80}
            height={80}
            className="rounded-full bg-white p-1"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
              বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয়
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-white">
              Bangladesh University of Engineering and Technology
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
}
