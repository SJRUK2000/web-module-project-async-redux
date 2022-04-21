import React from 'react';
import { connect } from 'react-redux';
import GifList from  './componenets/GifList'
import GifForm from './componenets/GifForm';

import './App.css';

function App(props) {
   const { loading, gifs } = props;
  return (
    <div className="App">
      <h1>Search For Gifs</h1>
      <GifForm/>
      {
        loading ? <h3>Loading on up!</h3> : <GifList gifs={gifs}/>
        }

    </div>
  );
}

const mapStateToProps = state => {
  return {
    gifs: state.gifs,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(App);