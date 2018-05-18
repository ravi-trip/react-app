import { FETCH_POSTS, NEW_POST } from './types';

export  const fetchPosts = () => dispatch => {
    console.log('fetch posts...');  
    fetch('https://jsonplaceholder.typicode.com/posts') // fetch return a promise
            .then(res => res.json())
            .then(posts => 
                dispatch({
                    type: FETCH_POSTS,
                    payload: posts
                })
            );
};

export  const createPost = (postData) => dispatch => {
    console.log('create Post...');  
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(data => console.log(data));
};