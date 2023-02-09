import {render,screen,fireEvent} from '@testing-library/react'
import { AcceptCookis } from '../components/AcceptCookis';

describe('AcceptCookis component',() => {

    let checkbox;
    let article;
    const acceptCookis = () => render(<AcceptCookis />);
    beforeEach(() => {
        acceptCookis();
        //screen.debug();
        checkbox = screen.getByLabelText('Acepta las cookies');
        article = screen.getByRole('article',{name : 'Confirmación cookies'});
    })

    test('Si el checkbox esta en el componente y está desactivado', () => {
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
    })
    test('Si cambia el texto al pulsar el checkbox', () => {
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
        expect(article.textContent).toBe('Cookies aceptados')
    })
} )