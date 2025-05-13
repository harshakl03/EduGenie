export default function Button({text}) {
  return (
    <button className="bg-blue-600 text-white text-lg px-10 py-2 rounded-xl font-semibold hover:bg-blue-700 transition">  
    {text}
    </button>
  );
}