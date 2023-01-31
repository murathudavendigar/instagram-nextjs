import { useEffect, useState } from "react";
import { createRandomUser, USERS } from "../utils/faker";
import Story from "./Story";

const Stories = () => {
  const [randomUsers, setRandomUsers] = useState([]);
  useEffect(() => {
    Array.from({ length: 20 }).forEach(() => {
      USERS.push(createRandomUser());
    });

    setRandomUsers(USERS);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {randomUsers.map((profile) => (
        <Story
          key={profile.userId}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
