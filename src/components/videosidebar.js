import { U_TUBE_VIDEO_API } from "./constants"
import Videosidebarcard from "./videosidebarcard"
import { Link } from "react-router-dom"
import { useEffect ,useState} from "react"

const Videosidebar=()=>{
    const [videos,setvideos]=useState([])
    useEffect(()=>{
getVideos()
    },[])
    async function getVideos(){
        const data=await fetch(U_TUBE_VIDEO_API)
        const json=await data.json()
        //console.log(json.items)
        setvideos(json.items)
    }
    return(
        <div>
            videos
            {videos.map((video)=>(
           <Link key={video.id} to={"watch?v="+video.id}> 
            <Videosidebarcard  info={video}/>
            </Link>
              ))}
        </div>
    )
}
export default Videosidebar