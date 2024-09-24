const Tables = ({
  wantToCookItems,
  addIntoCurrentlyCooking,
  currentlyCookingItems,
}) => {
  return (
    <div className="col-span-1 md:col-span-4 border border-gray-300 shadow-lg p-2 md:p-4 lg:p-6 rounded-lg w-full bg-white">
      <div className="mb-8">
        <h1 className="text-xl md:text-2xl text-center text-black font-semibold">
          Want to Cook: {wantToCookItems.length}
        </h1>
        <hr className="my-4 border-gray-300" />

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-900">
                <th className="px-2 md:px-4 py-2 text-left border-b text-sm md:text-base">
                  Name
                </th>
                <th className="px-2 md:px-4 py-2 text-left border-b text-sm md:text-base">
                  Time
                </th>
                <th className="px-2 md:px-4 py-2 text-left border-b text-sm md:text-base">
                  Calories
                </th>
                <th className="px-2 md:px-4 py-2 text-left border-b text-sm md:text-base">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {wantToCookItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-100">
                  <td className="px-2 md:px-4 py-2 border-b text-sm md:text-base">
                    {item.recipe_name}
                  </td>
                  <td className="px-2 md:px-4 py-2 border-b text-sm md:text-base">
                    {item.preparing_time}
                  </td>
                  <td className="px-2 md:px-4 py-2 border-b text-sm md:text-base">
                    {item.calories}
                  </td>
                  <td className="px-2 md:px-4 py-2 border-b">
                    <button
                      onClick={() => addIntoCurrentlyCooking(item)}
                      className="bg-blue-500 text-white font-semibold text-sm md:text-base py-1 px-3 md:px-4 rounded hover:bg-blue-600 transition duration-200">
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h1 className="text-xl md:text-2xl text-center text-black font-semibold">
          Currently cooking: {currentlyCookingItems.length}
        </h1>
        <hr className="my-4 border-gray-300" />

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-900">
                <th className="px-2 md:px-4 py-2 text-left border-b text-sm md:text-base">
                  Name
                </th>
                <th className="px-2 md:px-4 py-2 text-left border-b text-sm md:text-base">
                  Time
                </th>
                <th className="px-2 md:px-4 py-2 text-left border-b text-sm md:text-base">
                  Calories
                </th>
              </tr>
            </thead>
            <tbody>
              {currentlyCookingItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-100">
                  <td className="px-2 md:px-4 py-2 border-b text-sm md:text-base">
                    {item.recipe_name}
                  </td>
                  <td className="px-2 md:px-4 py-2 border-b text-sm md:text-base">
                    {item.preparing_time}
                  </td>
                  <td className="px-2 md:px-4 py-2 border-b text-sm md:text-base">
                    {item.calories}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tables;
