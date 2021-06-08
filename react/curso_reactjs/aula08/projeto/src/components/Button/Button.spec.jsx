import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Button} from '.';

describe('<Button />',()=>{

  it('should render the button with the text "load more" ',()=>{
    render(<Button text="Load More"/>)

    expect.assertions(1)

    const button = screen.getByRole('button', {name: /load more/i})
    expect(button).toBeInTheDocument()
  })

  it('should call function on button click" ',()=>{

    const fn = jest.fn()
    render(<Button text="Load More" onClick={fn}/>)

    // expect.assertions(1)

    const button = screen.getByRole('button', {name: /load more/i})
    userEvent.click(button)
    fireEvent.click(button)

    expect(fn).toHaveBeenCalled()
    expect(fn).toHaveBeenCalledTimes(2)


  })
  it('should be disabled when disabled is true" ',()=>{

    const fn = jest.fn()
    render(<Button text="Load More" disabled={true}/>)

    const button = screen.getByRole('button', {name: /load more/i})


    expect(button).toBeDisabled()



  })
  it('should be disabled when disabled is true" ',()=>{

    const fn = jest.fn()
    render(<Button text="Load More" disabled={false}/>)

    const button = screen.getByRole('button', {name: /load more/i})


    expect(button).toBeEnabled()



  })


})
