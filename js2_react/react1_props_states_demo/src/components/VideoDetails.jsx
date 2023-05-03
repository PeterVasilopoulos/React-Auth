import React, {useState} from 'react'

const VideoDetails = (props) => {
    const {title} = props; // destructuring title from props

    // state variables
    const [likes, setLikes] = useState(0);
    const [views, setViews] = useState(props.views)
    // first argument: variable name
    // second argument: set function

    return (
        <fieldset>
       
            <legend> VideoDetails</legend>
            <h1> Video Details</h1>
            <h3> Title: {title}</h3>
            <h3> Views: {views} </h3> 
            <button onClick={()=>setViews(views+1)}>add views</button>
            <h3> Hashtags: {props.hashtags} </h3>
            <ul>
                {props.hashtags.map((tag, idx) => (
                    <li key={idx}> #{tag}</li>
                ))}
            </ul>
            <button onClick={()=>setLikes(likes+1)}> Like</button> <span>{likes}</span>
        </fieldset>
    )
}
export default VideoDetails;