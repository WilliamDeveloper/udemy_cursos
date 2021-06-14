import P from 'prop-types';
import { PostsContext } from './context';
export const PostsProvider = ({ children }) => {
  return <PostsContext.Provider>{children}</PostsContext.Provider>;
};

PostsProvider.propTypes = {
  children: P.oneOfType([P.string, P.element, P.node]).isRequired,
};
