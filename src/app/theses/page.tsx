import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Link from "next/link";

export default function Theses() {
  return (
    <div className="min-h-screen bg-[#f0ffd7]">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Navigation />
        <main className="flex-1 p-4 md:p-8">
          <h1 className="text-2xl font-bold mb-6">Theses/Projects & Courses</h1>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">
              Supervised Theses/Projects
            </h2>
            <h3 className="text-lg font-semibold mb-2">M.Sc. Engg. Theses</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                Exergy And Thermo-Economic Study Of A 412 MW Natural Gas-Fired
                Combined Cycle Power Plant (M.S. Islam, 2023)
              </li>
              <li>
                Multi-Objective Optimization Of Organic Rankine Cycle Based
                Waste Heat Recovery Systems Using Artificial Intelligence (R.D.A
                Zayed, 2022)
              </li>
              <li>
                Energy Efficient HVAC Design of Buildings using Locally
                Available Materials (M.E.J. Khan, 2019)
              </li>
              <li>
                Energy and Exergy Analysis of Waste Heat Recovery Systems using
                Organic Rankine Cycle (A. Saha, 2016)
              </li>
              <li>
                Exergetic and Power Augmentation Analyses of Gas Turbine with
                Air-bottoming Combined Cycle (M.J. Hoque, 2016)
              </li>
              <li>
                Optimum PID Control of a Servo-motor Subjected to Frictional
                Loads, Inertia and Disturbances (K.A. Rahman, 2014)
              </li>
              <li>
                Energy and Exergy Based Analysis of a Multi-Fuelled SI Engine
                (A. Morshed, 2013)
              </li>
              <li>
                Dynamic Response of a Mobile Robot Drive Using PID Control (Z.
                Aziz, 2011)
              </li>
              <li>
                Development and Tuning of a PID Control System for Mobile Robot
                Drive (S.M. Ali, 2011)
              </li>
              <li>
                Exergy Analysis of a Four Stroke Spark-Ignition Engine using
                Different Fuels (M.R. Mohiuddin, 2010)
              </li>
              <li>
                Dynamic Characteristics of Servo-Controlled Mobile Robot using
                Optimum Pulse Width Modulation (PWM) (M.E. Kabir, 2009)
              </li>
              <li>
                Sesame Oil as an Alternative Fuel for Diesel Engines in
                Bangladesh (A.K.M.M. Morshed, 2008)
              </li>
              <li>
                Energy-Exergy Analysis of a Diesel Engine Running of Preheated
                SVO (Straight Vegetable Oil) (M.M. Islam, 2006)
              </li>
              <li>
                Performance of a Diesel Engine with Preheated Vegetable Oil as
                an Alternative Fuel (M.S. Uddin, 2005)
              </li>
              <li>
                Comprehensive Modeling of Diesel Engine with Biogas/Diesel Dual
                Fueling for Optimized Performance (Z.A. Bhutto, 2003)
              </li>
              <li>
                Experimental Investigation of Dual-Fuel Diesel Engine (M.H.
                Rahman, 2003)
              </li>
              <li>
                Modeling of Flame Propagation in Biogas-Air Premixture (M.
                Mizanuzzaman, 2001)
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">
              UG Projects for Asia-Pacific Robot Contests (ROBOCON 2005-2009)
            </h2>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                Robocon 2009, Tokyo, Japan{" "}
                <Link href="#" className="text-blue-600">
                  [1]
                </Link>{" "}
                <Link href="#" className="text-blue-600">
                  [2]
                </Link>{" "}
                <Link href="#" className="text-blue-600">
                  [3]
                </Link>{" "}
                <Link href="#" className="text-blue-600">
                  [4]
                </Link>
              </li>
              <li>
                Robocon 2008, Pune, India{" "}
                <Link href="#" className="text-blue-600">
                  [5]
                </Link>{" "}
                <Link href="#" className="text-blue-600">
                  [6]
                </Link>
              </li>
              <li>
                Robocon 2007, Hanoi, Vietnam{" "}
                <Link href="#" className="text-blue-600">
                  [7]
                </Link>{" "}
                <Link href="#" className="text-blue-600">
                  [8]
                </Link>{" "}
                <Link href="#" className="text-blue-600">
                  [9]
                </Link>
              </li>
              <li>
                Robocon 2006, Kualalumpur, Malaysia{" "}
                <Link href="#" className="text-blue-600">
                  [10]
                </Link>
              </li>
              <li>
                Robocon 2005, Beijing, China: team achieved PANASONIC Award.{" "}
                <Link href="#" className="text-blue-600">
                  [11]
                </Link>{" "}
                <Link href="#" className="text-blue-600">
                  [12]
                </Link>{" "}
                <Link href="#" className="text-blue-600">
                  [13]
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">
              Offered Courses (partial list)
            </h2>
            <h3 className="text-lg font-semibold mb-2">
              Undergraduate (UG) Courses
            </h3>
            <ul className="list-disc pl-8 space-y-2">
              <li>ME 101 : Introduction to Mechanical Engineering [2024]</li>
              <li>
                ME 203 : Engineering Thermodynamics [2022-23], [replaces ME 201:
                Basic Thermodynamics]
              </li>
              <li>ME 307 : Heat Transfer Equipment Design [2024]</li>
              <li>ME 361 : Instrumentation and Measurement [2019-18]</li>
              <li>ME 407 : Advanced Thermodynamics [2022-23]</li>
              <li>
                ME 415 : Refrigeration & Building Mechanical Systems [2014]
              </li>
              <li>
                ME 417 : Internal Combustion Engines [2023], [replaces ME 401:
                Internal Combustion Engines]
              </li>
              <li>ME 425 : Mechatronics [2011]</li>
              <li>
                RME 3102 : Advanced Mechatronics Engineering [2024], for
                Department of Robotics and Mechatronics Engineering, University
                of Dhaka.
              </li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">
              Postgraduate (PG) Courses
            </h3>
            <ul className="list-disc pl-8 space-y-2">
              <li>ME 6101 : Classical Thermodynamics [2024]</li>
              <li>ME 6163 : Combustion Engineering [2020]</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
