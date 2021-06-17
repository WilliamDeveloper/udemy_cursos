import './styles.css';

import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/CounterProvider';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function App() {
  const history = useHistory();
  console.log(' history ', history);
  useEffect(() => {
    setTimeout(() => {
      history.push('/abc');
    }, 5 * 1000);
  }, [history]);

  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}
