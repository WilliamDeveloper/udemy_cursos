import { useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

export const Abc = () => {
  const { slug, id } = useParams();

  const location = useLocation();
  console.log(' location ', location);

  // const history = useHistory();
  // console.log(' history ', history);
  // useEffect(() => {
  //   setTimeout(() => {
  //     history.push('/');
  //   }, 5 * 1000);
  // }, [history]);

  return (
    <div>
      <h1>
        ABC {slug} {id}
      </h1>
    </div>
  );
};
