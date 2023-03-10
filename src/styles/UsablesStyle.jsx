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
  padding-top: 30px;
  background-color: #000;
  padding: 50px;
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
export const FormBox = styled.div`
position: relative;
padding: 1em 3em;
  input{
    width: 100%;
    height: 50px;
    border: 2px solid #aaa;
    border-radius: 20px;
    margin: 8px 0;
    outline: none;
    padding: 8px;
    box-sizing: border-box;
    transition: 0.3s;
    padding-left: 50px;
    color: #fff;
    &:focus{
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
            }
    }
  i{
    position: absolute;
    left: 0;
    top: 15px;
    padding: 9px 18px;
    color: #fff;
    transition: 0.3s;
  }
  input:focus + i{
    color: dodgerBlue;
  }
  .btn{
    border: none;
    background: #57B8FF;
    color: #fff;
    padding-left: 0;
    cursor: pointer;
  }
`