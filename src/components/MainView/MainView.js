import React, { useState, useEffect, useRef } from 'react';
import './MainView.css';
import BackgroundImage from '../../assets/the-last-kingdom-cover.jpg';
import Logo from '../../assets/the_last_kingdom_logo.png';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Svg from '../Svg/Svg';
import trailer from '../../assets/the-last-kingdom-trailer.mp4';
import { IoReloadOutline } from 'react-icons/io5';
import { HiOutlineVolumeOff, HiOutlineVolumeUp } from 'react-icons/hi';

function MainView() {
    const [videoVisibility, setVideoVisibility] = useState('video-hidden');
    const [videoDisplay, setVideoDisplay] = useState(true);
    const [videoMuted, setVideoMuted] = useState(true);
    const vidRef = useRef();

    // se ejecuta cuando el video finaliza
    const handleVideoEnded = () => {
        setVideoVisibility('video-hidden');
        setTimeout(() => {
            setVideoDisplay(false);
        }, 1000);
    }

    // chequea valor de scroll
    useEffect(() => {
        window.addEventListener("scroll", checkScrollVideoStop)
    })

    // se ejecuta al inicio para reproducir el video por primera vez
    useEffect(() => {
        setTimeout(() => {
            if (vidRef !== null) {
                setVideoVisibility('');
                vidRef.current.play();
            }
        }, 1000);
    }, [videoDisplay]);

    const handlePlayVideo = () => {
        setVideoDisplay(true);
    }

    const handleToggleMute = () => {
        setVideoMuted(current => !current);
    }

    // comprueba el valor del scroll y en base al mismo deteniene o reproduce el video
    const checkScrollVideoStop = () => {
        //console.log(window.scrollY)
        if (window.scrollY >= 400) {
            setVideoVisibility('video-hidden');
            //console.log('video-hidden');
            if (vidRef.current !== null) { vidRef.current.pause(); }
        } else {
            setVideoVisibility('');
            //console.log('video-hidden delete');
            if (vidRef.current !== null) { vidRef.current.play(); }
        }
    }


    return (
        <div className={`main-view ${videoVisibility}`} id="mainView">
            <img src={BackgroundImage} width='100%' className="main-cover" />
            {vidRef !== null && videoDisplay &&
                <video className="preview-video"
                    //autoPlay={"autoplay"}
                    ref={vidRef}
                    onEnded={handleVideoEnded}
                    muted={videoMuted}
                >
                    <source src={trailer} type='video/mp4' />
                </video>
            }

            <div className="button-layer">
                {!videoDisplay && <button className="action-button btn-reload" onClick={handlePlayVideo}><IoReloadOutline /></button>}
                {videoDisplay && <button className="action-button btn-sound" onClick={handleToggleMute}>{videoMuted ? <HiOutlineVolumeOff /> : <HiOutlineVolumeUp />}</button>}
                <div className="maturity-rating">
                    <span className="maturity-number">18+</span>
                </div>
            </div>

            <div className="caption-container" >
                <Container fluid>
                    <div className='caption-content'>

                        <img src={Logo} className="preview-logo" width="100%" />
                        <p className="description">Mientras Alfred el Grande defiende su reino de los invasores nórdicos, Uhtred busca reclamar su derecho de nacimiento ancestral.</p>
                        <div className='button-group-inline'>
                            <Button variant="light"><Svg name="play" width={30} height={25} color="#141414" /><span className="button-label">Reproducir</span></Button>
                            <Button variant="secondary"><Svg name="info" width={30} height={25} color="#fff" /><span className="button-label">Más información</span></Button>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default MainView;