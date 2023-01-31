const Story = ({ img, username }) => {
  return (
    <div className="">
      <img
        src={img}
        alt="avatar user"
        className="rounded-full h-14 w-14 p-[1.5px] border-2 border-orange-600 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
};

export default Story;
