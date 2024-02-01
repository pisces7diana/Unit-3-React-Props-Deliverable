const Movie = (props) => {

    return <div className="Movie">

        <h1>{props.name}</h1>
        <h1>Year: {props.year} </h1>
        <h1>Rating: {props.rating} </h1>
        <img src= {props.image} alt={props.image} />

    </div>
}

export default Movie