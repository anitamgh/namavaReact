import './style.css'
export default function Collection(props){
    const {listName} = props
    function renderItems(){
        return listName.map(function(item , index){
            const {image , title} = item
            return(
                <li key={index}>
                    <img src={image}/>
                    <p>{title}</p>
                </li>
            )
        })
    }
    return(
        <ul className="collectionUl">{renderItems()}</ul>
    )
}