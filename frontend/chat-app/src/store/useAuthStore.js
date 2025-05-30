import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { io } from "socket.io-client";

const BASE_URL = import.meta.env.MODE === "development"
      ? "http://localhost:5001/api"
      : "/api";

export const useAuthStore = create((set, get) => ({
  authUser: null,

  isSigningUp: false,

  isLoggingIn: false,

  isUpdatingProfile: false, // fixed typo here

  isCheckingAuth: true,

  onlineUsers: [],

  socket: null,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
      get().connectSocket();
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
      get().connectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully");
      return { error: false };
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
      return { error: true };
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
      get().disconnectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true }); // fixed typo here
    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
      if (res && res.data) {
        set({ authUser: res.data });
        toast.success("Profile updated successfully");
      } else {
        toast.error("No response from server");
      }
    } catch (error) {
      console.log("error in update profile:", error);
      toast.error(error?.response?.data?.message || "Profile update failed");
    } finally {
      set({ isUpdatingProfile: false }); // fixed typo here
    }
    console.log("Profile update data:", data);
  },

  connectSocket: () => {
    const { authUser, socket } = get();
    if (!authUser) return;
    // If socket exists but is not connected, disconnect it first
    if (socket && !socket.connected) {
      socket.disconnect();
    }
    if (socket && socket.connected) return;

    const newSocket = io(BASE_URL, {
      query: {
        userId: authUser._id,
      },
    });

    newSocket.connect();
    set({ socket: newSocket });

    // Remove previous listener to avoid duplicates
    newSocket.off("online-users");
    newSocket.on("online-users", (userIds) => {
      console.log("Received online-users event:", userIds); // Debug log
      set({ onlineUsers: userIds });
    });
  },
  disconnectSocket: () => {
    if (get().socket?.connected) get().socket.disconnect();
  },
}));
