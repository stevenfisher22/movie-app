import React, { Component } from 'react';
import './components/CSS/app.css';
import MoviePres from './components/MoviePres';
import { connect } from 'react-redux';
import movieData from './actions/movieData';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      movies: []
    }
  };
  
  componentWillMount() {
    const apiKey = 'b7666dcfd8e0683d3c82d2387321f034';
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=" + apiKey + "&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.results)
          this.props.onMovie(result.results)
          this.setState({
            movies: result.results
          });
        }
      )
  };

  render() {
    const { movies } = this.state;
    let movieList = movies.map(item =>{
      return <li><MoviePres title={item.title} desc={item.overview} image= {item.poster_path  ? item.poster_path : ""}/></li>
    })
    
    return (
      <div>
        {/* <img src="../images/bg_3.jpg" alt="popcorn"></img> */}
        <ul>
          {movieList}
        </ul>
      </div>
    );
  }
}

function mapStateToProps() {
  return 
}

function mapDispatchToProps(dispatch) {
  return{
    onMovie: (data) => dispatch(movieData(data))
  }
}

export default connect(null, mapDispatchToProps)(App)
