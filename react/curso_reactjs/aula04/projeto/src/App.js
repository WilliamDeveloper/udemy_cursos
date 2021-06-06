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
    this.loadPosts()

  }

  loadPosts = async () =>{
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
    const [posts,photos] = await Promise.all([postsResponse,photosResponse]);
    const postsJSON = await posts.json();
    const photosJSON = await photos.json();

    const postsAndPhotos = postsJSON.map((post, index)=>{
      return {
        ...post,
          cover : photosJSON[index].url
      }

    })

    this.setState({posts : postsAndPhotos});
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
          <div className="posts">

              {
                  posts.map( (post)=>{
                      return (
                          <div className="post" key={post.id}>
                            <img src={post.cover} title={post.title}></img>
                            <div  className="post-content">
                              <h1>{post.title}</h1>
                              <p>{post.body}</p>
                            </div>
                          </div>
                      )
                  })
              }
          </div>
        </section>
    )
  }


}


export default App;
