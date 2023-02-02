import { getProviders, signIn } from "next-auth/react";
import { useTheme } from "next-themes";
import Header from "../../components/Header";

//! BROWSER
const signInPage = ({ providers }) => {
  const { theme } = useTheme();
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen -mt-[68px] py-2 px-14 text-center bg-white text-black dark:bg-black dark:text-white">
        <img
          className="w-80"
          src={`${
            theme === "dark"
              ? "https://marka-logo.com/wp-content/uploads/2020/04/Instagram-Logo.png"
              : "https://i0.wp.com/www.christinasandsengen.com/wp-content/uploads/2014/09/instagram-logo-black-on-white.png"
          }`}
          alt=""
        />
        <p className="font-medium italic">
          This is not a Real app, it is built for education purposes only
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

//! SSR
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signInPage;
