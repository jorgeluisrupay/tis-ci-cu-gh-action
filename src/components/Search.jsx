import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchMovieDB } from "../api/mobieDB";
import { CardContainer, CardSala, TitleGenero } from "../styles/CardStyle";
import {  FormBox } from "../styles/UsablesStyle";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const getMovieSearch = async () => {
    try {
      const respuesta = await searchMovieDB.get(`/movie?query=${search}`);
      console.log(respuesta.data);
      setItems(respuesta.data.results);
      setSearch("");
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //validar que no haya campos vacios
    if (search.trim() === "") {
      return;
    }
    getMovieSearch();
  };
  const navigate = useNavigate();
  const NavegatorDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      <TitleGenero>Buscar Pelicula</TitleGenero>
      <form onSubmit={handleSubmit}>
        <FormBox>
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            onChange={handleChange}
          />
        </FormBox>
      </form>

      <br />
      {!isLoading && (
        <CardContainer>
          {items.map((item) => {
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
      )}
    </div>
  );
};
