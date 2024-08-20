import React, { useEffect, useState } from 'react'

const Random = () => {
   
    const [gif,setGif]=useState<string>("");
    const API_KEY:string="A7ABFXYiWkBa2Nul3cpF0GPMB1HLDatx";
    async function fetchData(){
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const res= await fetch(url);
        const res2=await res.json();
        const imgSorce=res2.data.images.downsized_large.url;
        setGif(imgSorce);
        console.log(imgSorce);
    }
    useEffect(()=>{
        fetchData();
    },[])
    function handleClick(){

    }
  return (
    <div className='random'>
      <h2 className="gif-heading">Random Gif</h2>
      <img src={gif} alt="random-gif"/>
        <button onClick={handleClick} className='random-btn'>
            Generate
        </button>
    </div>
  )
}

export default Random
