import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../constants/constants';
import FAQ from './FAQ';
import SocialShare from './SocialShare';
import TableOfContents from './TableOfContents';
import RecentPosts from './RecentPosts';
import { generateTocItems } from '../utils/tocUtils';
import { getAdjacentPosts } from '../utils/navigationUtils';

const BlogPostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [views, setViews] = useState(0);
  const [tocItems, setTocItems] = useState([]);
  const [adjacentPosts, setAdjacentPosts] = useState({ previousPost: null, nextPost: null });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/blogs/${slug}`);
        setPost(response.data);

        // Prepend API_BASE_URL to the imageUrl
        setPost(prevPost => ({
          ...prevPost,
          imageUrl: `${API_BASE_URL}${response.data.imageUrl}`
        }));

        setViews((await axios.get(`${API_BASE_URL}/api/views/${slug}`)).data.views);
        setAdjacentPosts(getAdjacentPosts(slug)); // Assuming this function can fetch adjacent posts dynamically
        setTocItems(generateTocItems(response.data.content));
        
        // Update view count
        await axios.post(`${API_BASE_URL}/api/blogs/${slug}/view`);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  const {
    title,
    createdDate,
    description,
    content,
    imageUrl,
    faqs,
  } = post;

  const currentUrl = window.location.href;

  return (
    <div className="blog-post-detail">
      <div className="container">
        <div className="row">
          <div className="col-3 imgw">
            <RecentPosts />
          </div>
          <div className="col-9">
            <h1 className="blog-post-title">{title}</h1>
            <p className="blog-post-date">{new Date(createdDate).toLocaleDateString()}</p>
            <p className="blog-post-views">{views} views</p>
            {imageUrl && <img src={imageUrl} alt={title} className="img-fluid blog-post-image" />}
            <TableOfContents items={tocItems} />
            <p className="blog-post-description">{description}</p>
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: content }} />
            {faqs && <FAQ faqs={faqs} />}
            <SocialShare url={currentUrl} title={title} />
            <div className="blog-post-navigation">
              {adjacentPosts.previousPost && (
                <Link to={`/blog/${adjacentPosts.previousPost.slug}.html`} className="previous-post">
                  &laquo; {adjacentPosts.previousPost.title}
                </Link>
              )}
              {adjacentPosts.nextPost && (
                <Link to={`/blog/${adjacentPosts.nextPost.slug}.html`} className="next-post">
                  {adjacentPosts.nextPost.title} &raquo;
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
