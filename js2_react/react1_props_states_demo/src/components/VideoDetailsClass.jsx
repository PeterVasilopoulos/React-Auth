import React, {Component} from 'react';

class VideoDetailsClass extends Component{
    render(){
        return (
            <fieldset>
            <legend> VideoDetailsClass.jsx</legend>
            <h1> Video Details</h1>
            <h3> Title: {this.props.title}</h3>
            <h3> Views: {this.propsviews} </h3>
            <h3> Hashtags: {this.props.hashtags} </h3>
            <ul>
                {this.props.hashtags.map((tag, idx) => (
                    <li key={idx}> #{tag}</li>
                ))}
            </ul>
        </fieldset>
        )
    }
}

export default VideoDetailsClass;