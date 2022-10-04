import{ IoLocationSharp} from 'react-icons/io5';

export default function Card (props){
    return(
    <div className='card'>
        <div className="image">
            <img src={`images/${props.item.coverImg}`} ></img>
        </div>
        <div className='content'>
            <div>
                <IoLocationSharp className='loc'/><span>{props.item.country}</span><a href='https://www.google.com/maps/@30.1462679,31.3198379,15z'>view on google maps</a>
            </div>
            <h1>{props.item.location}</h1>
            <p className='date'>{props.item.date}</p>
            <p className='discription'>{props.item.description}</p>
        </div>
    </ div>     
    )
}