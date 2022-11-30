import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import Item from "../../components/Item/Item";
import "./Results.css";
import { collection, getDocs, getFirestore } from 'firebase/firestore';

function Results(props) {
    const [results, setResults] = useState(props.titles);
    const [titles, setTitles] = useState([]);
    const [genres, setGenres] = useState([]);
    const params = useParams().search.toLowerCase();

    // obtiene listado de títulos (series y películas)
    const getTitles = () => {
        const db = getFirestore();
        const titlesCollection = collection(db, "titles");
        getDocs(titlesCollection).then((snapshot) => {
            setTitles(snapshot.docs.map((doc) => doc.data()))
        })
    }

    // obtiene listado de géneros 
    const getGenres = () => {
        const db = getFirestore();
        const genresCollection = collection(db, "genres");
        getDocs(genresCollection).then((snapshot) => {
            setGenres(snapshot.docs.map((doc) => doc.data()))
        })
    }

    useEffect(() => {
        getTitles();
        getGenres();
    }, []);

    // obtiene coincidencias de búsqueda y completa con los items que quedaron excluídos luego del filtrado
    const handleFilterResults = () => {
        const newResults = titles.filter(r => r.title.toLowerCase().includes(params));
        const excludedResults = titles.filter(r => !r.title.toLowerCase().includes(params));
        setResults(newResults);
        setResults((c) => c.concat([...excludedResults]))
    }

    useEffect(() => {
        handleFilterResults();
    }, [titles, params]);

    return (
        <main className="results-page">
            <Container>
                <h2>Resultados para «{params}»</h2>
                <div className="item-row">
                    {results.length > 0 && results.map((i) => (
                        <div className="item-col">
                            <Item title={i} titles={titles} genres={genres} />
                        </div>
                    ))}
                </div>
            </Container>
        </main>
    )
}

export default Results;