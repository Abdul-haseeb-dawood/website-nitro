export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-10">
      <div className="container mx-auto px-4  w-[70rem]">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">

          <div className="relative h-64  bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/picture/new.png')" }}>

            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">About Our Energy Drinks</h1>
            </div>
          </div>

          <div className="p-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-7 font-semibold">
              At NITRO, we are dedicated to fueling your ambitions with high-quality, refreshing energy drinks.
              Our mission is to provide you with the energy boost you need to conquer your day, whether you are at the gym,
              the office, or on an adventure.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Ingredients</h2>
            <p className="text-gray-700 mb-7 font-semibold">
              We use only the finest, carefully selected ingredients to create our energy drinks. Our products are formulated
              to offer a perfect balance of taste and energy without any compromise.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-700 font-semibold">
              With NITRO, you get a burst of energy that keeps you going without the crash. Our drinks are crafted for
              the health-conscious, using natural flavors and responsibly sourced ingredients.
            </p>
          </div>


        </div>
      </div>
    </div>
  );
}
