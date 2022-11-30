import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <Container>
                <ul className="social-list">
                    <li><a href="" target="_blank" title="Facebook"><FaFacebookF /></a></li>
                    <li><a href="" target="_blank" title="Instagram"><FaInstagram /></a></li>
                    <li><a href="" target="_blank" title="Twitter"><FaTwitter /></a></li>
                    <li><a href="" target="_blank" title="Youtube"><FaYoutube /></a></li>
                </ul>
                <Row className="row-list">
                    <Col xs={6} sm={3}>
                        <ul className="footer-list">
                            <li><a href="#">Audio descriptivo</a></li>
                            <li><a href="#">Relaciones con inversionistas</a></li>
                            <li><a href="#">Avisos legales</a></li>
                        </ul>
                    </Col>
                    <Col xs={6} sm={3}>
                        <ul className="footer-list">
                            <li><a href="#">Centro de ayuda</a></li>
                            <li><a href="#">Empleo</a></li>
                            <li><a href="#">Preferencias de cookies</a></li>
                        </ul>
                    </Col>
                    <Col xs={6} sm={3}>
                        <ul className="footer-list">
                            <li><a href="#">Tarjetas de regalo</a></li>
                            <li><a href="#">Términos de uso</a></li>
                            <li><a href="#">Información corporativa</a></li>
                        </ul>
                    </Col>
                    <Col xs={6} sm={3}>
                        <ul className="footer-list">
                            <li><a href="#">Prensa</a></li>
                            <li><a href="#">Privacidad</a></li>
                            <li><a href="#">Contáctanos</a></li>
                        </ul>
                    </Col>
                </Row>
                <ul className='mobile-menu'>
                    <li><a href="#">Términos de uso</a></li>
                    <li><a href="#">Declaración de privacidad</a></li>
                    <li><a href="#">Preferencias de cookies</a></li>
                    <li><a href="#">Centro de ayuda</a></li>
                </ul>
                <div className="member-footer-service">
                    <button className="service-code">Código de servicio</button>
                </div>
                <div className="member-footer-copyright"><span>© 1997-2022 Netflix, Inc.</span></div>
            </Container>
        </footer>
    )
}

export default Footer;