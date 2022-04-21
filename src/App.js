import React from 'react';
import { connect } from 'react-redux';
import GifList from  './componenets/GifList'
import GifForm from './componenets/GifForm';

import './App.css';

function App(props) {
  const { loading, error } = props;



  return (
    <div className="App">
      <h1>Search For Gifs</h1>
      <GifForm/>
      {
        (error !== '') && <h3>error</h3>
      }
      {
        loading ? <h3>Loading on up!</h3> : <GifList/>
        }

    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error  
  }
}

export default connect(mapStateToProps)(App);