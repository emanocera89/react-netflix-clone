import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import './PreviewModal.css';
import Svg from '../Svg/Svg';
import { BsHandThumbsUp } from 'react-icons/bs';
import { HiPlus } from 'react-icons/hi';
import { IoIosClose } from 'react-icons/io';
import ItemCard from '../ItemCard/ItemCard';
import { IoChevronDownOutline } from "react-icons/io5";


function PreviewModal(props) {
    const [listExpanded, setListExpanded] = useState('');
    const [genres, setGenres] = useState([]);

    // expande listado de sugeridos
    const handleToggleExpandList = () => {
        if (listExpanded === '') {
            setListExpanded('expanded');
        } else {
            setListExpanded('');
        }
    }

    // filtra el listado de géneros y obtiene sus nombres
    useEffect(() => {
        if (props.show) {
            const genresArr = props.title.genres.map((i) => { return props.genres.filter(g => g.id === i) })
            setGenres(genresArr);
        }
    }, [props.show]);

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            dialogClassName="pmodal"
            size="lg"
        >
            <Modal.Header>
                <button className="button-close" onClick={props.onHide}><IoIosClose /></button>
                <div className="cover-container">
                    <img src={require(`../../assets/${props.title && props.title.imgPrefix}_cover.png`)} width='100%' className="main-cover" />
                    <div className="buttons-container">
                        <div className="title-logo-wrapper">
                            <img className="" src={require(`../../assets/${props.title && props.title.imgPrefix}_logo.png`)} width='100%' />
                        </div>
                        <Container fluid>

                            <Button variant="light"><Svg name="play" width={30} height={25} color="#141414" /> <span className="button-label">Reproducir</span></Button>
                            <button className="action-button"><HiPlus /></button>
                            <button className="action-button"><BsHandThumbsUp /></button>
                        </Container>
                    </div>
                </div>
                <div className="item-details">
                    <Container fluid>
                        <span className="match-score">95% para ti</span>
                        <span className="year">{props.title.year}</span>
                        <span className="maturity-rating">{props.title.maturity_rating}</span>
                        <span className="duration">{props.title.duration}</span>
                    </Container>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="moreLikeThis">
                    <Container fluid>
                        <h2 className="section-header">Más títulos similares a este</h2>
                        <div className={`item-list ${listExpanded}`}>
                            <div className="list-track">
                                <div className="item-row">

                                    {props.titles.map((i, id) => (

                                        i.id !== props.title.id && <div className="item-col" key={id}><ItemCard title={i} /></div>

                                    ))}

                                </div>
                            </div>
                            <button className="action-button expand" onClick={handleToggleExpandList}><IoChevronDownOutline /></button>
                        </div>
                    </Container>
                </div>
                <div className="title-details">
                    <Container fluid>
                        <h2 className="section-header">Acerca de <b>{props.title.title}</b></h2>
                        <div className="about-container">
                            <div className="about-row">
                                {props.title.type === 1 ?
                                    <><label>Dirección: </label><span>{props.title.director}</span></>
                                    :
                                    <>
                                        <label>Creado por: </label>
                                        {props.title.created_by && props.title.created_by.map((i, id) => (
                                            id === props.title.created_by.length - 1 ?
                                                <span key={id}>{i}</span>
                                                :
                                                <div key={id}><span key={id}>{i}</span>, </div>
                                        ))}
                                    </>
                                }

                            </div>
                            <div className="about-row">
                                <label>Elenco: </label>
                                {props.title.cast && props.title.cast.map((i, id) => (
                                    id === props.title.cast.length - 1 ?
                                        <span key={id}>{i}</span>
                                        :
                                        <div key={id}><span key={id}>{i}</span>, </div>
                                ))}
                            </div>
                            {props.title.type === 1 &&
                                <div className="about-row">
                                    <label>Guión: </label><span>{props.title.writer}</span>
                                </div>
                            }
                            <div className="about-row">
                                <label>Géneros:</label>

                                {genres && genres.map((i, id) => (
                                    id === genres.length - 1 ?
                                        <span key={id}>{i[0].name}</span>
                                        :
                                        <div key={id}><span>{i[0].name}</span>, </div>
                                ))}
                            </div>
                            <div className="about-row">
                                <label>Clasificación por edad:</label> <span className="maturity-rating">{props.title.maturity_rating}</span>
                            </div>
                        </div>
                    </Container>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default PreviewModal;