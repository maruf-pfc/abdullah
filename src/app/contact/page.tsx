import Header from "@/components/header";
import Navigation from "@/components/navigation";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export const metadata = {
  title: "Contact | Muhammad Abdullah",
  description:
    "Get in touch with Muhammad Abdullah, Adjunct Lecturer at BUET. Find contact information and office location.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f0ffd7]">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Navigation />
        <main className="flex-1 p-4 md:p-8">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-[#8B0000]">
              Contact Information
            </h1>
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-[#8B0000] mb-4">
                Get in Touch
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaEnvelope
                    className="text-[#8B0000] mr-2"
                    aria-hidden="true"
                  />
                  <span className="font-semibold mr-2">Email:</span>
                  <a
                    href="mailto:abdullah1810037@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    abdullah1810037@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <FaPhone className="text-[#8B0000] mr-2" aria-hidden="true" />
                  <span className="font-semibold mr-2">Phone:</span>
                  <a
                    href="tel:+8801521707828"
                    className="text-blue-600 hover:underline"
                  >
                    +880 1521707828
                  </a>
                </li>
                <li className="flex items-start">
                  <FaMapMarkerAlt
                    className="text-[#8B0000] mr-2 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="font-semibold">Office Address:</span>
                    <p>
                      Department of Mechanical Engineering,
                      <br />
                      Bangladesh University of Engineering and Technology
                      (BUET),
                      <br />
                      Dhaka-1000, Bangladesh
                    </p>
                  </div>
                </li>
              </ul>
            </section>
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-[#8B0000] mb-4">
                Office Hours
              </h2>
              <p>
                Monday to Thursday: 9:00 AM - 5:00 PM
                <br />
                Friday: 9:00 AM - 1:00 PM
                <br />
                Saturday and Sunday: Closed
              </p>
              <p className="mt-4">
                For appointments, please email or call during office hours.
              </p>
            </section>
          </article>
        </main>
      </div>
    </div>
  );
}
