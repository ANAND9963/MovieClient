import { Paper } from "@mui/material";
import React from "react";
import "./Hero.css";
import Carousel from "react-material-ui-carousel";

const Hero = ({ movies }) => {
  return (
    <div>
      <Carousel>
        {movies &&
          movies.map((movie, index) => {
            return (
              <Paper key={index}>
                <div className="movie-card-container">
                  <div className="movie-card" style={{"--img":`url(${movie.backdrops[0]})`}}>
                    <div className="movie-detail">
                      <div className="movie-poster">
                        <img src={movie.poster} alt="" />
                      </div>
                      <div className="movie-title">
                        <h4>{movie.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            );
          })}
      </Carousel>
    </div>
  );
};

export default Hero;
