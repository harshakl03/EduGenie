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
    <div className="flex flex-col w-full p-4 gap-6 bg-gradient-to-br">
      <div className="relative w-full h-48 bg-gray-200 rounded-xl overflow-hidden shadow-md">
        <img
          src="/amaan.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
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
            src="/amaan.jpg"
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
        <div className="mt-4 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold">{data.Name}</h2>
            <p className="text-sm text-gray-600">{data.Course}</p>
          </div>
          {/* <div className="flex flex-col md:ml-6">
            <p className="text-2xl font-bold">Year 3</p>
            <p className="text-sm text-gray-600">1BI22CD030</p>
          </div> */}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-6xl mx-auto border-l-8 border-[#0D1B4C]">
        <h3 className="text-2xl font-semibold border-b pb-2 mb-4 text-[#0D1B4C]">
          Personal
        </h3>
        <div className="grid grid-cols-2 gap-4 text-lg">
          <div>
            <span className="font-medium text-xl">First Name:</span>{" "}
            {data.Name?.split(" ")[0]}
          </div>
          {/* <div>
            <span className="font-medium text-xl">Gender:</span> Male
          </div> */}
          <div>
            <span className="font-medium text-xl">Last Name:</span>{" "}
            {data.Name?.split(" ")[1]}
          </div>
          <div>
            <span className="font-medium text-xl">Date of Birth:</span>{" "}
            {data.DOB}
          </div>
          <div>
            <span className="font-medium text-xl">Country:</span>{" "}
            {data.Address?.country}
          </div>
          <div>
            <span className="font-medium text-xl">Course:</span> {data.Course}
          </div>
          {/* <div className="col-span-2">
            <span className="font-medium">College:</span> Bangalore Institute of
            Technology
          </div> */}
        </div>

        <h3 className="text-2xl font-semibold border-b pb-2 mt-6 mb-4 text-[#0D1B4C]">
          Contact
        </h3>
        <div className="grid grid-cols-2 gap-4 text-lg">
          {/* <div>
            <span className="font-medium text-xl">Email:</span>{" "}
            pavan.radapa@gmail.com
          </div> */}
          <div>
            <span className="font-medium text-xl">Mobile Number:</span>{" "}
            {data.Phone_Number}
          </div>
          <div className="col-span-2">
            <span className="font-medium text-xl">Address:</span>{" "}
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
