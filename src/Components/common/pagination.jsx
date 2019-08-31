import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = props => {
  const { itemCount, pageSize, onPageChange, currentPage } = props;
  console.log(currentPage);

  //Math.ceil rounds the number up
  const pagesCount = Math.ceil(itemCount / pageSize);
  //if all items can be displayed on a single page then return nothing
  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1); //returns an array

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => (
          <li
            //active highlights the page number user is currently on
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <a
              className="page-link"
              onClick={() => onPageChange(page)}
              href="#"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
