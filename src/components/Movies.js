import Movie from './Movie'

const Movies = (props) => {
    return (
        <div className="movies">
        {props.movies.map( (movie, index) => (
        <Movie
        name={movie.name}
        year={movie.year}
        rating={movie.rating}
        image={movie.image}
/>
      ))}
    </div>
  );
};

export default Movies