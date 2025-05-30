import React from "react";
import { User, Circle, X } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers = [] } = useAuthStore();

  if (!selectedUser) return null;

  const isOnline =
    Array.isArray(onlineUsers) && onlineUsers.includes(selectedUser._id);

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-base-300 bg-base-100/80 backdrop-blur sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={selectedUser.profilePic || "/avatar.png"}
            alt={selectedUser.fullName}
            className="w-10 h-10 rounded-full border border-base-300 shadow-sm object-cover"
          />
          <span
            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ring-2 ring-base-100 ${
              isOnline ? "bg-green-500" : "bg-gray-400"
            }`}
          ></span>
        </div>
        <div>
          <div className="font-semibold text-base-content text-lg truncate">
            {selectedUser.fullName}
          </div>
          <div className="text-xs text-base-content/60">
            {isOnline ? "Online" : "Offline"}
          </div>
        </div>
      </div>
      <button
        className="btn btn-ghost btn-sm"
        onClick={() => setSelectedUser(null)}
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ChatHeader;
