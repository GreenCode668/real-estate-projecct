export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover the perfect property with our comprehensive real estate listings
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
              Browse Properties
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition">
              List Your Property
            </button>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                placeholder="Enter location..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option>All Types</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Condo</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option>Any Price</option>
                <option>$0 - $500k</option>
                <option>$500k - $1M</option>
                <option>$1M+</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">
              Search Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}