import styled from "styled-components";

export const TitlePage = styled.div`
  h1 {
    font-size: 26px;
    font-weight: bold;
    line-height: 2;
    color: #fff;
    @media screen and (max-width: 600px) {
      font-size: 20px;
    }
    text-align: center;
  }
  h4 {
    font-size: 15px;
    font-weight: medium;
    color: #3257db;
  }
`;
export const ContenedorModulo = styled.div`
  width: 100%;
  color: #fff;
`;
export const TablaContenedor = styled.div``;
export const TablaSinDatos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  font-size: 26px;
  color: #0438af;
  div {
    text-align: center;
  }
`;
export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
