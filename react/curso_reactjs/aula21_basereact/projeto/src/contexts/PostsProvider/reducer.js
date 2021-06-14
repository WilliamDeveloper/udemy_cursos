import *  as types from './types';
export const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_SUCCESS : {
      console.log('state ', action.type);
      return { ... state , posts: action.payload};
    }
  }
  console.log('nao encontrei a action');
  return { ...state, }
};
