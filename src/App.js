import React from 'react';
import axios from 'axios';
import Movie from './components/Movie';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      movies: [],
    };
  }

  componentDidMount() {
    console.log('Did Mounted!');
    // setTimeout(() => {
    //     this.setState({isLoading:false, book: 'how to study'});
    // },2000);
    this.getMovies();
  }

  componentDidUpdate() {
    console.log('Did Updated!');
  }


  componentWillUnmount() {
    console.log('Did Unmount!');
  }

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating&limit=5');
    console.log(movies);
    this.setState({ movies, isLoading: false });
  }

  render() {
    console.log('remdering~');
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {
          isLoading ? (
            <div className="loader">
              <span className="loader__text">Loading..</span>
            </div>
          ) : (
            <div className="movies">
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  summary={movie.summary}
                  year={movie.year}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </div>
          )
        }
      </section>
    );
  }
}
export default App;
