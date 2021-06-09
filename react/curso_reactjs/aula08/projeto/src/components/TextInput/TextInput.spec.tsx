import {render, screen} from "@testing-library/react";
import {TextInput} from ".";
import userEvent from "@testing-library/user-event";

// import postsPropsMock from './mock'



describe('<TextInput />',()=>{

    it('should have a value of searchvalue',()=>{

        const fn = jest.fn()

        // @ts-ignore
        const {debug} = render(<TextInput handleChange={fn} searchValue={'testando'} />)
        const input = screen.getByPlaceholderText(/type your search/i)
        expect(input).toBeInTheDocument()
        // @ts-ignore
        expect(input.value).toBe('testando')
    })
    it('should call handleChange function on each key pressed',()=>{

        const fn = jest.fn()

        // @ts-ignore
        const {debug} = render(<TextInput handleChange={fn} />)
        const input = screen.getByPlaceholderText(/type your search/i)
        const value = "o valor"

        userEvent.type(input, value)
        // @ts-ignore
        expect(input.value).toBe(value)
        expect(fn).toBeCalledTimes(value.length)



        debug()
    })

    it('should match snapshot ',()=>{
        const fn = jest.fn()
        const {container} = render(<TextInput handleChange={fn}  searchValue={'testando'} />)
        expect(container.firstChild).toMatchSnapshot()

    })

})
