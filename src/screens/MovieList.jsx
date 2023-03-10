import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Loading } from "../components/Loading";
//import { Mobie } from "../components/Mobie";
import { useMovies } from "../hooks/useMovies";
import { CardContainer, CardSala, ContainerBox, TitleGenero } from "../styles/CardStyle";
import {
  ContainerLoading,
  ContenedorModulo,
  TitlePage,
} from "../styles/UsablesStyle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import { Search } from "../components/Search";
import { Button } from "../styles/LoginStyle";

export const MovieList = ({logout}) => {
  const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies();
  console.log(nowPlaying, popular, topRated, upComing, isLoading, "data");
  console.log(nowPlaying, "en cine");
  const navigate = useNavigate();

  const NavegatorDetail = (id) => {
    navigate(`/movie/detail/${id}`);
  };

  const CerrarSesion = () =>{
    logout();
    localStorage.removeItem('token');
  }

  if (isLoading) {
    return (
      <ContainerLoading>
        <Loading />
      </ContainerLoading>
    );
  }

  return (
    <ContenedorModulo>
      <TitlePage tabla="tabla">
        <h1>App Pelis</h1>
        <Button onClick={CerrarSesion}>Cerrar sesion</Button>
      </TitlePage>
      <br />

      <ContainerBox>
        <div>
          <h2>En cine</h2>
          <Carousel
            autoFocus={true}
            autoPlay
            dynamicHeight={true}
            infiniteLoop={true}
            width={400}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            selectedItem={5}
          >
            {nowPlaying.map((item) => {
              return (
                <div
                  key={item.id}
                  onClick={() => NavegatorDetail(item.id)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    alt={item.id}
                  />
                  <p className="legend">{item.title}</p>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div>
          <h2>Proximamente</h2>
          <Carousel
            autoFocus={true}
            autoPlay
            dynamicHeight={true}
            infiniteLoop={true}
            width={400}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            selectedItem={5}
          >
            {upComing.map((item) => {
              return (
                <div
                  key={item.id}
                  onClick={() => NavegatorDetail(item.id)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    alt={item.id}
                  />
                  <p className="legend">{item.title}</p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </ContainerBox>
      <br />
      <br />

      {true && <Search />} 
      <br />
      <br />

      <TitleGenero>
            Popular
      </TitleGenero>
      <CardContainer>
        {popular.map((item) => {
          return (
              <CardSala key={item.id} onClick={() => NavegatorDetail(item.id)}>
              <div
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    alt={item.id}
                  />
                  <p className="legend">{item.title}</p>
                </div>
              </CardSala>
          );
        })}
      </CardContainer>

      <br />
      <br />
      <TitleGenero>
            Top Valorados
      </TitleGenero>
      <CardContainer>
        {topRated.map((item) => {
          return (
              <CardSala key={item.id} onClick={() => NavegatorDetail(item.id)}>
              <div
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    alt={item.id}
                  />
                  <p className="legend">{item.title}</p>
                </div>
              </CardSala>
          );
        })}
      </CardContainer>
      <br />
      <br />
    </ContenedorModulo>
  );
};
