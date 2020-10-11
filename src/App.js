import React, { useEffect } from 'react';
import { connect} from 'react-redux';
import './App.css';
import {getImages} from './actions/actions'
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Modal from './components/modal/Modal';
import Header from './components/Header';
import Spiner from './components/Spiner';

function App(props) {

  useEffect(() => {
    props.getImages()
  }, [])

  if(props.isLoad){
    return(
        <Spiner/> 
    )
  }

  return (
    <div className="container">
        <Header/>
        <Gallery/>
        {props.isOpen ? <Modal/> : null}
        <Footer/>
    </div>
  );
}

const mapStateToProps = state => {
    console.log(state.image.isOpen);
  return ({
    isOpen: state.image.isOpen, 
    isLoad: state.loader.isLoading
  })
}

export default connect(mapStateToProps, {getImages})(App);
