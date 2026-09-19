import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:5000";

  useEffect(() => {
    axios
      .get(`${API_URL}/api/blog`)
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Failed to fetch blogs:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="section" id="blog">

      <div className="section-heading">
        <span>04.</span>
        <h2>Latest Articles</h2>
      </div>

      {loading ? (
        <p className="blog-status">Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p className="blog-status">No blogs available.</p>
      ) : (
        <div className="blog-grid">

          {blogs.map((blog) => (
            <article className="blog-card" key={blog._id}>

              <span>{blog.date}</span>

              <h3>{blog.title}</h3>

              <p>{blog.text}</p>

              <Link
                to={`/blog/${blog._id}`}
                className="read-article"
              >
                Read Article →
              </Link>

            </article>
          ))}

        </div>
      )}

    </section>
  );
}

export default Blog;