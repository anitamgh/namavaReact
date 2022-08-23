import './style.css'
export default function LiveStream(props){
    const {listName , title} = props
    function renderItems(){
        return listName.map(function(item , index){
            const {matchType , startTime , image , title , sport} = item
            // if(startTime === "در حال پخش"){
            //     document.getElementById("startTime").classList.add("red")
            // }
            return(
                <li key={index}>
                    <img src={image}/>
                    <div className="info">
                        <p>{title}</p>
                        <p>{sport}-{matchType}</p>
                        <p id="text">{startTime}</p>
                    </div>
                    {/* if(startTime === "در حال پخش"){
                        document.getElementById("text").classList.add("red")
                    } */}
                </li>
            )
        })
    }
    return(
        <div className='live'>
            <h2>{title}</h2>
            <ul>{renderItems()}</ul>
        </div>
    )
}