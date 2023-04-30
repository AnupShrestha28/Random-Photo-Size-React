import React, { useEffect, useState } from 'react'

export default function App() {

  const [data, setData] = useState("");

 useEffect(() => {
  const storedData = localStorage.getItem("myData");
  if(storedData){
    setData(storedData);
  }
 }, [])

 const handleChange = (e) =>{
  const newData = e.target.value;
  setData(newData);
  localStorage.setItem("myData", newData);
 }

  return (
    <div>
      <input type='text' placeholder='Enter Something here' value={data} onChange={handleChange} />
      <p>Saved Data : {data}</p>
    </div>
  )
}
