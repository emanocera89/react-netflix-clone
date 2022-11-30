import React, { useState } from 'react';
import PreviewModal from '../PreviewModal/PreviewModal';
import './Item.css';

function Item(props) {
    const [showModal, setShowModal] = useState(false);
    
    // constrola estado del modal
    const handleClose = () => {
        setShowModal(false);
    }

    return (
        <>
            <div className="item-container">
                <a className="item-thumb-container" onClick={e => setShowModal(true)} title={props.title.title}>
                    <img className="" src={require(`../../assets/${props.title && props.title.imgPrefix}_thumb.png`)} width='100%' />
                </a>
            </div>
            <PreviewModal title={props.title} titles={props.titles} genres={props.genres} show={showModal} onHide={handleClose} />
        </>
    )
}
export default Item;