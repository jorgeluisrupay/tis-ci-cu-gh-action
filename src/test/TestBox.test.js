import {render,screen,fireEvent} from '@testing-library/react'
import { TextBox } from '../components/TextBox';
import '@testing-library/jest-dom/extend-expect';
//import { prettyDOM } from '@testing-library/react'; 


//prettyDOM me muestra mejor el componente seleccionado 


describe('TextBox component',() => {

    let article;
    let button;
    beforeEach(() => {
        render(<TextBox />);
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

// test('renders content', () =>{
//         const tesxtBox = {
//             content: 'Props test',
//             important : true
//         }
//     const component = render(<TextBox nameTitle={tesxtBox.content} />)

//     //Muestra que se esta renderiznado
//     component.debug();
//     component.getByText('Props test')
//     component.getByText('Pulsa para modificar')
//     //console.log(component);
//     expect(component.container).toHaveTextContent(tesxtBox.content)
//     const article = component.container.querySelector('article')
//     console.log(prettyDOM(article))

// } )


// test('click para cambiar el bg',() => {
//     const tesxtBox = {
//         content: 'Aea',
//         important : true
//     }

//     //const mochHandler = jest.fn()

//     const component = render(<TextBox nameTitle={tesxtBox.content} />)
//     const button = component.getByText('Pulsa para modificar')
//     //fireEvent es para disparar un evento click
//     fireEvent.click(button)
//     console.log(prettyDOM(button))
//     const article = component.container.querySelector('article')
//     console.log(prettyDOM(article))
//     //expect(mochHandler.mock.calls).toHaveLength(1)
//     //expect(mochHandler).toHaveBeenCalledTimes(1)
// })