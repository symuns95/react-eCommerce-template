import React from "react";
import "./sectionHeading.scss";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const SectionHeading = ({ heading1, heading2, categoryName }) => {
  return (
    <div className="row row-section-heading my-10 px-3">
      <div className="title-section-heading">
        <h1 className="">{heading1}</h1>
        <h1 className="">{heading2}</h1>
      </div>
      <Link to="/shop" className="py-3 category-name text-lg text-gray-600 cursor-pointer">
        {categoryName}
        <span className="inline-block px-2 text-base">
          <FaArrowRight />
        </span>
      </Link>
    </div>
  );
};

export default SectionHeading;
