import React from 'react';
import axios from 'axios';
import Movie from './components/Movie';

class App extends React.Component {

    state = {
        isLoading: true,
        movies: []
    };

    componentDidMount() {
        console.log(`Did Mounted!`);
        // setTimeout(() => {
        //     this.setState({isLoading:false, book: 'how to study'});
        // },2000);
        this.getMovies();
    }

    getMovies = async () => {
        const { data: { data: { movies } } } = await axios.get('https://yts-proxy.now.sh/list_movies.json?limit=5');
        console.log(movies);
        this.setState({ movies, isLoading: false });
    }

    componentDidUpdate() {
        console.log(`Did Updated!`);
    }


    componentWillUnmount() {
        console.log(`Did Unmount!`);
    }
    render() {
        console.log(`remdering~`);
        const { isLoading, movies } = this.state;
        return (
            <div>
                {isLoading 
                ? 'Loading..' 
                : movies.map(movie => (
                <Movie 
                    key={movie.id} 
                    id={movie.id} 
                    title={movie.title} 
                    summary={movie.summary}
                    year = {movie.year}
                    poster={movie.medium_cover_image} 
                    />
                ))}
            </div>
        )
    }
}
export default App;

