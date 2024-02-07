import Comment from "./comment"


const commentsdata=[
    {
        name:"Gopi",
        text:"Absolutely loved this video. Amazing work." ,
        replies:[
             ]
    },
    
    {
        name:"Naresh",
        text:"I loved the video. Look forward to more from you." ,
        replies:[
             ]
    },
    {
        name:"Raj",
        text:"Your videos are so much valuable knowledgeable ❤" ,
        replies:[
            {
                name:"Rocky",
                text:"you are amazing  man" ,
                replies:[
                     ]
            },
            {
                name:"Magesh",
                text:"I will watch your other videos as well." ,
                replies:[
                    {
                        name:"Dinesh",
                        text:"good" ,
                        replies:[
                            {
                                name:"Abi",
                                text:"Your videos are so much valuable knowledgeable ❤" ,
                                replies:[
                                     ]
                            },
                             ]
                    },
                     ]
            },
            
             ]
    },
    {
        name:"Nandhini",
        text:"I like this video the tutorial is clear" ,
        replies:[
            {
                name:"Prasanth",
                text:"I like this video the tutorial is clear" ,
                replies:[
                     ]
            },
             ]
    }]

const CommentsList=({comments})=>{
 return(
    comments.map((comment,index)=>
    <div key={index}>
<Comment  data={comment}/>
   
    <div className="pl-5 border border-l-black ml-5">
    <CommentsList comments={comment.replies}/>
    </div>
    </div>
    
    )
 )
       
}

   

const CommentContainer=()=>{
    return(
    <div  className="m-2 p-2">
<h1 className="text-2xl font-bold">Comment :</h1>

    <CommentsList comments={commentsdata}/>
</div>
      )
}
export default CommentContainer