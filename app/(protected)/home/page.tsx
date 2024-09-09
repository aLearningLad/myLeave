// for admin, this will be a dashboard
// for manager & general workers, will be a profile

import SignOutBtn from "@/components/SignOutBtn";

const HomePage = () => {
  return (
    <main>
      <p>Welcome to the homepage</p>
      <SignOutBtn />
    </main>
  );
};

export default HomePage;
