import getPosts from '@utils/getPosts';
import React, { useEffect, useState } from 'react';

export const useGetPosts = (getLastItems) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = ((context) => {
      return getPosts(context)
    })(require.context('../content/posts', true, /\.md$/));

    setPosts(posts);

  }, []);

  const lastItems = getLastItems ? posts.slice(-getLastItems) : posts;

  return [posts, lastItems];
};