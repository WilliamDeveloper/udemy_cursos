// import P from 'prop-types';
import './styles.css';
import { PostsProvider } from '../../contexts/PostsProvider';
import { CounterProvider } from '../../contexts/CounterProvider';
import { Posts } from './../../components/Posts';
// import React, { useEffect, useState, useRef } from 'react';

function Index() {
  // console.log('setdelay ', setDelay, incrementor, setIncrementor);

  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <h1>oi</h1>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}

export default Index;
