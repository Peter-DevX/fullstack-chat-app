const AuthImagePattern = ({ title, subtitle }) => {
  // Duller, pastel-like gradients for creative but subtle look
  const gradientColors = [
    "rgba(244,63,94,0.25), rgba(245,158,66,0.25), rgba(251,191,36,0.25)", // red-orange-yellow
    "rgba(16,185,129,0.22), rgba(6,182,212,0.22), rgba(99,102,241,0.22)", // green-cyan-indigo
    "rgba(162,28,175,0.20), rgba(244,114,182,0.20), rgba(96,165,250,0.20)", // purple-pink-blue
    "rgba(251,191,36,0.18), rgba(244,114,182,0.18), rgba(162,28,175,0.18)", // yellow-pink-purple
    "rgba(99,102,241,0.18), rgba(6,182,212,0.18), rgba(16,185,129,0.18)", // indigo-cyan-green
    "rgba(245,158,66,0.18), rgba(244,63,94,0.18), rgba(162,28,175,0.18)", // orange-red-purple
    "rgba(52,211,153,0.18), rgba(250,204,21,0.18), rgba(248,113,113,0.18)", // teal-yellow-red
  ];
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 min-h-screen">
      <div className="max-w-md text-center">
        {/* Animated grid with mind-blowing effect and fade in/out */}
        <div className="relative w-64 h-64 mx-auto mb-8 fade-in-out">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-16 h-16 rounded-2xl shadow-xl animate-float${i}`}
              style={{
                left: `${(i % 3) * 5.5}rem`,
                top: `${Math.floor(i / 3) * 5.5}rem`,
                zIndex: 10 - i,
                filter: "blur(0.5px) drop-shadow(0 0 8px #a5b4fc)",
                background: `linear-gradient(135deg, ${
                  gradientColors[i % gradientColors.length]
                })`,
                border: "2px solid rgba(255,255,255,0.10)",
              }}
            />
          ))}
          {/* Add a swirling animated ring */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-56 h-56 border-4 border-dashed border-primary rounded-full animate-spin-slow opacity-20"></div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4 animate-fade-in text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-yellow-300 drop-shadow-md opacity-80">
          {title}
        </h2>
        <h2 className="text-base-content animate-fade-in delay-200 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 drop-shadow-sm opacity-80">
          {subtitle}
        </h2>
      </div>
      {/* Custom keyframes for floating, swirling, and fade in/out */}
      <style>{`
        @keyframes float0 { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(-20px) scale(1.1) rotate(3deg); } 100% { transform: translateY(0) scale(1); } }
        @keyframes float1 { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(15px) scale(1.05) rotate(-2deg); } 100% { transform: translateY(0) scale(1); } }
        @keyframes float2 { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(-10px) scale(1.08) rotate(2deg); } 100% { transform: translateY(0) scale(1); } }
        @keyframes float3 { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(10px) scale(1.04) rotate(-1deg); } 100% { transform: translateY(0) scale(1); } }
        @keyframes float4 { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(-25px) scale(1.12) rotate(4deg); } 100% { transform: translateY(0) scale(1); } }
        @keyframes float5 { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(20px) scale(1.06) rotate(-3deg); } 100% { transform: translateY(0) scale(1); } }
        @keyframes float6 { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(-15px) scale(1.09) rotate(1deg); } 100% { transform: translateY(0) scale(1); } }
        @keyframes float7 { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(18px) scale(1.07) rotate(-2deg); } 100% { transform: translateY(0) scale(1); } }
        @keyframes float8 { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(-12px) scale(1.1) rotate(2deg); } 100% { transform: translateY(0) scale(1); } }
        .animate-float0 { animation: float0 3.2s ease-in-out infinite; }
        .animate-float1 { animation: float1 2.8s ease-in-out infinite; }
        .animate-float2 { animation: float2 3.5s ease-in-out infinite; }
        .animate-float3 { animation: float3 2.9s ease-in-out infinite; }
        .animate-float4 { animation: float4 3.7s ease-in-out infinite; }
        .animate-float5 { animation: float5 3.1s ease-in-out infinite; }
        .animate-float6 { animation: float6 3.3s ease-in-out infinite; }
        .animate-float7 { animation: float7 2.7s ease-in-out infinite; }
        .animate-float8 { animation: float8 3.6s ease-in-out infinite; }
        @keyframes spin-slow { 100% { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: none;} }
        .animate-fade-in { animation: fade-in 1s cubic-bezier(.4,0,.2,1) forwards; }
        .delay-200 { animation-delay: 0.2s; }
        @keyframes fadeInOut { 0%,100% { opacity: 0; } 10%,90% { opacity: 1; } }
        .fade-in-out { animation: fadeInOut 8s linear infinite; }
      `}</style>
    </div>
  );
};

export default AuthImagePattern;
