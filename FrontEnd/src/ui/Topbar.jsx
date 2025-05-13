export default function Topbar() {
  return (
    <header class="flex justify-between items-center px-6 py-4 bg-white border-b">
      <div class="text-sm text-gray-600 font-medium">Thursday, May 16, 2024</div>
      <div class="flex items-center gap-2">
        <span class="font-semibold">Pavan.D</span>
        <span class="text-sm text-gray-500">Student</span>
        <img src="/profile.jpg" alt="Profile" class="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
}
