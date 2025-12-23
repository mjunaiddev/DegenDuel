import Navbar from "@/src/components/navbar";
import Hero from "./(home)/hero";

const Page = () => {
  return (
    <>
      <div className="fixed left-0 right-0">
        <Navbar />
      </div>
      <Hero />
    </>
  );
};

export default Page;
