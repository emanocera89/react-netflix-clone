import React from 'react';
import Container from 'react-bootstrap/Container';
import ItemListRow from '../ItemListRow/ItemListRow';
import './ItemListContainer.css';

function ItemListContainer({ titles, genres, title, type, category }) {
    return (
        <div className="item-list-container">
            <Container fluid>
                <h2 className="rowTitle">{title}</h2>
            </Container>
            <ItemListRow
                titles={
                    type !== undefined ?
                        titles.filter(i => i.type === type && i.genres.includes(category)) : titles.filter(i => i.genres.includes(category))
                }
                genres={genres}
            />
        </div>
    )
}

export default ItemListContainer;