import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import MainNavbar from './components/MainNavbar/MainNavbar';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import CreateTitleScript from './components/CreateTitleScript/CreateTitleScript';
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';
import { collection, getDocs, getFirestore } from 'firebase/firestore';


function App() {
  const [titles, setTitles] = useState([]);
  const [genres, setGenres] = useState([]);

  // obtiene listado de títulos (series y peliculas)
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
  }, [])

  return (
    <div className="App">
      <MainNavbar />
      <Routes>
        <Route exact path="/" element={<Home titles={titles} genres={genres} />}></Route>
        <Route exact path="/createTitle" element={<CreateTitleScript />}></Route>
        <Route exact path="/search/:search" element={<Results titles={titles} genres={genres} />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
