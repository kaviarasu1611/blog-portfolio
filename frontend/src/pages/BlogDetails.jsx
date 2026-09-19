import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function BlogDetails() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:5000";

  useEffect(() => {
    axios
      .get(`${API_URL}/api/blog/${id}`)
      .then((response) => {
        setBlog(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Failed to fetch blog:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="blog-details">
        <p>Loading article...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="blog-details">
        <h2>Article Not Found</h2>
        <Link to="/" className="back-button">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="blog-details">

      <div className="blog-details-container">

        <span className="blog-details-date">
          {blog.date}
        </span>

        <h1>{blog.title}</h1>

        <div className="blog-details-line"></div>

        <p className="blog-details-text">
          {blog.text}
        </p>

        <Link to="/#blog" className="back-button">
          ← Back to Articles
        </Link>

      </div>

    </section>
  );
}

export default BlogDetails;