import { useContext, useEffect, useRef } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { CounterContext } from '../../contexts/CounterProvider/context';
export const Posts = () => {
  const isMounted = useRef(true);

  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;
  console.log(postsContext, postsState, postsDispatch);

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;
  console.log(counterState, counterDispatch);

  useEffect(() => {
    console.log('carregue os posts', isMounted.current);
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
      console.log('carregue os posts', isMounted.current);
    };
  }, [postsDispatch]);
  return (
    <div>
      <button>counter {counterState.counter}</button>
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
