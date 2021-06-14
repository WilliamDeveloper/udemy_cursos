// import P from 'prop-types';
import './styles.css';
import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from './../../components/Posts';
// import React, { useEffect, useState, useRef } from 'react';

function Index() {
  // console.log('setdelay ', setDelay, incrementor, setIncrementor);

  return (
    <PostsProvider>
      <div>
        <h1>oi</h1>
        <Posts />
      </div>
    </PostsProvider>
  );
}

export default Index;
