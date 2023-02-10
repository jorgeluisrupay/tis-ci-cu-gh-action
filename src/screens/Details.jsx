import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { useMoviesDetail } from "../hooks/useMovieDetail";
import {
  BtnGoBack,
  CompanyElenco,
  CompanyMovie,
  ContainerDetail,
  DetailLeft,
  DetailRight,
  Genres,
} from "../styles/DetailStyle";
import {
  ContainerLoading,
  ContenedorModulo,
  TitlePage,
} from "../styles/UsablesStyle";

export const Details = () => {
  const { id } = useParams();
  const { isLoading, cast, movieFull } = useMoviesDetail(id);

  const navigate = useNavigate();

  console.log(cast, "cast");
  console.log(movieFull, "movie");

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
        <h1>Detalle de {movieFull.title} </h1>
      </TitlePage>
      <br />
      <ContainerDetail>
        <DetailLeft>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieFull.poster_path}`}
            alt={movieFull.id}
          />
          <h2>
            Fecha de estreno: <span>{movieFull.release_date}</span>{" "}
          </h2>
          <h2>
            Duración: <span>{movieFull.runtime} min</span>{" "}
          </h2>
        </DetailLeft>
        <DetailRight>
          <h2>{movieFull.overview}</h2>
          <h2>Genero</h2>
          <Genres>
            {movieFull.genres.map((item) => {
              return <div key={item.id}>{item.name}</div>;
            })}
          </Genres>
          <br />
          <h2>PRODUCCIONES</h2>
          <CompanyMovie>
            {movieFull.production_companies.map((item) => {
              return (
                <div key={item.id}>
                  <img
                    src={
                      item.logo_path !== null
                        ? `https://image.tmdb.org/t/p/w500${item.logo_path}`
                        : "https://image.freepik.com/iconos-gratis/signo-de-interrogacion_318-36153.jpg"
                    }
                    alt={item.id}
                  />
                  <h2>{item.name}</h2>
                </div>
              );
            })}
          </CompanyMovie>
          <BtnGoBack onClick={() => navigate(-1)}>
            Regresar al Menú
          </BtnGoBack>
        </DetailRight>
      </ContainerDetail>
      <br />

      <h2
        style={{
          padding: "10px 50px",
        }}
      >
        Elenco
      </h2>
      <CompanyElenco>
        {cast.map((item) => {
          return (
            <div key={item.id}>
              <img
                src={
                  item.profile_path !== null
                    ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                    : "https://image.freepik.com/iconos-gratis/signo-de-interrogacion_318-36153.jpg"
                }
                alt={item.id}
              />
              <h2>{item.name}</h2>
            </div>
          );
        })}
      </CompanyElenco>
    </ContenedorModulo>
  );
};
