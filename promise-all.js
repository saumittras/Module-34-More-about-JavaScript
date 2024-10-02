const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users");
const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts");
const fetchComments = fetch("https://jsonplaceholder.typicode.com/comments");

// Run all fetch requests cincurrently

Promise.all([fetchUsers, fetchPosts, fetchComments])
  .then((response) => {
    return Promise.all(response.map((res) => res.json()));
  })
  .then((data) => {
    const [users, posts, comments] = data;
    console.log("Users: ", users);
    console.log("posts: ", posts);
    console.log("Comments: ", comments);
  })

  .catch((error) => {
    console.error("Error fetching data:  ", error);
  });
