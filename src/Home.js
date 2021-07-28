import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const {
    data: blogs,
    isloading,
    error,
  } = useFetch(
    'https://my-json-server.typicode.com/developer-raja/json-server/blogs'
  );

  // const handleDelete = (id) => {
  //     const newBlogs = blogs.filter(blog => blog.id !== id);
  //     setBlogs(newBlogs)
  // }
  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isloading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
    </div>
  );
};

export default Home;
