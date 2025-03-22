// src/components/HeroSection.jsx
const HeroSection = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white px-4 py-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Your Destination for <br />
          <span className="italic font-semibold">Eucalyptus Leaves</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Welcome to EucaMart, your premier online source for high-quality eucalyptus leaves.
          We connect customers with trusted vendors, offering a seamless shopping experience
          and a wide selection of eucalyptus varieties.
        </p>
        <button className="mt-6 bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition duration-300">
          Shop Now
        </button>
      </div>
    );
  };
  
  export default HeroSection;
  