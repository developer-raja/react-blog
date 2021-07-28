import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';
const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blogs,
    isloading,
    error,
  } = useFetch(
    'https://my-json-server.typicode.com/developer-raja/json-server/' + id
  );
  const history = useHistory();

  const handleClick = () => {
    fetch(
      'https://my-json-server.typicode.com/developer-raja/json-server/' +
        blogs.id,
      {
        method: 'DELETE',
      }
    ).then(() => {
      history.push('/');
    });
  };

  return (
    <div className='blog-details'>
      {isloading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <p>Written by {blogs.author}</p>
          <div>{blogs.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
