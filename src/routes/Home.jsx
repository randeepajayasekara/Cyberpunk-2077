import React from 'react'
import {database} from "../firebase";
import {addDoc, collection, doc} from 'firebase/firestore';

export default function Home() {

    const handleAdd = (e) => {
        e.preventDefault()

        const val = doc(database,"newsletter",'data')
        const collectinVal = collection(val,"email")
        addDoc(collectinVal,{title:e.target.title.value})
        alert(":)")
    }

  return (
    <div>
        <h1 className=" text-5xl font-bold bg-gradient-to-r from-zinc-600 via-slate-500 to-green-400 text-transparent bg-clip-text text-center p-8">Welcome to Halo Waypoint</h1>
        <form onSubmit={(e)=>handleAdd(e)} className='justify-center'>
            <input classname="flex items-center" type='email' name='title' placeholder='email@example.com'/> <br/>
            <button className="bg-sky-500 hover:bg-sky-700 rounded-full py-6 px-8 text-white transition ease-in-out delay-150 hover:-translate-y-1">Submit</button>
        </form>

    </div>
  )
}
