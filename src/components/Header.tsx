export const Header = () => {
  return (
    <header className="h-14 bg-[#F95230] flex items-center px-4">
      <div className="h-14 flex-shrink-0">
        <img
          src="https://down-bs-vn.img.susercontent.com/vn-11134216-7qukw-lk98fta4ygfcd5_tn.webp"
          alt="Logo"
          className="h-full object-contain"
        />
      </div>
      <div className="flex-1 px-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-[#ccc] rounded-full bg-[#fff] px-4 py-2"
        />
      </div>
      
    </header>
  );
};

