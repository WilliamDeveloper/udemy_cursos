import {render, screen} from "@testing-library/react";
import {TextInput} from ".";

// import postsPropsMock from './mock'



describe('<TextInput />',()=>{

    it('should have a value of searchvalue',()=>{

        const fn = jest.fn()

        // @ts-ignore
        const {debug} = render(<TextInput handleChange={fn} searchValue={'testando'} />)
        const input = screen.getByPlaceholderText(/type your search/i)
        expect(input).toBeInTheDocument()
        expect(input.value).toBe('testando')
    })
    it('should call handleChange function on each key pressed',()=>{

        const fn = jest.fn()

        // @ts-ignore
        const {debug} = render(<TextInput handleChange={fn} searchValue={'testando'} />)

        debug()
    })

    // it('should match snapshot ',()=>{
    //     const {container} = render(<TextInput {...props} />)
    //     expect(container.firstChild).toMatchSnapshot()
    //
    // })

})
