import Header from "@/components/header";
import Navigation from "@/components/navigation";
import { FaGraduationCap, FaTools } from "react-icons/fa";

export default function Thesis() {
  return (
    <div className="min-h-screen bg-[#f0ffd7]">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Navigation />
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-[#8B0000]">
              THESIS (UNDERGRADUATE)
            </h1>
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-[#8B0000] mb-4 flex items-center">
                <FaGraduationCap className="mr-2" /> Mixed Convective Heat
                Transfer in a Square Cavity filled with Power-law Fluids under
                Active Flow Modulation
              </h2>
              <p className="mb-4">
                I have worked on this thesis with my fellow partner under the
                supervision of Dr. Mohammad Nasim Hasan, Professor, Department
                of Mechanical Engineering, BUET.
              </p>
              <h3 className="text-lg font-semibold mb-2 text-[#8B0000] flex items-center">
                <FaTools className="mr-2" /> Software's utilized:
              </h3>
              <ul className="list-disc pl-8">
                <li>COMSOL Multiphysics 6.1</li>
                <li>Tecplot</li>
                <li>MS Excel</li>
                <li>MS Word</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
