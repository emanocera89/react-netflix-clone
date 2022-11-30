import { HiPlus } from 'react-icons/hi';
import { FaPlay } from 'react-icons/fa';
import './ItemCard.css';

function ItemCard(props) {
    return (
        <a href="#" className="itemcard-container">
            <div className="cover-wrapper">
                <span className="duration">{props.title.duration}</span>
                <img className="" src={require(`../../assets/${props.title && props.title.imgPrefix}_thumb.png`)} width='100%' />
                <div className="action-button play"><FaPlay /></div>
            </div>
            <div className="title-info">
                <span className="maturity-rating">{props.title.maturity_rating}</span>
                <span className="year">{props.title.year}</span>
                <button className="action-button add-to-list"><HiPlus /></button>
            </div>
            <div className="title-description">
                <p>{props.title.description}</p>
            </div>
        </a>

    )
}

export default ItemCard;