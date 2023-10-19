import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Sidebar=()=>{
    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)

    if(!isMenuOpen) return null//early return

    return(
        <div className="p-5 shadow-lg w-48 ">
             <ul>
                <li><Link to="/">Home</Link></li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Moving</li>
            </ul>
            <h1 className="font-bold">subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Moving</li>
            </ul>
            <h1 className="pt-5 font-bold">Watch later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Moving</li>
            </ul>
        </div>
    )
}
export default Sidebar