import { useContext } from 'react';
import { GlobalContext } from '../../contexts/App';
// eslint-disable-next-line
export const P = () => {
  const theContext = useContext(GlobalContext);
  console.log(theContext);
  const { contextState, setContextState } = theContext;
  return <p onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}>{contextState.body}</p>;
};
