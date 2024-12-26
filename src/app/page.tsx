import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f0ffd7]">
      <Header />
      <div className="flex-1 flex md:flex-row">
        <Navigation />
        <main className="flex-1 p-4 md:p-8">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-[300px]">
                <Image
                  src="/abdullah.jpg"
                  alt="Faculty Photo"
                  width={300}
                  height={400}
                  className="w-full"
                />
                <div className="mt-4 text-center">
                  <h2 className="text-xl font-bold">Muhammad Abdullah</h2>
                  <p className="italic">Ph.D., CEA, FBSME, FIEB</p>
                  <p className="font-bold mt-2">Professor & Dean</p>
                  <p>Mechanical Engineering</p>
                  <p>BUET, Dhaka-1000, Bangladesh</p>

                  <div className="mt-4 text-left">
                    <p>
                      Email:{" "}
                      <Link
                        href="mailto:zahurul@me.buet.ac.bd"
                        className="text-blue-600"
                      >
                        abdullah@me.buet.ac.bd
                      </Link>
                    </p>
                    <p className="mt-1">Phone: +880 1798250510</p>
                  </div>

                  <div className="mt-4 text-left">
                    <p className="font-bold mb-2">Profiles:</p>
                    <ul className="space-y-1">
                      <li>
                        <Link href="#" className="text-blue-600">
                          BUET Research profile
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-blue-600">
                          Google Scholar profile
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-blue-600">
                          Scopus profile
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <Link href="#" className="text-blue-600">
                      Short CV
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <section className="mb-6">
                  <h2 className="text-lg font-bold text-blue-900 mb-2">
                    Research/Professional Interests
                  </h2>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>
                      Thermodynamics, Energy conversion, conservation and
                      optimization
                    </li>
                    <li>Thermal system design</li>
                    <li>Combustion and Engines</li>
                    <li>Mechatronics and Experimental techniques</li>
                    <li>Refrigeration and Air-conditioning (HVAC)</li>
                  </ul>
                </section>

                <section className="mb-6">
                  <h2 className="text-lg font-bold text-blue-900 mb-2">
                    Education
                  </h2>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>
                      B.Sc. Engg. (Mech), Bangladesh University of Engineering &
                      Technology (BUET), Dhaka, Bangladesh (1993)
                    </li>
                    <li>
                      M.Sc. Engg. (Mech), Bangladesh University of Engineering &
                      Technology (BUET), Dhaka, Bangladesh (1995)
                    </li>
                    <li>Ph.D. The University of Leeds, Leeds, UK (1998)</li>
                  </ul>
                </section>

                <section className="mb-6">
                  <h2 className="text-lg font-bold text-blue-900 mb-2">
                    Current Positions
                  </h2>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>
                      2024 - Dean, Mechanical Engineering, Bangladesh University
                      of Engineering and Technology
                    </li>
                    <li>
                      2004 - Professor, Department of Mechanical Engineering,
                      Bangladesh University of Engineering and Technology
                    </li>
                    <li>
                      2010 - Member, Board of Directors, Bangladesh Diesel Plant
                      Ltd. (A Commercial Enterprise of Bangladesh Army)
                    </li>
                    <li>
                      2015 - Member, Technical Advisory Committee for
                      Sustainable Finance Dept. (Green Banking Wing), Bangladesh
                      Bank
                    </li>
                    <li>
                      2015 - Member, Energy Management Advisory Committee
                      (EMAC), Sustainable & Renewable Energy Development
                      Authority (SREDA), Ministry of Power, Energy and Mineral
                      Resources, Bangladesh
                    </li>
                    <li>
                      2021 - Member, Technical Advisory Committee (TAC), Energy
                      Efficiency and Conservation Promotion Financing Project,
                      SREDA, Ministry of Power, Energy and Mineral Resources,
                      Bangladesh
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-bold text-blue-900 mb-2">
                    Additional/Past Affiliations
                  </h2>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>
                      Feb, 2014 - Feb, 2016: Head, Dept. of Mechanical
                      Engineering, BUET
                    </li>
                    <li>
                      Feb, 2013 - Aug, 2014: Director, Centre for Energy
                      Studies, BUET
                    </li>
                    <li>Sep, 2008 - Apr, 2010: Provost, Titumir Hall, BUET</li>
                    <li>
                      Nov, 2003 - Nov, 2005: System Analyst, Computer Centre,
                      BUET
                    </li>
                    <li>
                      Dec, 2008 - May, 2010: Member, Board of Directors,
                      Rupantarita Praktik Gas Co. Ltd. (RPGCL)
                    </li>
                    <li>
                      May, 2007 - 2015: Member, Project Management Board,
                      Haripur Gas Turbine Power Station
                    </li>
                    <li>
                      Jan, 2012 - Dec, 2015: Chairman, Prog. by Committee,
                      Bangladesh Standards & Testing Institution (BSTI)
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
