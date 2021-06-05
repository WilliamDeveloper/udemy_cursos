import './App.css';
import  React from 'react'

class App extends React.Component{

  state = {
    name: 'William',
    count : 0,
    posts:[]
  }



  //quando o componente vai ser montado
  componentDidMount() {
      const url = 'https://jsonplaceholder.typicode.com/posts'
      // console.log("oi")
      // this.setState({
      //     posts:[
      //         {
      //             id:1,
      //             title: 'o titulo é blau1',
      //             body: 'o corpo1'
      //         },
      //         {
      //             id:2,
      //             title: 'o titulo é blau2',
      //             body: 'o corpo2'
      //         },
      //         {
      //             id:3,
      //             title: 'o titulo é blau3',
      //             body: 'o corpo3'
      //         },
      //     ]
      // })
  }



    //quando o componente vai ser atualizado
  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  //quando o componente vai ser desmontado
  componentWillMount() {
  }



  render() {
    const {posts} = this.state
    return (
        <div className="App">

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
