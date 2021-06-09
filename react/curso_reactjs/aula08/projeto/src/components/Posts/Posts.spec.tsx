import {render, screen} from "@testing-library/react";
import {Posts} from ".";

import postsPropsMock from './mock'

const props = postsPropsMock

describe('<Posts />',()=>{

    it('should render Posts',()=>{

        // @ts-ignore
        render(<Posts {...props} />)
        expect(screen.getAllByRole('heading',{name: /title/i})).toHaveLength(3)
        expect(screen.getAllByRole('img',{name: /title/i})).toHaveLength(3)
        expect(screen.getAllByText(/body/i)).toHaveLength(3)

    })

    it('should match snapshot ',()=>{
        const {container} = render(<Posts {...props} />)
        expect(container.firstChild).toMatchSnapshot()

    })

})
