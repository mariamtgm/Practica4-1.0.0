import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState<string>("Loading")

  useEffect(()=>{
    getResponse()
  },[])

  const getResponse = async () => {
    try {
      const response = await axios.get("http://localhost:3002/")
      setStatus(response.data.message)
    } catch (error) {
      setStatus("error")
    }
  }

  return(
    <>
      <h1>{status}</h1>
    </>
  )
}
