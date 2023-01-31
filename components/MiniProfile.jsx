const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://pbs.twimg.com/profile_images/1589564512599932929/JuGsRJNz_400x400.jpg"
        className="w-16 h-16 rounded-full p-[2px]"
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">murathoncu</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign out</button>
    </div>
  );
};

export default MiniProfile;
