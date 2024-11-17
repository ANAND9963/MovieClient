
import './App.css';
import api from './api/axiosConfig'

import Layout from './components/Layout';
import { useState,useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {

  const[movies , setMovies] = useState();

  const getMovies = async()=>{

    try{

      const response = await api.get("/api/v1/movies");
      
      console.log(response.data);

      setMovies(response.data);

    }catch(err){
      
      console.log(err); 

    }

  }

  useEffect(()=>{
    getMovies();
  }, []);

  return (
    <div className="App">

      <Header>
        
      </Header>

      <Routes>
        <Route path='/' element={<Layout/>} />

        <Route path='/api' element={<Home movies={movies}/>} />



        
      </Routes>
      
     
    </div>
  );
}

export default App;
