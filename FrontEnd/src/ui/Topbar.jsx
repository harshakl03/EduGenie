export default function Topbar() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200 shadow-sm flex justify-between items-center px-4 py-3 transition-all duration-300">
      <div className="text-lg text-gray-700 font-medium">{today}</div>

      <UserInfo name="Pavan.D" role="Student" imgSrc="/image.png" />
    </header>
  );
}
<<<<<<< HEAD

// Modular UserInfo component
function UserInfo({ name, role, imgSrc }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-end text-right">
        <span className="font-semibold text-base">{name}</span>
        <span className="text-sm text-gray-500">{role}</span>
      </div>
      <img
        src={imgSrc}
        alt="Profile"
        className="w-10 h-10 rounded-full object-cover border border-gray-300"
      />
    </div>
  );
}
=======
>>>>>>> origin/main
