import {render, screen} from "@testing-library/react";
import {Posts} from ".";

import postsPropsMock from './mock'

const props = postsPropsMock

describe('<Posts />',()=>{

    it('should render Posts',()=>{

        // @ts-ignore
        render(<Posts {...props} />)
        expect(screen.getAllByRole('heading',{name: /title/i})).toHaveLength(3)
        // debug()
        //
        // expect(screen.getByRole('img', {name: props.title})).toHaveAttribute("src",props.cover)
        // expect(screen.getByRole('heading', {name: props.title+"-"+props.id})).toBeInTheDocument()
        // expect(screen.getByText(props.body)).toBeInTheDocument()
    })

})
