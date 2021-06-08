import {render, screen} from "@testing-library/react";
import {PostCard} from ".";

import postCardPropsMock from './mock'

const props = postCardPropsMock
describe('<PostCard />',()=>{

    it('should be render PostCard correctly',()=>{

        const {debug} = render(<PostCard {...props} />)
        debug()

        expect(screen.getByRole('img', {name: props.title})).toHaveAttribute("src",props.cover)
        expect(screen.getByRole('heading', {name: props.title+"-"+props.id})).toBeInTheDocument()
    })


})
