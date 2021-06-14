import { useContext } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
export const Posts = () => {
  const postsContext = useContext(PostsContext);
  console.log(postsContext);
  return (
    <div>
      <h1>hola</h1>
    </div>
  );
};
