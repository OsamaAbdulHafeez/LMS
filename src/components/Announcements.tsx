import Image from "next/image";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-Sky rounded-md p-4">
            <div className="flex justify-between items-center">
                <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
                <span className="text-xs text-gray-400 bg-white rounded-md p-1">01-01-2025</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a rem beatae?</p>
        </div>
        <div className="bg-Purple rounded-md p-4">
            <div className="flex justify-between items-center">
                <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
                <span className="text-xs text-gray-400 bg-white rounded-md p-1">01-01-2025</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a rem beatae?</p>
        </div>
        <div className="bg-Yellow rounded-md p-4">
            <div className="flex justify-between items-center">
                <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
                <span className="text-xs text-gray-400 bg-white rounded-md p-1">01-01-2025</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a rem beatae?</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
