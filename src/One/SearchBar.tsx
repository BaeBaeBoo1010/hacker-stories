import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="flex items-center w-[656px] h-16 bg-white rounded-full px-6 shadow-md">
      <Search className="text-gray-400 mr-4" size={20} />
      <input
        type="text"
        placeholder="Bạn tìm gì..."
        className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
      />
    </div>
  );
};
