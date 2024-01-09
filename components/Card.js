export default function Card({passagem}) {
    return (
      // <div className="card">
      //     <img src={props.image} alt={props.title} />
      //     <h2>{props.title}</h2>
      //     <p>{props.description}</p>
      //     <button onClick={() => props.onClick(props.id)}>Select</button
      //     ><br/>
      //     <small>Price: ${props.price}</small><br/>
      //     <a href={`http://www.imdb.com/title/${props.
      //     imdbID}/?ref_=nv_sr_1`} target="_blank
      //     ">IMDb Link</a>
      // </div>

      <div className="card text-bg-dark">
        <img src={passagem.image} alt={passagem.title} className="card-img" />
        <div className="card-img-overlay">
          <h4 className="card-title">{passagem.title}</h4>
        </div>
      </div>
    );
}