import  React from 'react'
import './styles.css';
import {loadPosts} from "./../../utils/load-posts";
import {Posts} from "./../../components/Posts";


export class Home extends React.Component{

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



