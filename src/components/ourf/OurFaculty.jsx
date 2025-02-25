import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faFlask,
  faDesktop,
  faImage,
  faChessBoard,
  faCube,
} from "@fortawesome/free-solid-svg-icons";

export default function Facilities() {
  const facilities = [
    { title: "Smart Classroom", icon: faAward, bg: "bg-white", text: "text-red-800" },
    { title: "Science Laboratory", icon: faFlask, bg: "bg-white", text: "text-red-800" },
    { title: "Hitech Computer Lab", icon: faDesktop, bg: "bg-white", text: "text-red-800" },
    { title: "Auditorium", icon: faImage, bg: "bg-white", text: "text-red-800" },
    { title: "Conference Room", icon: faChessBoard, bg: "bg-white", text: "text-red-800" },
    { title: "PT Room", icon: faCube, bg: "bg-white", text: "text-red-800" },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl  text-center mb-6 text-red-950">OUR FACILITIES</h2>
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="group p-6 border rounded-md shadow-sm flex items-center space-x-4 bg-white hover:bg-[#fff1f1] transition-all hover:border-red-300"
          >
            {/* Icon turns white on hover */}
            <FontAwesomeIcon icon={facility.icon} className="text-3xl text-red-800 group-hover:text-red-900" />
            
            <div>
              {/* Title turns white on hover */}
              <h3 className="text-lg font-semibold text-red-950 group-hover:text-red-900">
                {facility.title}
              </h3>
              
              {/* Paragraph turns white on hover */}
              <p className="text-gray-600 text-sm group-hover:text-red-950 text-red-950">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
