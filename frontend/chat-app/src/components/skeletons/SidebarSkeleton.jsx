// import { users } from "lucide-react";

const SidebarSkeleton = () => {
    const skeletonContacts = Array(8).fill(null);
  return (
    <aside className="w-full max-w-sm h-screen bg-slate-500 p-4 border-r animate-pulse space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-gray-300 rounded" />
          <div className="w-6 h-6 bg-gray-300 rounded" />
          <div className="w-6 h-6 bg-gray-300 rounded" />
        </div>
      </div>

      {/* Search bar */}
      <div className="h-10 bg-gray-300 rounded-md" />

      {/* Chat preview list */}
      <div className="space-y-5 overflow-y-auto">
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full" />
            <div className="flex-1 space-y-2">
              <div className="w-3/4 h-4 bg-gray-300 rounded" />
              <div className="w-1/2 h-3 bg-gray-300 rounded" />
            </div>
            <div className="w-4 h-4 bg-gray-300 rounded-full" />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
