export default function Helper() {
  return (
    <div className="bg-gray-50 p-4 rounded-md max-w-sm">
      {/* Shopping Help Section */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
          <span className="text-black text-xl"></span>
        </div>

        <div>
          <p className="text-sm text-gray-700 font-medium">
            Need shopping help?
          </p>
          <a
            href="#"
            className="text-blue-600 text-sm font-semibold hover:underline"
          >
            Ask a Specialist
          </a>
        </div>
      </div>

      {/* Visit Store Section */}
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
          <span className="text-black text-xl"></span>
        </div>
        <div>
          <p className="text-sm text-gray-700 font-medium">
            Visit an Apple Store
          </p>
          <a
            href="#"
            className="text-blue-600 text-sm font-semibold hover:underline"
          >
            Find one near you ›
          </a>
        </div>
      </div>
    </div>
  );
}
