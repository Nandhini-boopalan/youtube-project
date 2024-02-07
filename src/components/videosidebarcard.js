const Videosidebarcard=({info})=>{
    if(!info ){
        return null
    }
    console.log(info)
    const {snippet ,statistics}=info
    const {channelTitle,title,thumbnails}=snippet
  
  
    return(
        <div className="m-2 p-2 w-26 h-26 ">
            <div className="flex">
                <div>
                <img className="rounded-lg h-24 w-44" src={thumbnails.medium.url} alt="img"/>
                </div>
                <div className="pl-2">
                <ul>
            <li className="  font-bold">{channelTitle }</li>
            <li>{title}</li>
            <li>{statistics.viewCount %1000+"k"}Views</li>
           
           
          </ul>
                </div>
            </div>

            
          
        </div>
    )
}
export default Videosidebarcard