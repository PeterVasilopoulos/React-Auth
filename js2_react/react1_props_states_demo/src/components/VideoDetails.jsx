const VideoDetails = (props) => {
    const {title, views} = props

    return (
        <fieldset>
            <legend> VideoDetails</legend>
            <h1> Video Details</h1>
            <h3> Title: {title}</h3>
            <h3> Views: {views} </h3>
            <h3> Hashtags: {props.hashtags} </h3>
            <ul>
                {props.hashtags.map((tag, idx) => (
                    <li key={idx}> #{tag}</li>
                ))}
            </ul>
        </fieldset>
    )
}
export default VideoDetails;