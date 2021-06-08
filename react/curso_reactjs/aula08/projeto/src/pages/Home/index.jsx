import  {Component, useState, useEffect, useCallback} from 'react'
import './styles.css';
import {Posts} from "./../../components/Posts";
import {loadPosts} from "./../../utils/load-posts";
import {Button} from "../../components/Button";
import {TextInput} from "../../components/TextInput/TextInput";

export const Home = ()=>{

  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [page, setPage] = useState(0)
  const [postsPerPage, setPostsPerPage] = useState(10)
  const [searchValue, setSearchValue] = useState('')

  const noMorePosts = page + postsPerPage >= allPosts.length ;

  const filteredPosts = !!searchValue ?
      posts.filter((post)=>{
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
      : posts;



  const handleLoadPosts= useCallback(async (page, postsPerPage)=>{
    console.log('oi')

    const postsAndPhotos = await loadPosts()

    setPosts( postsAndPhotos.slice(page,postsPerPage) )
    setAllPosts( postsAndPhotos )
  },[])

  useEffect(()=>{
    handleLoadPosts(page, postsPerPage)
  },[handleLoadPosts,page, postsPerPage])

  const loadMorePosts =  ()=>{
    console.log('load more posts')

    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push( ... nextPosts)


    setPosts(posts)
    setPage(nextPage)

  }

  const handleChange = (event)=>{
    const {value} = event.target;

    setSearchValue( value )

  }







  return (
      <section className="container">

        <div className="search-container">

          {!!searchValue &&(
              <>
                <h1>Search value: {searchValue} </h1>
              </>
          )}

          <TextInput searchValue={searchValue} handleChange={handleChange}/>

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
                  onClick={loadMorePosts}
                  disabled={noMorePosts}
              />
          )}

        </div>

      </section>
  )
}

export class Home2 extends Component{

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



