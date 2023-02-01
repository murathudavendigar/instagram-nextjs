import { useEffect, useState } from "react";
import { createRandomUser, SUGGESTIONS_USERS } from "../utils/faker";

const Suggestions = () => {
  const [suggestionsUsers, setSuggestionsUsers] = useState([]);
  useEffect(() => {
    Array.from({ length: 5 }).forEach(() => {
      SUGGESTIONS_USERS.push(createRandomUser());
    });

    setSuggestionsUsers(SUGGESTIONS_USERS);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestionsUsers.map((profile, index) => (
        <div key={index} className="flex items-center justify-between mt-3">
          <img
            className="h-10 w-10 border p-[2px] rounded-full"
            src={profile.avatar}
            alt=""
          />
          <div className="flex-1 ml-4 ">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.companyName}
            </h3>
          </div>
          <button className="text-sm text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
