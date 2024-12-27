import Header from "@/components/header";
import Navigation from "@/components/navigation";
import { FaProjectDiagram } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#f0ffd7]">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Navigation />
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-[#8B0000]">PROJECTS</h1>
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-[#8B0000] mb-4 flex items-center">
                <FaProjectDiagram className="mr-2" /> Shell and Tube Heat
                Exchanger – a prototype for heat exchanger in central air
                conditioning
              </h2>
              <p className="mb-2 font-semibold">March 2023</p>
              <p className="mb-4">
                With my team, I have designed and manufactured a cross flow
                shell and tube heat exchanger. The purpose was to exchange heat
                between refrigerant and water in central air conditioning. Solid
                works software was used for designing and HTRI software was used
                for simulation.
              </p>
            </section>
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-[#8B0000] mb-4 flex items-center">
                <FaProjectDiagram className="mr-2" /> Remote Controlled
                Fertilizer Spraying Drone
              </h2>
              <p className="mb-2 font-semibold">October 2022</p>
              <p className="mb-4">
                Along with my team, I have designed and manufactured a
                remote-controlled fertilizer spraying drone to reduce the
                workload of farmers in agricultural sector.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
