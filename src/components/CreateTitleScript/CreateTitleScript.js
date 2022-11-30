import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

function CreateTitleScript() {
    const [scriptDone, setScriptDone] = useState(false);

    const handleRunScript = () => {

        const title = {
            /*
            id: 1,
            title: 'Merlina',
            description: 'Inteligente, sarcástica y un poco muerta por dentro, Merlina Addams investiga una ola de asesinatos mientras hace nuevos amigos (y enemigos) en la Academia Nunca Más.',
            year: '2022',
            duration: '',
            genres: [4,5,6,7,8],
            director: '',
            created_by: ['Alfred Gough', 'Miles Millar'],
            cast: ['Jenna Ortega', 'Gwendoline Christie', 'Riki Lindhome'],
            maturity_rating: '+13',
            type: 0,
            imgPrefix: 'merlina'

            id: 2,
            title: '1899',
            description: 'Año 1899. Cuando misteriosos eventos cambian el curso de un barco de inmigrantes rumbo a Nueva York, un complejo enigma empieza a develarse para sus desconcertados pasajeros.',
            year: '2022',
            duration: '',
            genres: [0,2,3],
            director: '',
            created_by: ['Jantje Friese', 'Baran bo Odar'],
            cast: ['Emily Beecham', 'Aneurin Barnard', 'Andreas Pietschmann'],
            maturity_rating: '+16',
            type: 0,
            imgPrefix: '1899'

            id: 3,
            title: 'Élite',
            description: 'Tres jóvenes de la clase obrera asisten a una de las escuelas privadas más exclusivas de España, donde el choque con los hijos de la élite acaba en una tragedia.',
            year: '2022',
            duration: '',
            genres: [0,4,7],
            director: '',
            created_by: ['Carlos Montero', 'Darío Madrona'],
            cast: ['Itzan Escamilla', 'Miguel Bernardeau', 'Danna Paola'],
            maturity_rating: '+16',
            type: 0,
            imgPrefix: 'elite'

            id: 4,
            title: 'Revancha',
            description: 'Cuando la tragedia aparece, el excampeón de boxeo Billy Hope está obligado a empezar de nuevo, ¿podrá levantarse de entre las cenizas para ser campeón de nuevo?',
            year: '2015',
            duration: '2 h 3 min',
            genres: [0,2,9],
            director: 'Antoine Fuqua',
            created_by: [],
            cast: ['Jake Gyllenhaal', 'Forest Whitaker', 'Rachel McAdams'],
            writer: 'Kurt Sutter',
            maturity_rating: '+16',
            type: 1,
            imgPrefix: 'elite'

            id: 5,
            title: 'Vikingos',
            description: 'Este drama realista recuenta las hazañas del vikingo Ragnar Lothbrok durante la expansión nórdica al retar a un líder falto de visión.',
            year: '2019',
            duration: '',
            genres: [0,2,3],
            director: '',
            created_by: ['Michael Hirst'],
            cast: ['Travis Fimmel', 'Katheryn Winnick', 'Clive Standen'],
            writer: 'Kurt Sutter',
            maturity_rating: '+16',
            type: 0,
            imgPrefix: 'vikingos'

            id: 6,
            title: 'Peaky Blinders',
            description: '1919. Inglaterra. Thomas Shelby lidera una conocida banda de Birmingham que avanza con ferocidad por el bajo mundo.',
            year: '2022',
            duration: '',
            genres: [0,4,7],
            director: '',
            created_by: ['Steven Knight'],
            cast: ['Cillian Murphy', 'Sam Neill', 'Helen McCrory'],
            writer: '',
            maturity_rating: '+16',
            type: 0,
            imgPrefix: 'peaky_blinders'

            id: 7,
            title: 'Beats',
            description: 'Un chico del sur de Chicago vive encerrado en su mundo jugando con los límites de la música y del hip-hop hasta que el destino lo cruza con el mentor menos pensado.',
            year: '2019',
            duration: '1 h 50 min',
            genres: [0,2,6],
            director: 'Chris Robinson',
            created_by: [],
            cast: ['Khalil Everage', 'Anthony Anderson', 'Uzo Aduba'],
            writer: '',
            maturity_rating: '+16',
            type: 1,
            imgPrefix: 'beats'

            id: 8,
            title: 'Jobs',
            description: 'La historia del genio implacable de Silicon Valley, desde su paso infructuoso por la universidad hasta llegar a la cima del mundo con Apple.',
            year: '2013',
            duration: '2 h 7 min',
            genres: [2,10],
            director: 'Joshua Michael Stern',
            created_by: [],
            cast: ["John Getz", "Ahna O'Reilly", "Ron Eldard"],
            writer: '',
            maturity_rating: '+13',
            type: 1,
            imgPrefix: 'jobs'

            id: 9,
            title: 'Pasión y baile',
            description: 'Una aspirante a bailarina de ballet se muda al sur de Chicago. Allí, desarrolla un vínculo inesperado con el hiphop... y con un chico que sabe cómo moverse.',
            year: '2001',
            duration: '1 h 53 min',
            genres: [2,6,11],
            director: 'Thomas Carter',
            created_by: [],
            cast: ["Julia Stiles", "Sean Patrick Thomas", "Kerry Washington"],
            writer: 'Duane Adler',
            maturity_rating: '+13',
            type: 1,
            imgPrefix: 'pasion_y_baile'

            id: 10,
            title: 'Karate Kid',
            description: 'Tras entablar una amistad con un modesto maestro de artes marciales, un joven acosado aprende lecciones de vida (y de karate) para derrotar a sus impiadosos rivales.',
            year: '1984',
            duration: '2 h 7 min',
            genres: [2,3,6,9],
            director: 'John G. Avildsen',
            created_by: [],
            cast: ["Ralph Macchio", "Pat Morita", "Elisabeth Shue"],
            writer: 'Robert Mark Kamen',
            maturity_rating: '+13',
            type: 1,
            imgPrefix: 'karate_kid'

            id: 11,
            title: 'Viven',
            description: 'Al estrellarse su avión en los Andes, los sobrevivientes del equipo de rugby uruguayo luchan por mantenerse con vida en un desolado glaciar.',
            year: '1993',
            duration: '2 h 6 min',
            genres: [2,3,10],
            director: 'Frank Marshall',
            created_by: [],
            cast: ["Ethan Hawke", "Vincent Spano", "Josh Hamilton"],
            writer: 'John Patrick Shanley',
            maturity_rating: '+16',
            type: 1,
            imgPrefix: 'viven'

            id: 12,
            title: 'Adú',
            description: 'Cerca de un pueblo español en el norte de África, un niño hace un viaje doloroso, un padre se reconecta con su hija, y un agente de la guardia civil es presa de la culpa.',
            year: '2020',
            duration: '1 h 59 min',
            genres: [2,10],
            director: 'Salvador Calvo',
            created_by: [],
            cast: ["Luis Tosar", "Anna Castillo", "Álvaro Cervantes"],
            writer: 'Alejandro Hernández',
            maturity_rating: '+16',
            type: 1,
            imgPrefix: 'adu'

            id: 13,
            title: 'Mis huellas a casa',
            description: 'Una fiel perrita, que extraña profundamente a su dueño, se embarca en un peligroso viaje por el corazón de los Estados Unidos para reencontrarse con él.',
            year: '2019',
            duration: '1 h 35 min',
            genres: [1,10],
            director: 'Charles Martin Smith',
            created_by: [],
            cast: ["Ben Ratner", "Jonah Hauer-King", "Spencer Drever"],
            writer: 'W. Bruce Cameron',
            maturity_rating: '+13',
            type: 1,
            imgPrefix: 'mis_huellas_a_casa'

            id: 14,
            title: 'Lo imposible',
            description: 'Este drama atrapante narra el caos que vivió una familia debido al tsunami de 2004 en la costa del sudeste asiático.',
            year: '2012',
            duration: '1 h 53 min',
            genres: [2,10],
            director: 'J.A. Bayona',
            created_by: [],
            cast: ["Naomi Watts", "Ewan McGregor", "Tom Holland"],
            writer: 'María Belón',
            maturity_rating: '+16',
            type: 1,
            imgPrefix: 'lo_imposible'

            id: 15,
            title: 'Siete años en el Tibet',
            description: 'En 1939, un montañista austríaco viaja al Himalaya para dirigir una expedición. Pero, cuando estalla la Segunda Guerra Mundial, se convierte en prisionero de guerra.',
            year: '1997',
            duration: '2 h 16 min',
            genres: [2,3,10],
            director: 'Jean-Jacques Annaud',
            created_by: [],
            cast: ["Brad Pitt", "David Thewlis", "BD Wong"],
            writer: 'Becky Johnston',
            maturity_rating: '+13',
            type: 1,
            imgPrefix: 'siete_anos_en_el_tibet'

            id: 16,
            title: 'Bohemian Rapsody',
            description: 'Biografía inspirada en la vida de Freddie Mercury, de inadaptado a vocalista de la icónica Queen, y en el agitado ascenso a la fama de la banda.',
            year: '2018',
            duration: '2 h 14 min',
            genres: [2,10],
            director: 'Bryan Singer',
            created_by: [],
            cast: ["Rami Malek", "Lucy Boynton", "Gwilym Lee"],
            writer: 'Anthony McCarten',
            maturity_rating: '+13',
            type: 1,
            imgPrefix: 'bohemian_rapsody'*/

            id: 17,
            title: 'Pompeya',
            description: 'En los días previos a la erupción del Vesuvio, un esclavo enviado a Nápoles insiste en volver a casa a salvar a la mujer que ama.',
            year: '2014',
            duration: '1 h 44 min',
            genres: [2,3],
            director: 'Paul W.S. Anderson',
            created_by: [],
            cast: ["Kit Harington", "Emily Browning", "Adewale Akinnuoye-Agbaje"],
            writer: 'Janet Scott Batchler',
            maturity_rating: '+16',
            type: 1,
            imgPrefix: 'pompeya'
        };

        const db = getFirestore();

        const titlesCollection = collection(db, "titles");
        addDoc(titlesCollection, title).then(({ id }) => alert(id));

        setScriptDone(true);
    }

    return (
        <Container>
        <button onClick={handleRunScript} disabled={scriptDone}>Run Script!</button>
        </Container>
    )
}

export default CreateTitleScript;