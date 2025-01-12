import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#8B0000] text-white py-4 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Muhammad Abdullah. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          This website was developed by{" "}
          <Link
            href="https://www.linkedin.com/in/mdmarufsarker/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            Md. Maruf Sarker
          </Link>
        </p>
      </div>
    </footer>
  );
}
