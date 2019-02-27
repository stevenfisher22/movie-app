import React from 'react';

class MoviePres extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let poster = "https://image.tmdb.org/t/p/original" + this.props.image;
        return (
            <div>
                {this.props.title}<br />
                {this.props.desc}
                <img src={poster} alt={this.props.title}></img>
            </div>
        );
    }
}

export default MoviePres
