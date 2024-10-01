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
    <>
        <h1 className='text-sky-400'>Welcome to Halo Waypoint</h1>
        <form onSubmit={(e)=>handleAdd(e)}>
            <input type='email' name='title' placeholder='youremail@example.com' className='mb-2.5' />
            <button>Submit</button>
        </form>

    </>
  )
}
