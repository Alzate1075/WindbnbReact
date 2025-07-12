export default function Cards({ stays }) {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {" "}
      {/* Contenedor */}
      {stays.map((stay) => (
        <div
          key={stay.id}
          className="bg-white rounded-lg shadow-md p-4 w-72 hover:scale-105 transition-transform duration-300"
        >
          {" "}
          {/* Card */}
          <img
            src={stay.photo}
            alt={stay.title}
            className="w-full h-48 object-cover rounded-md mb-2"
          />
          <h2 className="text-lg font-semibold">{stay.title}</h2>
          <p className="text-gray-600 text-sm">{stay.description}</p>
          <p className="text-rose-500 font-bold mt-2">{stay.price}</p>
        </div>
      ))}
    </div>
  );
}
