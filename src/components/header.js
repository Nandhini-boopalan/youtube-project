import { useEffect, useState } from "react"
import { toggleMenu } from "../utelis/AppSlice"
import {HAM_MENU, ICON, USER} from "./constants"
import {useDispatch} from "react-redux"
import { U_TUBE_SEARCH_API } from "./constants"


const Header=()=>{
    const [searchQuery,setSearchQuery]=useState(" ")
    const [suggestion,setsuggestion]=useState([])
    const [showsuggestion,setShowSuggestion]=useState(false)

    
    const dispatch=useDispatch()
    
    useEffect(()=>{
//console.log(searchQuery)
const timer=setTimeout(()=>
    getsearchSuggestion(),200)
    return ()=>{
        clearTimeout(timer)
    }

    },[searchQuery])

const getsearchSuggestion=async ()=>{
    console.log(searchQuery)

    const data= await fetch(U_TUBE_SEARCH_API+searchQuery)
    const json=await data.json()
   // console.log(json)
   setsuggestion(json[1])

    
}
   
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }
    return(
        <div className="grid grid-flow-col p-2 m-2 shadow-lg">
            <div className="flex col-span-1">
<img onClick={()=>toggleMenuHandler()} className=" cursor-pointer h-10 w-10 " src={HAM_MENU} alt="menu"/>
<a href="/">
<img className="h-10 w-10 mx-2" src={ICON} alt="icon"/></a>
</div>
<div className="col-span-10 w-1/2 text-center">
    <div>
<input className="rounded-l-full w-60 h-6 border border-black p-2"
type="search"
 placeholder="search" 
value={searchQuery}
 onChange={(e)=>setSearchQuery(e.target.value)}
 onFocus={()=>setShowSuggestion(true)}
 onBlur={()=>setShowSuggestion(false)}
 />
<button className=" h-6 pr-1  border border-black rounded-r-full bg-gray-100 px-2  ">search</button>
</div>
<div className="px-36 rounded-md">
{showsuggestion&&(<div className="fixed bg-white w-60 py-2 px-2  shadow-lg border border-gray-100  rounded-xl">
    <ul>
        {suggestion.map((s)=><li  key={s}className=" py-2 shadow-sm hover:bg-gray-100">{s}</li>)}
         

    </ul>


</div>)}
</div>


</div>
<div className="col-span-1">
<img className="h-10 w-10"src={USER} alt="user"/>


</div>

      

        </div>
        
    )
}
export default Header