const Videocard=({info})=>{
    if(!info ){
        return null
    }
    console.log(info)
    const {snippet ,statistics}=info
    const {channelTitle,title,thumbnails}=snippet
  
  
    return(
        <div className="m-2 p-2 w-56 shadow-lg ">
<img className="rounded-lg" src={thumbnails.medium.url} alt="img"/>
            <ul>
            <li className="p-1  font-bold">{channelTitle }</li>
            <li>{title}</li>
            <li>{statistics.viewCount}Views</li>
           
           
          </ul>
          
        </div>
    )
}
export default Videocard

/***
 *  //<li>{statistics.viewCount}</li>
 * ,statistics
 *  const {snippet}=info
   const {channelTitle,title,thumbnails}=snippet
 * 
 * 
 * <img src={thumbnails.high} alt="img"/>
          <ul>
            <li>{channelTitle}</li>
            <li>{title}</li>
           
          </ul>
 */