import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./categories.scss";
const Categories = () => {
  const categories = [
    { style: "bg-green-200 mobile", name: "Mobile", img: "" },
    { style: "bg-pink-200 ", name: "Tablate", img: "" },
    { style: "bg-red-200 ", name: "Laptop", img: "" },
    { style: "bg-purple-200 ", name: "Headphone", img: "" },
    { style: "bg-blue-200 ", name: "TV", img: "" },
  ];
  return (
    <div>
      <section className="categories-main">
        <div className="categories-container container">
          <SectionHeading heading1="Popular" heading2="Categories" categoryName="all" />
          <div className="categories">
            {categories.map((category) => {
              return (
                <div className={`category ${category.style}`}>
                  <h3>{category.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
