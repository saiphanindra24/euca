// src/components/HeroSection.jsx
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-6 py-12 text-center h-[500px]">
      <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
        Your Destination for <br />
        <span className="italic font-semibold text-black-600">
          Eucalyptus Leaves
        </span>
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
        Welcome to <span className="font-semibold">EucaMart</span>, your premier
        online source for high-quality eucalyptus leaves. We connect customers
        with trusted vendors, offering a seamless shopping experience and a
        wide selection of eucalyptus varieties.
      </p>
      <button className="mt-8 bg-black text-white py-3 px-8 text-lg rounded-md hover:bg-gray-800 transition duration-300 shadow-lg">
        Shop Now
      </button>
    </div>
  );
};

export default HeroSection;
