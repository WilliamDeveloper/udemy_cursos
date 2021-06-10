import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, screen, waitForElementToBeRemoved} from "@testing-library/react";
import {Home} from ".";

const handlers=[
  rest.get("https://jsonplaceholder.typicode.com/photos", async (req,res,ctx)=> {
    res(ctx.json(
        [
          {
            userId: 1,
            id: 1,
            title: 'title1',
            body: 'body1',
            url: 'img1.jpg',
          },
          {
            userId: 2,
            id: 2,
            title: 'title2',
            body: 'body2',
            url: 'img1.jpg',
          },
          {
            userId: 3,
            id: 3,
            title: 'title3',
            body: 'body3',
            url: 'img3.jpg',
          },
        ]
    ))
  })
]

const server = setupServer(...handlers)

describe('<Home />',()=>{

  beforeAll(()=>{
    server.listen()
  })

  afterEach(()=>{
    server.resetHandlers()
  })

  afterAll(()=>{
    server.close()
  })

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
