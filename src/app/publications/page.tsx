import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Link from "next/link";
import { FaBook } from "react-icons/fa";

export default function Publications() {
  return (
    <div className="min-h-screen bg-[#f0ffd7]">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Navigation />
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-[#8B0000]">
              Publications
            </h1>

            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-[#8B0000] mb-4 flex items-center">
                <FaBook className="mr-2" /> Journal Articles
              </h2>
              <ul className="list-disc pl-8 space-y-4">
                <li>
                  Muhammad Abdullah, Md. Nasim Mia, Fahim Tanfeez Mahmood, and
                  Mohammad Nasim Hasan (2024), A CFD Approach to Mixed
                  Convection of Power-Law Fluids in a Square Enclosure with
                  Rotating Blade Flow Modulator. Manuscript submitted for
                  publication in International Journal of Heat and Fluid Flow.
                </li>
                <li>
                  Md. Nasim Mia, Muhammad Abdullah, Arpita Das, Fahim Tanfeez
                  Mahmood, and Mohammad Nasim Hasan (2024), Mixed Convective
                  Heat Transfer in a Square Cavity filled with Power-law Fluids
                  under Active Flow Modulation. Heat Transfer. 2024;1‐26.
                  doi:10.1002/htj.23143
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
