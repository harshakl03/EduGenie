import React, { useState } from "react";
import useUserData from "../features/User/useUserData";
import PageLoader from "../ui/PageLoader";
import { useParams } from "react-router";

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

  const { id } = useParams();
  const { data, isLoading } = useUserData(id);

  if (isLoading) return <PageLoader type="show" />;
  console.log(data);

  return (
    <div className="flex flex-col w-full p-6 gap-8 bg-gradient-to-br  to-[#f0f4ff] min-h-screen">
      {/* Banner */}
      <div className="relative w-full h-52 rounded-2xl overflow-hidden shadow-lg group">
        <img
          src={bannerImage || "/amaan.jpg"}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <label className="text-black/50 text-lg font-semibold bg-white/80 px-5 py-2 rounded-lg cursor-pointer shadow">
            Upload Banner
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleBannerImageChange}
            />
          </label>
        </div>
      </div>

      {/* Profile Image + Name */}
      <div className="relative -mt-20 flex flex-col items-center">
        <div className="relative group">
          <img
            src={profileImage || "/amaan.jpg"}
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-white object-cover shadow-xl"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 rounded-full flex items-center justify-center transition duration-300">
            <label className="text-black/50 text-sm font-medium px-3 py-1 bg-white/50 rounded-full cursor-pointer shadow">
              Change
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfileImageChange}
              />
            </label>
          </div>
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-3xl font-bold text-[#0D1B4C]">{data.Name}</h2>
          <p className="text-md text-gray-600">{data.Course}</p>
        </div>
      </div>

      {/* Personal Info */}
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-6xl mx-auto border-l-8 border-[#0D1B4C]">
        <h3 className="text-2xl font-bold border-b pb-3 mb-5 text-[#0D1B4C]">
          Personal Information
        </h3>
        <div className="grid grid-cols-2 gap-6 text-lg text-gray-700">
          <div>
            <span className="font-semibold">First Name:</span>{" "}
            {data.Name?.split(" ")[0]}
          </div>
          <div>
            <span className="font-semibold">Last Name:</span>{" "}
            {data.Name?.split(" ")[1] || "-"}
          </div>
          <div>
            <span className="font-semibold">Date of Birth:</span> {data.DOB}
          </div>
          <div>
            <span className="font-semibold">Country:</span>{" "}
            {data.Address?.country || "-"}
          </div>
          <div className="col-span-2">
            <span className="font-semibold">Course:</span> {data.Course}
          </div>
        </div>

        <h3 className="text-2xl font-bold border-b pb-3 mt-8 mb-5 text-[#0D1B4C]">
          Contact Details
        </h3>
        <div className="grid grid-cols-2 gap-6 text-lg text-gray-700">
          <div>
            <span className="font-semibold">Mobile Number:</span>{" "}
            {data.Phone_Number}
          </div>
          <div className="col-span-2">
            <span className="font-semibold">Address:</span>{" "}
            {data.Address?.value +
              ", " +
              data.Address?.city +
              ", " +
              data.Address?.state}
          </div>
        </div>
      </div>
    </div>
  );
}
