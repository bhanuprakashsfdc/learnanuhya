import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

const RecentPosts = () => {
  // Sort blog posts by date in descending order and get the 5 most recent
  const recentPosts = [...blogData].sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate)).slice(0, 5);

  return (
    <div className="recent-posts">
      <h3>Recent Posts</h3>
      <ul>
        {recentPosts.map(post => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}.html`}>
              <img src={post.imageUrl} alt={post.title} className="recent-post-image" />
              <div className="recent-post-info">
                <h4>{post.title}</h4>
                <p>{new Date(post.createdDate).toLocaleDateString()}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPosts;
