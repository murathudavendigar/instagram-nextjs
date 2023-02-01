import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

//! BROWSER
const signInPage = ({ providers }) => {
  return (
    <>
      <Header />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
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
