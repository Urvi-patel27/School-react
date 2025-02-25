
import React, { useState } from "react";
const images = [
  { src: "https://creativeyatra.com/wp-content/uploads/2018/07/Delhi-Public-School-Bopal.jpg", alt: "Yoga Event" },
  { src: "https://i.ytimg.com/vi/79Fm8qSo4M4/maxresdefault.jpg", alt: "School Function" },
  { src: "https://www.joonsquare.com/usermanage/image/business/victor-international-school-karnal-751/victor-international-school-karnal-victor3.jpg", alt: "15 August", overlay: true },
  { src: "https://4.bp.blogspot.com/-O7pGcN3Tj-E/Wk8lbPm9M3I/AAAAAAAAA98/aYv5oVp1nVwYF4Ur7zVvMke-zrxm4TiiACLcBGAs/w1200-h630-p-k-no-nu/Dimasa%2BTribe%2BTraditional%2BCostume.jpg", alt: "Fancy Dress Competition" },
  { src: "https://live.staticflickr.com/65535/51438943373_735662e19a.jpg", alt: "Red Day" },
  { src: "https://avatars.mds.yandex.net/i?id=3a11f409651efb0a6c1b33f6450b4e6fce37b382-5363302-images-thumbs&n=13", alt: "Natak Competition" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/b/b9/The_Chief_of_Army_Staff%2C_General_Bipin_Rawat_inspecting_the_Parade%2C_during_his_visit_to_the_NCC_Republic_Day_Parade_Camp_2018%2C_in_New_Delhi_on_January_16%2C_2018._The_DG%2C_NCC%2C_Lt._Gen._B.S._Sahrawat_is_also_seen.jpg", alt: "Army day" },
  { src: "https://smapse.com/storage/2019/03/kingsley-school-3.jpg", alt: "Trip" },
  { src: "https://i.ytimg.com/vi/zaotCsZXehE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-HYAC8BCKAgwIABABGGUgXShOMA8=&amp;rs=AOn4CLC5uRpiRz4FDQ7flnOAvs97ZxaPSQ", alt: "Fancy Dress Competition" },
  { src: "https://mkurnali.ge/media/images/new_images/merchant-taylor-boys-sports-day-150617-78.jpg", alt: "Fancy Dress Competition" },
  { src: "https://www.aljazeera.com/wp-content/uploads/2017/08/ece04d41602046ec8c6e8a3cc6cf7557_8.jpeg?fit=1170%2C780", alt: "Fancy Dress Competition" },
  { src: "https://avatars.mds.yandex.net/i?id=b3b1ec9511213c86eba91e3f1e7962597347f10a-9052390-images-thumbs&n=13", alt: "Fancy Dress Competition" },
   
];

const captions = [
    "YOGA DAY",
    "ANNUAL FUNCTION",
    "15 AUGUST",
    "TRADITIONAL DAY",
    "RED DAY",
    "NATAK COMPETION",
    "ARMY DAY",
    "TRIP",
    "NAVY DAY",
    "SPORTS DAY",
    "REPUBLIC DAY",
    "EVENTS"
  ];
  
  function ImgGallery() {
    return (<>
        <header className="relative w-full h-screen flex items-center justify-center bg-gray-900">
                <img
                  src="https://www.hse.ru/data/2022/09/01/1696942735/3iStock-157719429.jpg.(1000x1000x1).jpg"
                  alt="School Building"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="relative z-10  text-center sm:text-left px-4">
                  <h2 className="text-white text-lg sm:text-xl bg-red-700 px-4 py-2 w-max mx-auto sm:mx-0">
                    We Provide Best
                  </h2>
                  <h1 className="text-3xl sm:text-5xl font-bold text-red-900 bg-white px-6 py-3 mt-2 w-max mx-auto sm:mx-0">
                    EVENTS GALLERY
                  </h1>
                
                </div>
              </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mt-14">
        
        {images.map((img, index) => (
          <div
            key={index}
            className="relative border-2 border-orange-100 rounded-lg overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 text-white">
              <h1 className="text-xl font-semibold">{captions[index] || `Event ${index + 1}`}</h1>
              {/* <div className="bg-red-900 text-white rounded-full w-8 h-8 flex items-center justify-center mt-2">+</div> */}
            </div>
          </div>
        ))}
      </div>
      </>
    );
  }
  
  export default ImgGallery;
  
