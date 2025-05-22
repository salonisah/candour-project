// EditContent.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DropdownButton from "../components/Button";
import crochetImage2 from "../assets/crochet-img2.jpg";
import coverImage from "../assets/coverimage.png"; 
const EditContent = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const imageSrc = crochetImage2;
  const imageAlt = "Beautiful crochet pattern";
  const handleBackClick = () => {
    navigate(-1);
  };


  return (
    <div className="article-page">
      <div className="main-contentarticle flex-3">
        <header className="edit-content">
          <div className="right-header">
            <div className="back-arrow arrowcls" onClick={handleBackClick}>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.375 8.25L8.55 13.425C8.7 13.575 8.76667 13.75 8.75 13.95C8.75 14.15 8.675 14.325 8.525 14.475C8.375 14.625 8.2 14.7 8 14.7C7.8 14.7 7.625 14.625 7.475 14.475L1.125 8.125C1.04167 8.04167 0.975 7.95 0.925 7.85C0.891667 7.73333 0.875 7.61667 0.875 7.5C0.875 7.38333 0.891667 7.275 0.925 7.175C0.975 7.05833 1.04167 6.95833 1.125 6.875L7.475 0.524999C7.60833 0.391666 7.775 0.324999 7.975 0.324999C8.19167 0.308332 8.375 0.374999 8.525 0.524999C8.675 0.674999 8.75 0.858332 8.75 1.075C8.75 1.275 8.675 1.45 8.525 1.6L3.375 6.75H14.75C14.9667 6.75 15.1417 6.825 15.275 6.975C15.425 7.10833 15.5 7.28333 15.5 7.5C15.5 7.71667 15.425 7.9 15.275 8.05C15.1417 8.18333 14.9667 8.25 14.75 8.25H3.375Z"
                  fill="#333333"
                />
              </svg>
            </div>
            <h1 className="article-title">5 Ways to Start Crocheting</h1>
          </div>
          {/* <div className="header-actions">
            <DropdownButton text="Save as Draft" icon="" newcl="draft-btn" />
            <DropdownButton
              text="Publish"
              icon={
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 7 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.32031 0L6.32031 5L1.32031 10L0.148438 8.82812L3.97656 5L0.148438 1.17188L1.32031 0Z"
                    fill="white"
                  />
                </svg>
              }
              newcl="publish-btn"
            />
          </div> */}
        </header>
        <div className="editor-wraper article-content-wrapper">
          <div className="main-contentedit">
            <article>
              <section>
                <h2 className="content-list-title">What is crocheting?</h2>
                <p className="content-item-description">
                  Lorem ipsum dolor sit amet consectetur. Odio massa velit id
                  vulputate magna tellus. Pharetra cursus scelerisque id vulputate
                  suspendisse gravida. Ultrices ipsum sed id potenti ullamcorper
                  vulputate quam. Aliquam tempor adipiscing felis feugiat.
                  Facilisis ipsum massa elit pellentesque vulputate consectetur id
                  vulputate suspendisse gravida. Ultrices ipsum sed id potenti
                  ullamcorper vulputate quam. Aliquam tempor adipiscing felis
                  feugiat. Facilisis ipsum massa elit pellentesque vulputate
                  consectetur id vulputate suspendisse gravida. Ultrices ipsum sed
                  id potenti ullamcorper vulputate quam. Aliquam tempor adipiscing
                  felis feugiat. Facilisis ipsum massa elit pellentesque vulputate
                  consectetur id vulputate suspendisse gravida. Ultrices ipsum sed
                  id potenti ullamcorper vulputate quam. Aliquam tempor adipiscing
                  felis feugiat.
                </p>
                <img src={imageSrc} alt={imageAlt} className="article-image" />
              </section>
              <section>
                <h3 className="content-item-title">Things to do before you start</h3>
                <ul>
                  <li>
                    <strong className="content-list-title">Hook</strong>
                    <p className="content-item-description">
                      Lorem ipsum dolor sit amet consectetur. Odio massa velit id
                      vulputate magna tellus. Pharetra cursus scelerisque id vulputate
                      suspendisse gravida. Ultrices ipsum sed id potenti ullamcorper
                      vulputate quam. Aliquam tempor adipiscing felis feugiat.
                      Facilisis ipsum massa elit pellentesque vulputate consectetur.
                    </p>
                  </li>
                  <li>
                    <strong className="content-list-title">Moodboard</strong>
                    <p className="content-item-description">
                      Lorem ipsum dolor sit amet consectetur. Odio massa velit id
                      vulputate magna tellus. Pharetra cursus scelerisque id vulputate
                      suspendisse gravida. Ultrices ipsum sed id potenti ullamcorper
                      vulputate quam. Aliquam tempor adipiscing felis feugiat.
                      Facilisis ipsum massa elit pellentesque vulputate consectetur.
                    </p>
                  </li>
                  <li>
                    <strong className="content-list-title">Wool</strong>
                    <p className="content-item-description">
                      Lorem ipsum dolor sit amet consectetur. Odio massa velit id
                      vulputate magna tellus. Pharetra cursus scelerisque id vulputate
                      suspendisse gravida. Ultrices ipsum sed id potenti ullamcorper
                      vulputate quam. Aliquam tempor adipiscing felis feugiat.
                      Facilisis ipsum massa elit pellentesque vulputate consectetur.
                    </p>
                  </li>
                  <li>
                    <strong className="content-list-title">Moodboard</strong>
                    <p className="content-item-description">
                      Lorem ipsum dolor sit amet consectetur. Odio massa velit id
                      vulputate magna tellus. Pharetra cursus scelerisque id vulputate
                      suspendisse gravida. Ultrices ipsum sed id potenti ullamcorper
                      vulputate quam. Aliquam tempor adipiscing felis feugiat.
                      Facilisis ipsum massa elit pellentesque vulputate consectetur.
                    </p>
                  </li>
                </ul>
              </section>
            </article>
          </div>
          {/* <aside className="sidebar-content">
            <div className="sidebar-section">
              <h3>Cover Image</h3>
              <img src={coverImage} alt="Cover Image" className="cover-image" />
              <button>Upload</button>
            </div>
            <div className="sidebar-section">
              <h3>Category</h3>
              <select>
                <option>Select</option>
                <option>Crocheting</option>
                <option>Knitting</option>
              </select>
            </div>
            <div className="sidebar-section">
              <h3>Tags</h3>
              <select>
                <option>Select</option>
                <option>Beginner</option>
                <option>DIY</option>
              </select>
            </div>
          </aside> */}
        </div>
      </div>
    </div>
  );
};

export default EditContent;