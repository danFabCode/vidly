import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./Pagination";
import _ from "lodash";
import { paginate } from "../Utils/paginate";
import List from "./list";
import MovieTable from "./MovieTable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    listSize: 3,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: getGenres(), genres });
  }

  handleDelete = (movie_id) => {
    const movies = this.state.movies;
    const del = movies.filter((movie) => movie._id !== movie_id);
    this.setState({ movies: del });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
    console.log(movie);
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleListChange = (genre) => {
    console.log(genre);
    this.setState({ currentList: genre });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const check = this.state.movies.length;
    const {
      currentPage,
      pageSize,
      movies: allMovies,
      currentList,
      genres,
      sortColumn,
    } = this.state;

    if (check === 0)
      return (
        <p className="text-bold text-3xl text-center m-4">
          There are no movies in the database
        </p>
      );

    const filtered =
      currentList && currentList._id
        ? allMovies.filter((m) => m.genre._id === currentList._id)
        : allMovies;
    console.log(filtered, filtered.length);
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <>
        <p className="text-bold text-3xl text-center m-4">
          You have {filtered.length} movies in your database
        </p>
        <div className="Main w-full mx-auto flex justify-evenly m-10">
          <List
            currentList={currentList}
            items={genres}
            onListChange={this.handleListChange}
          />

          <div className="">
            <MovieTable
              onSort={this.handleSort}
              sortColumn={sortColumn}
              movies={movies}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
            />
            <Pagination
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
              pageSize={pageSize}
              itemsCount={filtered.length}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
