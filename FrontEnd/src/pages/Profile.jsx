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

  return (
    <div className="flex flex-col w-full p-6 gap-10 bg-gradient-to-br to-[#F8FAFF] min-h-screen animate-fade-in">
      {/* Banner */}
      <div className="relative w-full h-56 rounded-3xl overflow-hidden shadow-md group transition-all duration-300 hover:shadow-lg">
        <img
          src={bannerImage || "/edugenie.png"}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <label className="text-[#1C1C1C] text-base font-semibold bg-white/70 px-4 py-2 rounded-lg cursor-pointer shadow-md">
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
      <div className="relative -mt-24 flex flex-col items-center">
        <div className="relative group">
          <img
            src={profileImage || "/pavan.png"}
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-white object-cover shadow-lg transition-all duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 rounded-full flex items-center justify-center transition duration-300">
            <label className="text-sm font-medium px-3 py-1 bg-white/80 text-gray-700 rounded-full cursor-pointer shadow">
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
        <div className="mt-4 text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-[#0D1B4C]">{data.Name}</h2>
          <p className="text-md text-gray-500">{data.Course}</p>
        </div>
      </div>

      {/* Profile Info */}
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-6xl mx-auto border-l-8 border-[#1C398E] transition hover:shadow-2xl duration-300">
        <h3 className="text-2xl font-extrabold border-b pb-3 mb-6 text-[#0D1B4C]">
          Personal Information
        </h3>
        <div className="grid grid-cols-2 gap-6 text-base text-gray-700">
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

        <h3 className="text-2xl font-extrabold border-b pb-3 mt-10 mb-6 text-[#0D1B4C]">
          Contact Details
        </h3>
        <div className="grid grid-cols-2 gap-6 text-base text-gray-700">
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
