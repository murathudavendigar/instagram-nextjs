import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { createRandomUser, USERS } from "../utils/faker";
import Story from "./Story";

const Stories = () => {
  const [randomUsers, setRandomUsers] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    Array.from({ length: 20 }).forEach(() => {
      USERS.push(createRandomUser());
      if (USERS.length > 20) USERS.shift();
    });

    setRandomUsers(USERS);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white text-black dark:bg-black dark:text-white mt-8 border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black dark:scrollbar-thumb-white">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
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
