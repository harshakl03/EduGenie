export default function Field ({type, placeholder, text}){
    return <> <label className="block mb-2 text-[#1A237E] font-medium">{text}</label>
          <input
            type={type}
            placeholder={placeholder}
            className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          </>
}