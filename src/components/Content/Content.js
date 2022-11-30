import ItemListContainer from "../ItemListContainer/ItemListContainer";
import './Content.css';

function Content(props) {
    return (
        <div className="content">
            <ItemListContainer titles={props.titles} genres={props.genres} category={0} title="Tendencias" />
            <ItemListContainer titles={props.titles} genres={props.genres} category={2} type={1} title="Películas dramáticas" />
            <ItemListContainer titles={props.titles} genres={props.genres} category={10} title="Basadas en hechos reales" />
            <ItemListContainer titles={props.titles} genres={props.genres} category={3} title="Acción y aventura" />
        </div>
    )
}

export default Content;