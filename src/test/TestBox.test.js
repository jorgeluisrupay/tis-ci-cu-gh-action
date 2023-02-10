import {render,screen,fireEvent} from '@testing-library/react'
import { TextBox } from '../components/TextBox';
//import '@testing-library/jest-dom/extend-expect';
//import { prettyDOM } from '@testing-library/react'; 


//prettyDOM me muestra mejor el componente seleccionado 


describe('TextBox component',() => {

    let article;
    let button;
    const textBox = () =>  render(<TextBox />);
    beforeEach(() => {
        textBox();
        article = screen.getByRole('article',{name: 'párrafo principal'})
        button = screen.getByRole('button',{name: 'Pulsa para modificar'})
    })

    test('La caja de texto se encuentra en el documento', () => {
        // render(<TextBox />);
        // const article = screen.getByRole('article',{name: 'párrafo principal'})
        expect(article).toBeInTheDocument();
    });

    test('la caja con el texto tiene un color inicial',() =>{
        // render(<TextBox />);
        // const article = screen.getByRole('article',{name: 'párrafo principal'})
        expect(article).toHaveStyle({
            backgroundColor: 'indigo'
        });
    })

    test('si al pulsar el boton cambia color de fondo',() => {
        fireEvent.click(button);
        expect(article).toHaveStyle({
            backgroundColor: 'tomato'
        });
    })
} )