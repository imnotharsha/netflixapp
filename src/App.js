import React from 'react';
import Row from './components/Row';

import './App.css';
import requests from './requests';
import Front from './components/Front';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Front />
      <Row
        isLargeRow
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title='TRENDING NOW' fetchUrl={requests.fetchTrending} />
      <Row title='TOP RATED' fetchUrl={requests.fetchTopRated} />
      <Row title='ACTION MOVIES' fetchUrl={requests.fetchActionMovies} />
      <Row title='COMEDY MOVIES' fetchUrl={requests.fetchComedyMovies} />
      <Row title='HORROR MOVIES' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='ROMANCE MOVIES' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='DOCUMENTARIES' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
