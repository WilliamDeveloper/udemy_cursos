import './App.css';
import  React from 'react'

class App extends React.Component{


  state = {
    name: 'William',
    count : 0,
    posts:[]
  }

  componentDidMount() {
      console.log("oi")
      this.setState({
          posts:[
              {
                  id:1,
                  title: 'o titulo é blau1',
                  body: 'o corpo1'
              },
              {
                  id:2,
                  title: 'o titulo é blau2',
                  body: 'o corpo2'
              },
              {
                  id:3,
                  title: 'o titulo é blau3',
                  body: 'o corpo3'
              },
          ]
      })
  }

  timeoutUpdate = null

  componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('oi2')
      // this.handleTimeout()
  }

  handleTimeout = ()=>{
    const {count} = this.state
    this.timeoutUpdate = setTimeout( ()=>{
        this.setState({count: count +1})
    },1000)
  }

    render() {
    const {posts, count} = this.state
    return (
        <div className="App">
            <h1>{count}</h1>
            {
                posts.map( (post)=>{
                    return (
                        <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>

                    )
                })
            }
        </div>
    )
  }


}


export default App;
