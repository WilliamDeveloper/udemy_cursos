import { useContext, useEffect } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';
export const Posts = () => {
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;
  console.log(postsContext, postsState, postsDispatch);
  useEffect(() => {
    console.log('carregue os posts');
    loadPosts(postsDispatch);
  }, [postsDispatch]);
  return (
    <div>
      <h1>hola</h1>

      {postsState.loading && (
        <p>
          <strong>Carregando posts ...</strong>
        </p>
      )}

      {postsState.posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};
