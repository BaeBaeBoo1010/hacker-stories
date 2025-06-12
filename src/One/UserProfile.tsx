import { useState } from "react";

export const UserProfile = () => {
    const [isFollowing, setIsFollowing] = useState(false);
    
    const handleFollow = () => {
        setIsFollowing(!isFollowing);
        console.log(isFollowing ? "Unfollowed" : "Followed");
    };

    const handleMessage = () => {
        console.log("Message button clicked");
    };
    return (
    
    <div className="rouded-lg flex w-[36rem] bg-white p-12">
      <img
        src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/453034088_912188480955573_6482959923390532264_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=24IStNSKL4YQ7kNvwEj-Ml3&_nc_oc=Adn1-54KGXlG7K_S0_t6FrMO477qN6gR0BbmInrQPEbHg4Tw67ifF0CA7QKVEC1a-NQ&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=SRVaRExT8CG0yJE31ovtWQ&oh=00_AfMzOT2VLW_bN6xJ_ijHa42BN7UvcMC094O3F6V-Pj0Xjw&oe=684F4E3A"
        alt="User Avatar"
        className="mr-6 h-24 w-24 rounded-full border-4 border-[#E6EFFE]"
      ></img>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800">Nguyen Van A</h1>
        <p className="mt-2 text-gray-600">
          Software Engineer at{" "}
          <span className="text-blue-500">Tech Company</span>
        </p>
        <p className="mt-1 text-gray-500">
          Location: Ho Chi Minh City, Vietnam
        </p>
        <p className="mt-1 text-gray-500">Joined: January 2020</p>
        <div className="mt-4">
          <button
            className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white transition duration-150 hover:bg-blue-600"
            onClick={handleFollow}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </button>
          <button
            className="ml-4 cursor-pointer rounded bg-gray-200 px-4 py-2 text-gray-800 transition duration-150 hover:bg-gray-300"
            onClick={handleMessage}>
            Message
          </button>
        </div>
      </div>
    </div>
  );
};
