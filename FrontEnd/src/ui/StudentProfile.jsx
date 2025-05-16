import React, { useState } from "react";

export default function Profile() {
  const [profileImage, setProfileImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);

  const handleProfileImageChange = (e) => {
    if (e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleBannerImageChange = (e) => {
    if (e.target.files[0]) {
      setBannerImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="flex flex-col w-full p-6 gap-6 bg-gradient-to-br from-white to-blue-50 min-h-screen">
      <div className="relative w-full h-48 bg-gray-200 rounded-xl overflow-hidden shadow-md">
        {bannerImage ? (
          <img
            src={bannerImage}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Upload Banner Image
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          className="absolute top-2 right-2 opacity-0 w-10 h-10 cursor-pointer"
          onChange={handleBannerImageChange}
        />
      </div>

      <div className="relative -mt-16 w-full flex flex-col items-center">
        <div className="relative">
          <img
            src={profileImage || "https://via.placeholder.com/96"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-md"
          />
          <input
            type="file"
            accept="image/*"
            className="absolute bottom-0 right-0 opacity-0 w-10 h-10 cursor-pointer"
            onChange={handleProfileImageChange}
          />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">Pavan.D</h2>
          <p className="text-sm text-gray-600">Data Science</p>
          <p className="text-base mt-1 font-medium">Year 3</p>
          <p className="text-sm text-gray-600">1BI22CD030</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6 w-full max-w-4xl mx-auto border-l-8 border-blue-500">
        <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-blue-700">
          Personal
        </h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium">Name:</span> Pavan.D
          </div>
          <div>
            <span className="font-medium">Gender:</span> Male
          </div>
          <div>
            <span className="font-medium">Last Name:</span> D
          </div>
          <div>
            <span className="font-medium">Date of Birth:</span> 01/01/2001
          </div>
          <div>
            <span className="font-medium">Country:</span> India
          </div>
          <div>
            <span className="font-medium">Course:</span> Data Science
          </div>
          <div className="col-span-2">
            <span className="font-medium">College:</span> Bangalore Institute of
            Technology
          </div>
        </div>

        <h3 className="text-lg font-semibold border-b pb-2 mt-6 mb-4 text-blue-700">
          Contact
        </h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium">Email:</span> pavan.radapa@gmail.com
          </div>
          <div>
            <span className="font-medium">Mobile Number:</span> 7204163730
          </div>
          <div className="col-span-2">
            <span className="font-medium">Address:</span> #712, 4th Cross, Upkar
            Layout Near RTO Office, Bangalore 560091
          </div>
        </div>
      </div>
    </div>
  );
}
