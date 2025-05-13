export default function Button({ text, type }) {
  if (type === "primary")
    return (
      <button
        type="submit"
        className="w-full bg-[#0D1B4C] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#1A237E] transition"
      >
        {text}
      </button>
    );

  return (
    <button className="bg-blue-600 text-white text-lg px-10 py-2 rounded-xl font-semibold hover:bg-blue-700 transition">
      {text}
    </button>
  );
}
