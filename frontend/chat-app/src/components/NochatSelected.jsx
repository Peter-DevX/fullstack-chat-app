import { MessageSquare, SmileIcon } from "lucide-react";

const NochatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50 min-h-[400px]">
      <div className="max-w-md mx-auto text-center space-y-6 flex flex-col items-center justify-center h-full">
        {/* Icons display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-bounce">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>

        {/* welcome text */}
        <h2 className="text-2xl font-bold">Welcome to DevX ChatApp</h2>
        <p className="text-base-content/60">
          Select a conversation from the sidebar to enter Dev mode
        </p>
      </div>
    </div>
  );
};

export default NochatSelected;
