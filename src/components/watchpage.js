import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../utelis/AppSlice"
import { useSearchParams } from "react-router-dom"
import CommentContainer from "./cmtcontainer"
import Videosidebar from "./videosidebar"

const WatchPage=()=>{
    const [searchparams]=useSearchParams()
    //console.log(searchparams.get("v"))
    const dispatch=useDispatch()
    useEffect(()=>{

        dispatch(closeMenu())
    },[])
    return(
        <div className="flex" >
<div className="flex flex-col">
        <div className="px-5">
            <iframe width="1000"
             height="500" 
             src={"https://www.youtube.com/embed/"+searchparams.get("v")}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowFullScreen>

               </iframe>

        </div>
        
        <CommentContainer/>
        </div>
        <Videosidebar/>
        
        </div>
    )
}
export default WatchPage