import React, { useRef, useState } from 'react'
import data from "../assets/data"
const Eventfrom = () => {
    const [dat,setDat]=useState(data);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newEve={
            name:ename.current.value,
            organisedby:eorganised.current.value,
            location:elocation.current.value,
            data:edate.current.value,
            time:etime.current.value,
            description:edescription.current.value,
            price:eprice.current.value,

        };
        data.push(newEve)
        setDat(data);
        ename.current.value=""
        eorganised.current.value=""
        elocation.current.value=""
        edate.current.value=""
        etime.current.value=""
        edescription.current.value=""
        eprice.current.value=""

    }
    const ename=useRef();
    const eorganised=useRef();
    const elocation=useRef();
    const edate=useRef();
    const etime=useRef();
    const edescription=useRef();
    const eprice=useRef();
  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl max-w-3xl w-full m-auto">
    <h2 className="text-2xl font-semibold text-center mb-4">Create Event</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block text-gray-700 font-medium">Event Name</label>
            <input ref={ename} type="text" name="eventName"  className="w-full mt-2 p-2 border rounded-lg" placeholder="Enter event name" />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-medium">Organised By</label>
            <input ref={eorganised} type="text" name="organisedby"  className="w-full mt-2 p-2 border rounded-lg" placeholder="Enter organiser" />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-medium">Location</label>
            <input ref={elocation} type="text" name="location"  className="w-full mt-2 p-2 border rounded-lg" placeholder="Enter location" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
                <label className="block text-gray-700 font-medium">Date</label>
                <input ref={edate} type="date" name="date"  className="w-full mt-2 p-2 border rounded-lg" />
            </div>
            <div>
                <label className="block text-gray-700 font-medium">Time</label>
                <input ref={etime} type="time" name="time"  className="w-full mt-2 p-2 border rounded-lg" />
            </div>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-medium">Description</label>
            <textarea ref={edescription} name="description"  className="w-full mt-2 p-2 border rounded-lg" rows="3" placeholder="Enter event description"></textarea>
        </div>

        {/* <div className="mb-4">
            <label className="block text-gray-700 font-medium">Upload Image</label>
            <input type="file"  className="w-full mt-2 p-2 border rounded-lg" />
        </div> */}

        <div className="mb-4">
            <label className="block text-gray-700 font-medium">Budget Report</label>
            <input type="number" ref={eprice} name="budget" className="w-full mt-2 p-2 border rounded-lg" placeholder="Expected Budget" />
        </div>

        <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Submit</button>
        </div>
    </form>
</div>
  )
}

export default Eventfrom