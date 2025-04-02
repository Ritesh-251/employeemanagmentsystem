import React from 'react'
import Headers from '../../../others/Headers'
{/*yaad se create member add krne ka option through backend in the admin panel */}
const Admindashboard = () => {
    function submitHandler(e){
        

        e.preventDefault();}
  return (
    <>
    <Headers/>
    <div className="bg-black min-h-screen flex justify-center items-center text-white">
        
      <div className="bg-gray-900 p-8 rounded-lg w-1/3 shadow-lg border border-gray-700">
        <h2 className="text-2xl font-bold mb-6">Create Task</h2>
        <form onSubmit={(e)=>{submitHandler(e)}}>
          <label className="block mb-2">Task Title</label>
          <input type="text" placeholder="Make a UI design" className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded" />
          
          <label className="block mb-2">Description</label>
          <textarea placeholder="Detailed description of task (Max 500 words)" className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded" rows="3"></textarea>
          
          <label className="block mb-2">Date</label>
          <input type="date" className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded" />
          
          <label className="block mb-2">Assign To</label>
          <input type="text" className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded" />
          
          <label className="block mb-2">Category</label>
          <input type="text" placeholder="Design, Development, etc..." className="w-full p-2 mb-6 bg-gray-800 border border-gray-600 rounded" />
          
          <button className="w-full bg-blue-600 p-3 rounded-lg text-white hover:bg-blue-700">Create Task</button>
        </form>
      </div>
    </div>
    </>

  )
}

export default Admindashboard
