import './style.css'
export default function MovieList(props){
    const {listName , title} = props
    function renderMovies(){
        return listName.map(function(item , index){
            const {title , type , year , rating , image , subtitle , imdb , update , play} = item
            return(
                <li className="movieBox" key={index}>
                    <div className='imageContent'>
                        <img src={image}/>
                        <div className='content'>
                            <p>{type} {year}</p>
                            <p>{rating}</p>
                            <p>{subtitle}</p>
                            <p>{imdb}</p>
                            <img className="playIcon" src={play}/>
                        </div>
                    </div>
                    <h3 className="title">{title}</h3>
                    <p className="update">{update}</p>
                </li>
            )
        })
    }
    return(
        <div>
            <h2>{title}</h2>
            <ul className='movieBoxes'>{renderMovies()}</ul>
        </div>
    )
}