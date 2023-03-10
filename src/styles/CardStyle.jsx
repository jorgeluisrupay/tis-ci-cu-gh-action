import styled from 'styled-components';

export const ContainerBox = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    gap: 50px;
    div{
        height: 600px;
        @media screen and (max-width: 1000px) {
        margin-bottom: 10em;
    }
        h2{
            color: #fff;
            margin-bottom: 1em;
        }
    }
    @media screen and (max-width: 1000px) {
        gap: 15px;
    }
    margin-bottom: 5em;
`
export const TitleGenero = styled.h2`
    color: #fff;
    font-size: 26px;
    font-weight: bold;
    line-height: 2;
    margin-left: 30px;
`

export const CardContainer = styled.div`
    display: grid;
    padding: 10px;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(293px, 1fr));
`

export const CardSala = styled.div`
    width: auto;
    height: auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 25px 5px rgba(0,0,0,0.1);
    margin-bottom: 10px;
    padding: 10px 20px;
    div{
        img{
            width: 100%;
            object-fit: cover;
        }
    }
`
export const CardSalaDetalles = styled.div`
    width: 500px;
    height: auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 25px 5px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    padding: 30px 0px;
    @media screen and (max-width: 1000px){
        width: 293px;
    }
`
export const CardEstado = styled.div`
    padding: 25px;
    display: flex;
    justify-content: space-between;
    img{
        width: 80px;
        height: 80px;
    }
`
export const CardInfo1 = styled.div`
    h4{
        font-size: 20px;
        font-weight: 600;
        color: #4D4F5C;
    }
    p{
        font-size: 20px;
        font-weight: bold;
        color: #57D2A9;
    }
`
export const CardInfoSub = styled.div`
    padding: 5px 25px;
    display: flex;
    justify-content: space-between;
    h4{
        font-size: 16px;
        font-weight: 600;
        color: #131523;
    }
    h3{
        font-size: 16px;
        font-weight: 600;
        color: #4D4F5C;
    }
    p{
        font-size: 16px;
        font-weight: 500;
        color: #4D4F5C;
    }
`
export const Hr = styled.hr`
    color: #D7DBEC;
    margin: 10px 0; 
`