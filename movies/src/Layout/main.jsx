import React from "react";
import { Movies } from "../Components/Movies";
import { Search } from "../Components/Search";
import { Hearts } from "react-loader-spinner";

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=8f1ab8fe&s=matrix')
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search, loading: false }));
    }

    searchMovies = (str, type = "all") => {
        this.setState({loading : true});
        fetch(`http://www.omdbapi.com/?apikey=8f1ab8fe&s=${str}${
            type !== "all" ? `&type=${type}` : ""
        }`)
            .then((response) => response.json())
            .then ((data) => this.setState({ movies: data.Search, loading: false }));
    };

    render() {
        const { loading } = this.state;
        const style = { position: "fixed", left: "50%", transform: "translate(-50%, -50%)" };

        return <main className="container content">
            <Search searchMovies={this.searchMovies} />
            {
                loading ? <div style={style}><Hearts color="#592693" /></div> : <Movies movies={this.state.movies} />
            }
        </main>
    }
}
export { Main };