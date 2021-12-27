const paginate = (posts) => {
   const postsPerPage= 10;
   const numberOfPages = Math.ceil(posts.length/postsPerPage);

   const newPosts = Array.from({length:numberOfPages},(_,i) =>{
   	   const start = i*postsPerPage;
   	   return posts.slice(start,start+postsPerPage);
   });

   return newPosts;
};
export {paginate};