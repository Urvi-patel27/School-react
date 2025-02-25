import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import contactmain from "../../images/contactmain.jpg";

const contacts = [
  {
    title: "Our Head office address",
    details: [
      "5, City Centre,",
      " Post Office Lane,",
      "Parel, Mumbai 400012,",
      "Maharashtra, India."
    ]
  },
  {
    title: "Telephone number",
    details: ["011 23330000"],
    email: "admissions@ourjourney.org"
  },
  {
    title: "Connect with us",
    social: [
      { icon: <FaFacebook />, link: "https://facebook.com" },
      { icon: <FaTwitter />, link: "https://twitter.com" },
      { icon: <FaLinkedin />, link: "https://linkedin.com" },
      { icon: <FaInstagram />, link: "https://instagram.com" },
      { icon: <FaYoutube />, link: "https://youtube.com" }
    ]
  }
];

const departments = [
  {
    title: "ACCOUNTS DEPARTMENT",
    name: "Mr. Johan Sharma",
    position: "General Manager - Accounts (Trust)",
    email: "ouraccounts@our.org"
  },
  {
    title: "BUSINESS OPPORTUNITIES",
    name: "Mr. Sharma",
    position: "Sr. Manager",
    email: "sharma@our.org"
  },
  {
    title: "CAREER & HR DEVELOPMENT",
    name: "Mrs. Megha Trivedi",
    position: "Chief Human Resources Officer",
    email: "trivedi.paranjpe@our.org"
  }
];

function Contactx() {
  return (
    <div className="max-w-7xl mx-auto">
      <img src={contactmain} alt="Contact Us" className="w-full object-cover mt-10 rounded-lg" />

      <div className="container mx-auto p-6 text-center text-gray-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <div key={index} className="border border-red-300 p-6 rounded-lg shadow-md bg-white">
              <h2 className="font-semibold text-lg mb-2">{contact.title}</h2>
              <hr className="border-t border-red-300 mb-2" />
              {contact.details?.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              {contact.email && <p className="text-red-600">{contact.email}</p>}
              {contact.social && (
                <div className="flex flex-wrap justify-center gap-4 mt-2">
                  {contact.social.map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl text-red-900 hover:text-red-700 transition"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold text-red-950 my-6">OUR DEPARTMENTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <div key={index} className="border border-red-300 p-6 rounded-lg shadow-md bg-white">
              <h2 className="font-semibold text-lg mb-2">{dept.title}</h2>
              <hr className="border-t border-red-300 mb-2" />
              <p>{dept.name}</p>
              <p className="text-sm text-gray-600">{dept.position}</p>
              <p className="text-red-600">{dept.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contactx;
