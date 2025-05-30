import React, { useState, useRef } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Pencil, ArrowLeft, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);
  const fileInputRef = useRef();
  const navigate = useNavigate();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="h-screen text-gray-900 dark:text-white flex flex-col">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-3 border-b dark:border-gray-700 bg-base-100/80 backdrop-blur sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="btn btn-ghost btn-sm">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold tracking-tight">Profile</h1>
        <span className="text-xs text-base-content/60 font-mono">
          ID: {authUser._id?.slice(-6) || "-"}
        </span>
      </div>

      <div className="mx-auto w-3/5  p-4 mt-4 rounded-lg">
        <div className="max-w-xl mx-auto p-6 space-y-8 w-full">
          {/* Profile Picture */}
          <div className="flex flex-col items-center gap-2">
            <div className="relative group">
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-primary/30 shadow-lg transition-all duration-300 group-hover:scale-105"
              />
              <label
                htmlFor="avatar-upload"
                className={`absolute bottom-2 right-2 bg-primary text-white p-2 rounded-full cursor-pointer shadow-lg border-2 border-white transition-all duration-200 group-hover:scale-110 ${
                  isUpdatingProfile ? "pointer-events-none opacity-50" : ""
                }`}
              >
                {isUpdatingProfile ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Camera className="w-5 h-5" />
                )}
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                  ref={fileInputRef}
                />
              </label>
            </div>
            <span className="text-xs text-base-content/60 mt-1">
              Click camera to change photo
            </span>
          </div>

          {/* Name Section (read-only) */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-sm text-base-content/60">Name</label>
            </div>
            <p className="text-lg font-semibold">{authUser.fullName}</p>
          </div>

          {/* Email Section */}
          <div className="space-y-1">
            <label className="text-sm text-base-content/60">Email</label>
            <p className="font-mono text-base-content/80">{authUser.email}</p>
          </div>

          {/* Phone Number Section */}
          <div className="space-y-1">
            <label className="text-sm text-base-content/60">Phone</label>
            <p>
              {authUser.phoneNumber || (
                <span className="italic text-base-content/40">Not set</span>
              )}
            </p>
          </div>

          <div className="mt-6 bg-base-200 rounded-xl p-6">
            <h2 className="text-lg font-medium mb-4">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                <span>Memeber since</span>
                <span>{authUser.createdAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account status</span>
                <span className="text-green-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
