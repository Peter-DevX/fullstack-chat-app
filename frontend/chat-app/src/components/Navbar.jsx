import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="w-full bg-base-100 shadow-md py-3 px-6 flex items-center justify-between sticky top-0 z-50">
      {/* Brand/Logo */}
      <div className="flex items-center gap-2">
        <Link to="/">
          <span className="text-xl font-extrabold text-primary tracking-tight font-mono select-none">
            DevX ChatApp
          </span>
        </Link>
      </div>

      {/* Centered nav (optional for future nav links) */}
      <div className="flex-1 flex justify-center">
        {/* Reserved for future nav links or search */}
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-2">
        {/* Settings always visible */}
        <Link
          to="/settings"
          className="btn btn-sm btn-ghost gap-2 rounded-lg hover:bg-primary/10 transition-colors"
        >
          <Settings className="size-4" />
          <span className="hidden sm:inline">Settings</span>
        </Link>

        {/* Show profile and logout if logged in, else show login/signup */}
        {authUser ? (
          <>
            <Link
              to="/profile"
              className="btn btn-sm btn-ghost gap-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              <User className="size-5" />
              <span className="hidden sm:inline">Profile</span>
            </Link>
            <button
              className="btn btn-sm btn-outline btn-primary gap-2 rounded-lg hover:bg-primary/10 transition-colors"
              onClick={logout}
            >
              <LogOut className="size-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-sm btn-ghost text-base font-medium rounded-lg hover:bg-primary/10 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="btn btn-sm btn-primary text-base font-medium rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
