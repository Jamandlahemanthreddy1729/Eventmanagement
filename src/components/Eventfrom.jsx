import React from 'react'

const Eventfrom = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl max-w-3xl w-full m-auto">
    <h2 className="text-2xl font-semibold text-center mb-4">Create Event</h2>
    <form onSubmit={(e)=>{e.preventDefault()}}>
        <div className="mb-4">
            <label className="block text-gray-700 font-medium">Event Name</label>
            <input type="text" name="eventName"  className="w-full mt-2 p-2 border rounded-lg" placeholder="Enter event name" />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-medium">Organised By</label>
            <input type="text" name="organisedby"  className="w-full mt-2 p-2 border rounded-lg" placeholder="Enter organiser" />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-medium">Location</label>
            <input type="text" name="location"  className="w-full mt-2 p-2 border rounded-lg" placeholder="Enter location" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
                <label className="block text-gray-700 font-medium">Date</label>
                <input type="date" name="date"  className="w-full mt-2 p-2 border rounded-lg" />
            </div>
            <div>
                <label className="block text-gray-700 font-medium">Time</label>
                <input type="time" name="time"  className="w-full mt-2 p-2 border rounded-lg" />
            </div>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-medium">Description</label>
            <textarea name="description"  className="w-full mt-2 p-2 border rounded-lg" rows="3" placeholder="Enter event description"></textarea>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-medium">Upload Image</label>
            <input type="file"  className="w-full mt-2 p-2 border rounded-lg" />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-medium">Budget Report</label>
            <input type="number" name="budget" className="w-full mt-2 p-2 border rounded-lg" placeholder="Expected Budget" />
        </div>

        <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Submit</button>
        </div>
    </form>
</div>
  )
}

export default Eventfrom