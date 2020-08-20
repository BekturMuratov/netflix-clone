import React from 'react';
import './App.css';
import Row from './components/Row'
import request from './components/Request';
import Banner from './components/Banner';
import Nav from './components/Nav';


function App() {
  return (
    <div className="app">
    <Nav />
    <Banner />
      <Row title = "Netflix originals" isLargeRow={true} fetchUrl={request.fetchNetflixOriginals} />
      <Row title = "Trending now"  fetchUrl={request.fetchTrending} />
      <Row title = "Top Rated"  fetchUrl={request.fetchTopRated} />
      <Row title = "Action Movies"  fetchUrl={request.fetchActionMovies} />
      <Row title = "Comedies Movies"  fetchUrl={request.fetchComedyMovies} />
      <Row title = "Horror Movies"  fetchUrl={request.fetchHorrorMovies} />
      <Row title = "Romance Movies"  fetchUrl={request.fetchRomanceMovies} />
      <Row title = "Documentaries"  fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
