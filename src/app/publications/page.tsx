import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Publications() {
  return (
    <div className="min-h-screen bg-[#f0ffd7]">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Navigation />
        <main className="flex-1 p-4 md:p-8">
          <h1 className="text-2xl font-bold mb-6">
            Selected Publications & Presentations
          </h1>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Edited Books</h2>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                Applied Measurement Systems (2012), Md. Zahurul Haq (Ed.), ISBN:
                978-953-51-0103-1, InTech
              </li>
              <li>
                Advanced Topics in Measurements (2012), Md. Zahurul Haq (Ed.),
                ISBN: 978-953-51-0128-4, InTech
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Book Chapter</h2>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                Measurement: System, Uncertainty and Response (2012), Applied
                Measurement Systems, InTech
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Refereed Journal Papers</h2>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                Haq, M.Z., Ayon, M.S.R., Nouman, M.W.B. and Bihari, R. (2022),
                "Thermodynamic analysis and optimisation of a novel
                transcritical CO2 cycle", Energy Convers. Manag. 273:116407.
              </li>
              <li>
                Haq, M.Z. (2021), "Optimization of an Organic Rankine
                Cycle-Based Waste Heat Recovery System Using a Novel
                Target-Temperature-Line Approach", ASME J. Energy Resour.
                Technol. 143(9): 092101:1-12.
              </li>
              <li>
                Haq, M.Z. (2006), "Effect of Developing Turbulence and Markstein
                Number on the Propagation of Flames in Methane-Air Premixture",
                ASME J. Eng. Gas Turbines Power, 128:455-462.
              </li>
              <li>
                Haq, M.Z. (2005), "Correlations for the Onset of Instabilities
                of Spherical Laminar Premixed Flames", ASME J. Heat Transfer,
                127:1410-1415.
              </li>
              <li>
                Bradley, D., Haq, M.Z., Hicks, R.A., Kitagawa, T., Lawes, M.,
                Sheppard, C.G.W. and Woolley, R., (2003), "Turbulent burning
                velocity, burned gas distribution, and associated flame surface
                definition", Combust. Flame, 133:415-430.
              </li>
              <li>
                Haq, M.Z., Sheppard, C.G.W., Woolley, R., Greenhalgh, D.A. and
                Lockett, R.D. (2002), "Wrinkling and curvature of laminar and
                turbulent premixed flames", Combust. Flame, 131:1-15.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">
              Refereed Conference Papers
            </h2>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                Haq, M.Z. and Morshed, A. (2013), "Energy and Exergy Based
                Analyses of a Multi-fuelled SI Engine", Proc. ASME 2013 Power
                Conference (Power2013), Jul. 29-Aug. 1, 2013, Boston,
                Massachusetts, USA, Paper No. Power2013-98279.
              </li>
              <li>
                Haq, M.Z. and Mohiuddin, M.R. (2011), "Thermodynamic Analysis of
                a Multi-fueled Single Cylinder SI Engine", Proc. ASME 2011
                International Mechanical Engineering Congress & Exposition
                (IMECE2011), 11-17 Nov. 2011, Colorado, USA, Paper No.
                IMECE2011-62423.
              </li>
              <li>
                Hossain, S., Ali, M.Y., Jamil, H. and Haq, M.Z. (2010),
                "Automated Guided Vehicles for Industrial Logistics -
                Development of Intelligent Prototypes Using Appropriate
                Technology", Proc. of The 2nd International Conference on
                Computer and Automation Engineering (ICCAE), 26-28 Feb. 2010,
                Singapore, pp. 237-241.
              </li>
              <li>
                Haq, M.Z., Rahman, M.H. and Bhutto, Z.A. (2003), "Performance
                Studies of a Biogas Fueled Diesel Engine Operating in a Dual
                Fuel Mode", Proc. International Conference on Power Engineering
                (ICOPE-03), 9-13 Nov. 2003, Kobe, Japan, pp. "3-57"-"3-62".
              </li>
              <li>
                Haq, M.Z. (2003), "Prediction of Instabilities of Spherically
                Propagating Flames in Laminar Premixture", Proc. ASME 2003 Heat
                Transfer Summer Conference (HT2003), 21-23 July, 2003, Las
                Vegas, Nevada, USA, Paper No. HT2003-47484, pp. 153-160.
              </li>
              <li>
                Haq, M.Z. (2003), "Developing Turbulence on the Propagation of
                Flames in Methane-Air Premixture", Proc. of International Joint
                Power Generation Conference (IJPGC2003), 16-19 June, 2003,
                Atlanta, Georgia, USA, Paper No. IJPGC2003-40143, pp. 787-793.
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
