import {render, screen} from '@testing-library/react';
import ButtonGroup from './ButtonGroup';

test('button has initial correct color', () => {
    render(<App />);
    //find an element with a role of button and text of 'Turn to Blue'
    const colorButton = screen.getByRole('button',{ name: 'Turn to Blue'});

    //expect the bgcolor to be red initially
    expect(colorButton).toHaveStyle({backgroundColor: 'red'})
})

test('button turns blue when clicked', () => {
    render(<App />);
    const colorButton = screen.getByRole('button',{ name: 'Turn to Blue'});
})
