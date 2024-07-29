import React, { useState } from 'react';
import { WEBSITE_NAME, WEBSITE_URL } from '../constants/constants';
import { blogData } from '../data/blogData';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Calculate total pages
  const totalPages = Math.ceil(blogData.length / itemsPerPage);

  // Get current page's items
  const currentItems = blogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <h1 className="text-center mb-5">{ WEBSITE_NAME }</h1>
          {currentItems.map((item, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card h-100">
                <img src={item.imageUrl} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">{item.title}</h5>
                  <p><strong>{item.tag}</strong></p>
                  <p>{item.description}</p>
                  <p><small>{new Date(item.createdDate).toLocaleDateString()}</small></p>
                  <a className="btn btn-primary me-2" href={item.signupUrl} role="button" target="_blank" rel="noopener noreferrer">SignUp</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              {[...Array(totalPages).keys()].map(number => (
                <li key={number + 1} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(number + 1)}>
                    {number + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Blog;
