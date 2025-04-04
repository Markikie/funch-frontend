import Content from "@/components/Content";
import Hero from "@/components/Hero";


const HomePage = () => {
  return (
    <div>
      <div className="absolute flex-col justify-center items-center w-full h-[500px]">
        <h1 className="text-3xl font-bold text-center mt-10 text-black">
          Welcome to the Hotel Booking App
        </h1>
        <p className="text-center mt-4 text-white">
          Book your stay with us and enjoy a comfortable experience.
        </p>
      </div>
      <Hero />
      <Content />
    </div>
  );
};
export default HomePage;
