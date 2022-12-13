import { useMemo } from "react";

export const useSortedPosts = (posts, filter) => {
  const sortedPosts = useMemo(() => {
    console.log("sadasdas");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts, filter) => {
  const sortedPosts = useSortedPosts(posts, filter);

  const findPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  return findPosts;
};
