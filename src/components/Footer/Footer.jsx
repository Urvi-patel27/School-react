import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#000000e0] text-gray-100 py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Reach Us */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">Reach Us</h2>
          <p className="flex items-center gap-2">
            132 My Street, Kingston, New York 1240
          </p>
          <p className="flex items-center gap-2">(+91) 1122334455</p>
          <p className="flex items-center gap-2">✉️ saraswati@gmail.com</p>
          {/* Social Media Icons */}
          <div className="flex gap-3 mt-4">
            <div className="bg-gray-700 p-2 rounded hover:bg-gray-600">
              <FaFacebookF />
            </div>
            <div className="bg-gray-700 p-2 rounded hover:bg-gray-600">
              <FaGooglePlusG />
            </div>
            <div className="bg-gray-700 p-2 rounded hover:bg-gray-600">
              <FaTwitter />
            </div>
            <div className="bg-gray-700 p-2 rounded hover:bg-gray-600">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">Links</h2>
          <ul className="space-y-2">
            <li>About School</li>
            <li>Infrastructure</li>
            <li>Facilities</li>
            <li>Academy</li>
            <li>Photo Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Our Facility */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">
            Our Facility
          </h2>
          <ul className="space-y-2">
            <li>Smart Classroom</li>
            <li>Science Laboratory</li>
            <li>Hitech Computer</li>
            <li>Auditorium</li>
            <li>Conference Room</li>
            <li>PT Room</li>
          </ul>
        </div>

        {/* Gallery */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">Gallery</h2>
          <div className="grid grid-cols-3 gap-2">
            {[
              "https://avatars.mds.yandex.net/i?id=0d425d1cc79c17b3bd9a4e5de1074f7367e63203096541d0-13605392-images-thumbs&n=13",
              "https://thumbs.dreamstime.com/b/going-to-school-5716033.jpg",
              "https://avatars.mds.yandex.net/i?id=c36b304e3316e9f48a86fe554a6f085ab0d636a0-9863472-images-thumbs&n=13",
              "https://avatars.mds.yandex.net/i?id=e6d33fa11af056c3e96c98fb435c00a167cce72b-10137431-images-thumbs&n=13",
              "https://assets.project-management.com/uploads/2018/10/success-scaled.jpeg",
              "https://avatars.mds.yandex.net/i?id=8dfa43bb12dafff815cd83c766cc5bc8a868b9bc-8797427-images-thumbs&n=13",
            ].map((img, i) => (
              <div key={i} className="relative w-20 h-20 overflow-hidden group">
                <img
                  src={img}
                  //   alt={`Gallery Image ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 translate-y-full group-hover:translate-y-0 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p>
          Saraswati Vidhyalay | Proudly Created By{" "}
          <span className="text-red-400">brown Hightech</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
