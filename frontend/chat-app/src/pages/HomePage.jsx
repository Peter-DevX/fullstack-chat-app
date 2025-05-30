// import React from "react";

// const chats = [
//   {
//     id: 1,
//     name: "Copilot Dev",
//     lastMessage: "Here's your code review!",
//     time: "09:32",
//     unread: 2,
//     avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=dev1",
//   },
//   {
//     id: 2,
//     name: "React Team",
//     lastMessage: "Hooks update released.",
//     time: "08:15",
//     unread: 0,
//     avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=react",
//   },
//   {
//     id: 3,
//     name: "Designers",
//     lastMessage: "Check the new Figma file!",
//     time: "Yesterday",
//     unread: 1,
//     avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=design",
//   },
// ];

// const messages = [
//   {
//     id: 1,
//     fromMe: false,
//     text: "Hey! Ready for the code review?",
//     time: "09:30",
//   },
//   { id: 2, fromMe: true, text: "Absolutely! Send it over 🚀", time: "09:31" },
//   {
//     id: 3,
//     fromMe: false,
//     text: "Check your inbox. Also, try the new feature branch.",
//     time: "09:32",
//   },
//   {
//     id: 4,
//     fromMe: true,
//     text: "On it! Love the new UI tweaks btw.",
//     time: "09:33",
//   },
// ];

// const HomePage = () => {
//   return (
//     <div className="h-[calc(100vh-56px)] flex bg-base-200">
//       {/* Sidebar */}
//       <aside className="w-80 bg-base-100 border-r border-base-300 flex flex-col">
//         <div className="p-4 border-b border-base-300 flex items-center gap-2">
//           <span className="text-xl font-bold text-primary tracking-tight">
//             Chats
//           </span>
//           <span className="ml-auto text-xs text-base-content/60">
//             {chats.length} groups
//           </span>
//         </div>
//         <ul className="flex-1 overflow-y-auto">
//           {chats.map((chat) => (
//             <li
//               key={chat.id}
//               className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-primary/10 transition group"
//             >
//               <img
//                 src={chat.avatar}
//                 alt={chat.name}
//                 className="w-10 h-10 rounded-full border border-base-300 shadow-sm"
//               />
//               <div className="flex-1 min-w-0">
//                 <div className="flex items-center justify-between">
//                   <span className="font-semibold text-base-content truncate group-hover:text-primary">
//                     {chat.name}
//                   </span>
//                   <span className="text-xs text-base-content/50 ml-2">
//                     {chat.time}
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm text-base-content/70 truncate">
//                     {chat.lastMessage}
//                   </span>
//                   {chat.unread > 0 && (
//                     <span className="ml-2 bg-primary text-white rounded-full px-2 py-0.5 text-xs font-bold shadow animate-pulse">
//                       {chat.unread}
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <div className="p-4 border-t border-base-300 text-xs text-base-content/50 text-center">
//           <span>Built for devs • {new Date().getFullYear()}</span>
//         </div>
//       </aside>
//       {/* Chat area */}
//       <main className="flex-1 flex flex-col bg-gradient-to-br from-base-100 via-base-200 to-base-300 relative">
//         {/* Chat header */}
//         <div className="h-16 px-6 flex items-center border-b border-base-300 bg-base-100/80 backdrop-blur sticky top-0 z-10">
//           <img
//             src={chats[0].avatar}
//             alt={chats[0].name}
//             className="w-10 h-10 rounded-full border border-base-300 shadow-sm mr-3"
//           />
//           <div>
//             <div className="font-semibold text-base-content text-lg">
//               {chats[0].name}
//             </div>
//             <div className="text-xs text-base-content/60">
//               online • dev mode
//             </div>
//           </div>
//         </div>
//         {/* Messages */}
//         <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
//           {messages.map((msg) => (
//             <div
//               key={msg.id}
//               className={`flex ${msg.fromMe ? "justify-end" : "justify-start"}`}
//             >
//               <div
//                 className={`max-w-xs px-4 py-2 rounded-2xl shadow-md text-sm font-medium ${
//                   msg.fromMe
//                     ? "bg-primary text-white rounded-br-sm animate-slide-in-right"
//                     : "bg-base-100 text-base-content rounded-bl-sm animate-slide-in-left"
//                 }`}
//                 style={{
//                   boxShadow: msg.fromMe
//                     ? "0 2px 12px 0 rgba(99,102,241,0.10)"
//                     : "0 2px 12px 0 rgba(0,0,0,0.04)",
//                 }}
//               >
//                 {msg.text}
//                 <span className="block text-xs text-base-content/50 mt-1 text-right">
//                   {msg.time}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* Message input */}
//         <form className="flex items-center gap-3 px-6 py-4 border-t border-base-300 bg-base-100/90 backdrop-blur sticky bottom-0 z-10">
//           <input
//             type="text"
//             className="flex-1 input input-bordered rounded-full bg-base-200 focus:bg-white focus:border-primary transition"
//             placeholder="Type a message..."
//             autoComplete="off"
//           />
//           <button
//             type="submit"
//             className="btn btn-primary rounded-full shadow-md hover:scale-105 transition-transform duration-150"
//           >
//             <span className="font-bold">Send</span>
//           </button>
//         </form>
//         {/* 3D/slide keyframes */}
//         <style>{`
//           @keyframes slideInLeft { from { opacity: 0; transform: translateX(-32px) scale(0.98); } to { opacity: 1; transform: none; } }
//           .animate-slide-in-left { animation: slideInLeft 0.7s cubic-bezier(.4,0,.2,1) both; }
//           @keyframes slideInRight { from { opacity: 0; transform: translateX(32px) scale(0.98); } to { opacity: 1; transform: none; } }
//           .animate-slide-in-right { animation: slideInRight 0.7s cubic-bezier(.4,0,.2,1) both; }
//         `}</style>
//       </main>
//     </div>
//   );
// };

// export default HomePage;

import ChatContainer from "../components/ChatContainer";
import NochatSelected from "../components/NochatSelected";
import Sidebar from "../components/Sidebar";
import { useChatStore } from "../store/useChatStore.js";

const HomePage = () => {
  const { selectedUser } = useChatStore(); // Call the hook as a function
  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 flex rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <Sidebar />

          {!selectedUser ? <NochatSelected /> : <ChatContainer />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
