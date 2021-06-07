import  React from 'react'
import './styles.css';
import {loadPosts} from "./../../utils/load-posts";
import {Posts} from "./../../components/Posts";
import {Button} from "../../components/Button";
import {TextInput} from "../../components/TextInput/TextInput";


export class Home extends React.Component{

  state = {
    name: 'William',
    count : 0,
    posts:[],
    allPosts:[],
    page : 0,
    postsPerPage:53,
    searchValue : ''
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


  handleChange = (event)=>{
    const {value} = event.target;
    this.setState({ searchValue : value })

  }



  render() {
    const {posts, page, postsPerPage, allPosts, searchValue} = this.state
    const noMorePosts = page + postsPerPage >= allPosts.length ;

    const filteredPosts = !!searchValue ?
        posts.filter((post)=>{
          return post.title.toLowerCase().includes(searchValue.toLowerCase())
        })
        : posts;

    return (
        <section className="container">

          <div className="search-container">

            {!!searchValue &&(
                <>
                  <h1>Search value: {searchValue} </h1>
                </>
            )}

            <TextInput searchValue={searchValue} handleChange={this.handleChange}/>

          </div>

          {filteredPosts.length > 0 && (
              <Posts posts={filteredPosts}/>
          )}

          {filteredPosts.length === 0 && (
              <p>Nao existem post =(</p>
          )}



          <div className="button-container">
            {!searchValue &&(
                <Button
                    text={"Load More Posts"}
                    onClick={this.loadMorePosts}
                    disabled={noMorePosts}
                />
            )}

          </div>

        </section>
    )
  }


}



