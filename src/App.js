import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies'


function App() {

  const movies = [
    {
      name: "Titanic",
      year: "1997",
      rating: "A",
      image: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg"

    },
    {
      name: "A Walk to Remember",
      year: "2002",
      rating: "A",
      image: "https://m.media-amazon.com/images/M/MV5BMzU3NTYxM2MtNjViMS00YmNlLWEwM2MtYWI2MzgzNTkxODFjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"

    },
    {
      name: "Wonder Woman",
      year: "2017",
      rating: "C",
      image: "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"

    },
    {
      name: "The Notebook",
      year: "2004",
      rating: "A",
      image: "https://m.media-amazon.com/images/M/MV5BNzc3Mzg1OGYtZjc3My00Y2NhLTgyOWUtYjRhMmI4OTkwNDg4XkEyXkFqcGdeQXVyMTU3NDU4MDg2._V1_.jpg"

    },
    {
      name: "Pretty Woman",
      year: "1990",
      rating: "A",
      image: "https://m.media-amazon.com/images/M/MV5BMTMwNTA5ODAxM15BMl5BanBnXkFtZTYwNTQwODU5._V1_.jpg"

    },
  ]

  return (
    <div className="App">
      <Movies movies={movies} />
    </div>
  );
}

export default App;
