import './App.css';
import  React from 'react'
import {loadPosts} from "./utils/load-posts";
import {Posts} from "./components/Posts";

class App extends React.Component{

  state = {
    name: 'William',
    count : 0,
    posts:[]
  }



  //quando o componente vai ser montado
  async componentDidMount() {
    await this.loadPosts()

  }

  loadPosts= async ()=>{
    const postsAndPhotos = await loadPosts()
    this.setState({posts: postsAndPhotos})
  }




  //   //quando o componente vai ser atualizado
  // componentDidUpdate(prevProps, prevState, snapshot) {
  // }
  //
  // //quando o componente vai ser desmontado
  // componentWillMount() {
  // }



  render() {
    const {posts} = this.state
    return (
        <section className="container">
          <Posts posts={posts}/>
        </section>
    )
  }


}


export default App;
