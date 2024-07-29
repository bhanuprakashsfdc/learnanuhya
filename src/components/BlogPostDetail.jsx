import React from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from '../data/blogData';

const BlogPostDetail = () => {
  const { slug } = useParams(); // Get the slug from the URL params
  const blogPost = blogData.find(post => post.slug === slug); // Find the blog post by slug

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <img src={blogPost.imageUrl} className="card-img-top" alt={blogPost.title} />
            <div className="card-body">
              <h1 className="card-title">{blogPost.title}</h1>
              <p className="card-text"><strong>Tag:</strong> {blogPost.tag}</p>
              <p className="card-text">{blogPost.description}</p>
              <p className="card-text"><small><strong>Created Date:</strong> {new Date(blogPost.createdDate).toLocaleDateString()}</small></p>
              <a className="btn btn-primary" href={blogPost.signupUrl} role="button" target="_blank" rel="noopener noreferrer">SignUp</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
