import { useEffect, useState } from "react"
import { U_TUBE_VIDEO_API } from "./constants"
import Videocard from "./videocard"
import { Link } from "react-router-dom"



const Videocontainer=()=>{
    const [videos,setvideos]=useState([])
    useEffect(()=>{
getVideos()
    },[])
    async function getVideos(){
        const data=await fetch(U_TUBE_VIDEO_API)
        const json=await data.json()
        
        setvideos(json.items)
    }
    return(
        <div  className="flex flex-wrap">
            {videos.map((video)=>(
           <Link key={video.id} to={"watch?v="+video.id}> 
            <Videocard  info={video}/>
            </Link>
              ))}
          
        </div>
    )
}
export default Videocontainer