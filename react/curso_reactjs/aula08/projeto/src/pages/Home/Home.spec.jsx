import {render, screen, waitForElementToBeRemoved} from "@testing-library/react";
import {Home} from ".";

describe('<Home />',()=>{

  test('should be render search',async ()=>{
    render(<Home />)
    const noMorePosts = screen.getByText('Nao existem post =(')
    await waitForElementToBeRemoved(noMorePosts)
    screen.debug()
  })
  it('dummy two',()=>{
    expect(1).toBe(1)
  })
  it('dummy threes',()=>{
    expect(1).toBe(1)
  })

})
