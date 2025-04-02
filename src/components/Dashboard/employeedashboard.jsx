import React from "react";

const Employeedashboard = () => {
  return (
    <div className="bg-black min-h-screen p-10 text-white">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Hello, <span className="text-yellow-400">Sarthak 👋</span></h1>
        <button className="bg-red-600 text-white px-4 py-2 rounded">Log Out</button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-red-400 p-6 rounded-lg text-center">
          <p className="text-4xl font-bold">0</p>
          <p className="text-lg">New Task</p>
        </div>
        <div className="bg-blue-400 p-6 rounded-lg text-center">
          <p className="text-4xl font-bold">0</p>
          <p className="text-lg">New Task</p>
        </div>
        <div className="bg-green-400 p-6 rounded-lg text-center">
          <p className="text-4xl font-bold">0</p>
          <p className="text-lg">New Task</p>
        </div>
        <div className="bg-yellow-400 p-6 rounded-lg text-center">
          <p className="text-4xl font-bold">0</p>
          <p className="text-lg">New Task</p>
        </div>
      </div>

      {/*task assign krne vaali jgah*/ }
<div id="tasklist" className="h-[55vh] overflow-x-auto flex items-center gap-5 flex-nowrap w-full py-5 mt-10">
  <div className="flex-shrink-0 bg-red-400 h-60 w-[300px] rounded-lg">
    <div className='flex justify-between items-center'>
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
     <h4>23 feb 2025</h4>
    </div>
    <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
  <p className="text-sm mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores saepe odio harum quibusdam, omnis iusto eaque dignissimos unde molestiae laborum iure consequatur modi ducimus commodi, dolorem illo, voluptas at veritatis? </p>
  </div>
  <div className="flex-shrink-0 bg-blue-400 h-60 w-[300px] rounded-lg"> <div className='flex justify-between items-center'>
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
     <h4>23 feb 2025</h4>
    </div>
    <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
  <p className="text-sm mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores saepe odio harum quibusdam, omnis iusto eaque dignissimos unde molestiae laborum iure consequatur modi ducimus commodi, dolorem illo, voluptas at veritatis? </p></div>
  <div className="flex-shrink-0 bg-green-400 h-60 w-[300px] rounded-lg"> <div className='flex justify-between items-center'>
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
     <h4>23 feb 2025</h4>
    </div>
    <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
  <p className="text-sm mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores saepe odio harum quibusdam, omnis iusto eaque dignissimos unde molestiae laborum iure consequatur modi ducimus commodi, dolorem illo, voluptas at veritatis? </p></div>
  <div className="flex-shrink-0 bg-yellow-400 h-60 w-[300px] rounded-lg"> <div className='flex justify-between items-center'>
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
     <h4>23 feb 2025</h4>
    </div>
    <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
  <p className="text-sm mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores saepe odio harum quibusdam, omnis iusto eaque dignissimos unde molestiae laborum iure consequatur modi ducimus commodi, dolorem illo, voluptas at veritatis? </p></div>
 
</div>
</div>

  );
};

export default Employeedashboard;
