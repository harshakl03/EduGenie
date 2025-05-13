export default function Sidebar() {
  return (
    <div class="w-64 bg-white-400 border-r p-4 flex flex-col">
      <div class="text-2xl font-bold mb-8">EduGenie</div>
      <nav class="space-y-4">
        <a href="#" class="flex items-center gap-2 text-blue-700 font-medium"> Dashboard</a>
        <a href="#" class="flex items-center gap-2"> Profile</a>
        <a href="#" class="flex items-center gap-2"> Chat Bot</a>
      </nav>
    </div>
  );
}
