import { Send } from "lucide-react";
import { THEME } from "../constants";
import { useThemeStore } from "../store/useThemeStore";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", time: "12:00 PM", isSent: false },
  {
    id: 2,
    content: "I'm doing great! Just working on some new features.",
    time: "12:00 PM",
    isSent: true,
  },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="h-full container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
        {/* Theme Selection */}
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Theme</h2>
          <p className="text-sm text-base-content/70">
            Choose a theme for your chat interface
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {THEME.map((t) => (
            <button
              key={t}
              className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors ${
                theme == t ? "bg-base-200" : "hover:bg-base-200/50"
              }`}
              onClick={() => setTheme(t)}
            >
              <div
                className="relative h-8 w-full rounded-md overflow-hidden"
                data-theme={t}
              >
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div className="rounded bg-primary"></div>
                  <div className="rounded bg-secondary"></div>
                  <div className="rounded bg-accent"></div>
                  <div className="rounded bg-neutral"></div>
                </div>
              </div>
              <span className="text-[11px] font-medium truncate w-full text-center">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Chat Preview */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-3">Preview</h3>
          <div
            className="rounded-xl overflow-hidden shadow border border-base-300 bg-base-100 max-w-md mx-auto"
            data-theme={theme}
          >
            {/* Chat Header */}
            <div className="flex items-center gap-3 p-4 border-b border-base-300 bg-base-200">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold">
                J
              </div>
              <div>
                <p className="font-semibold text-sm">John Doe</p>
                <p className="text-xs text-success">Online</p>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 h-64 overflow-y-auto space-y-3">
              {PREVIEW_MESSAGES.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col max-w-[80%] text-sm ${
                    msg.isSent ? "ml-auto items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-xl ${
                      msg.isSent
                        ? "bg-primary text-primary-content"
                        : "bg-base-200 text-base-content"
                    }`}
                  >
                    {msg.content}
                  </div>
                  <span className="text-xs text-base-content/50 mt-0.5">
                    {msg.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="flex items-center gap-2 p-3 border-t border-base-300 bg-base-200">
              <input
                type="text"
                placeholder="This is a preview"
                className="flex-1 input input-sm input-bordered rounded-lg"
                disabled
              />
              <button className="btn btn-sm btn-primary px-3">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
