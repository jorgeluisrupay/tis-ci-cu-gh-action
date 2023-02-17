import styled from "styled-components";

export const ContainerDetail = styled.div`
  padding: 10px 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #fff;
  gap: 2em;
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    }
`;
export const DetailLeft = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
@media screen and (max-width: 1000px) {
    display: grid;
    place-items: center;
    text-align: center;
    }
  img {
    width: 400px;
    margin-bottom: 1em;
    
  }
  h2 {
    font-size: 1em;
  }
`;
export const CompanyMovie = styled.div`
  margin-top: 1em;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 200px;
      object-fit: cover;
      background-color: #fff;
      border-radius: 1em;
      padding: 1em;
    }
    h2 {
      font-size: 15px;
    }
  }
`;
export const DetailRight = styled.div`
h2 {
      font-size: 15px;
    }
`;
export const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-top: 1em;
  div {
    text-align: center;
    background-color: #fff;
    color: #000;
    padding: 0.5em 2em;
    font-weight: bold;
    border-radius: 2em;
    cursor: pointer;
  }
`;
export const CompanyElenco = styled.div`
  margin: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1em;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 200px;
      object-fit: cover;
      background-color: #fff;
      border-radius: 1em;
      padding: 1em;
    }
    h2 {
      font-size: 15px;
    }
  }
`;

export const BtnGoBack = styled.div`
    margin: 3em auto 0 auto;
    cursor: pointer;
    width: 50%;
    text-align: center;
    background-color: #fff;
    color: #000;
    font-weight: bold;
    padding: 0.5em;
    border-radius: 3em;
    &:hover{
        background-color: #000;
        color: #fff;
        outline: 1px solid #fff;
    }
`