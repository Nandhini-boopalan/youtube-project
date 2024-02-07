import { USER } from "./constants"


const Comment=({data})=>{
    const {name,text}=data
    return(
        <div className="flex bg-gray-100 p-2 rounded-lg my-2">
<img className="w-12 h-12" src={USER} alt="logo"/>
<div className="px-3">
<p className="font-bold">{name}</p>
<p>{text}</p>
</div>

</div>
    )
    
}
export default Comment