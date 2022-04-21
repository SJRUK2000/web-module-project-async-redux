import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import GifList from  './componenets/GifList'
import GifForm from './componenets/GifForm';

import { fetchStart } from './actions.js';
import { fetchSuccess } from './actions.js';

import './App.css';

function App(props) {
  const { loading, error } = props;

  useEffect(()=> {
    props.fetchStart();
    axios.get("https://api.giphy.com/v1/gifs/search?api_key=ZZNZ4tPNLYI2oz7bBOmcvpQpyX3hyvAH&q=Biggie")
      .then (res=>{
        props.fetchSuccess(res.data.data);
      })
  }, []);

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


export default connect(mapStateToProps, {fetchStart, fetchSuccess})(App);