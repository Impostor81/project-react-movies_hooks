
export default function Movie(props) {

  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster
  } = props;

  return (
  <div id={id} className="movie card">
    <div className="card-image">
      {poster === 'N/A'
        ? <img src='https://via.placeholder.com/344x460?text=no picture' alt="poster"/>
        : <img src={poster} alt="poster"/>}
    </div>
    <div className="card-content">
      <span className="card-title grey-text text-darken-4">{title}</span>
      <p>{year} <span className="right">{type}</span></p>
    </div>
  </div>
  )
}

