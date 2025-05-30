import React from "react";

const MessageSkeleton = () => {
  const skeletonMessages = Array(6).fill(null);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 animate-pulse bg-blend-darken">
      {skeletonMessages.map((_, idx) => (
        <div 
          key={idx}
          className={`flex items-end w-full h-10 ${
            idx % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          {idx % 2 === 0 && (
            <div className="w-10 h-10 bg-gray-700 rounded-full mr-2 flex-shrink-0" />
          )}
          <div
            className={`px-4 py-3 rounded-xl shadow ${
              idx % 2 === 0
                ? "bg-gray-700 rounded-tl-none"
                : "bg-gray-700 rounded-tr-none order-2 ml-2"
            } w-full max-w-xs min-w-[100px] h-6`}
          ></div>
          {idx % 2 !== 0 && (
            <div className="w-10 h-10 bg-gray-500 rounded-full ml-2 flex-shrink-0 order-2" />
          )}
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;
