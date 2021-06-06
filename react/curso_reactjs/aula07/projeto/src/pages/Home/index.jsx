import  React from 'react'
import './styles.css';
import {loadPosts} from "./../../utils/load-posts";
import {Posts} from "./../../components/Posts";
import {Button} from "../../components/Button";


export class Home extends React.Component{

  state = {
    name: 'William',
    count : 0,
    posts:[],
    allPosts:[],
    page : 0,
    postsPerPage:53
  }



  //quando o componente vai ser montado
  async componentDidMount() {
    await this.loadPosts()

  }

  loadPosts= async ()=>{
    const {page, postsPerPage} = this.state

    const postsAndPhotos = await loadPosts()
    this.setState({
      posts: postsAndPhotos.slice(page,postsPerPage),
      allPosts : postsAndPhotos
    })
  }

  loadMorePosts =  ()=>{
    console.log('load more posts')

    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state

    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push( ... nextPosts)

    this.setState({
      posts,
      page: nextPage
    })




  }



  //   //quando o componente vai ser atualizado
  // componentDidUpdate(prevProps, prevState, snapshot) {
  // }
  //
  // //quando o componente vai ser desmontado
  // componentWillMount() {
  // }



  render() {
    const {posts, page, postsPerPage, allPosts} = this.state
    const noMorePosts = page + postsPerPage >= allPosts.length

    return (
        <section className="container">
          <Posts posts={posts}/>

          <div className="button-container">
            <Button
                text={"Load More Posts"}
                onClick={this.loadMorePosts}
                disabled={noMorePosts}
            />
          </div>

        </section>
    )
  }


}



