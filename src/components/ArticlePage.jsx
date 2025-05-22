import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Tab from "../components/Tab";
import InfoBox from "../components/InfoBox";
import Comment from "../components/Comment";

const ArticlePage = ({
  title: propTitle,
  category: propCategory,
  tags: propTags,
  imageSrc: propImageSrc,
  imageAlt: propImageAlt,
  views: propViews,
  suggestions: propSuggestions,
  comments: propComments,
  content: propContent,
  coverImageUrl,
  isDraft = true,
    onSaveDraft,
  onPublish,

}) => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Use props if provided, otherwise fall back to state from routing
  const {
    title = propTitle || "Untitled",
    category = propCategory || "Uncategorized",
    tags = propTags || [],
    imageSrc = propImageSrc || "/crochet.jpg",
    imageAlt = propImageAlt || "No image available",
    views = propViews || 0,
    suggestions = propSuggestions || 0,
    comments = propComments || [],
    content = propContent || [],
  } = state || {};

  const [activeTab, setActiveTab] = useState(category);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleEditSuggestion = () => {
  navigate("/edit-suggestion", {
    state: {
      articleTitle: title,
      articleId: state?.id || "unknown", // optional: pass ID if available
    },
  });
};

  return (
    <div className="article-page">
      {/* Main Article Content */}
      <div className="main-contentarticle flex-3">
        {/* Back Arrow with Navigation */}
        <div className="back-arrow" onClick={handleBackClick}>
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

        {/* Article Title */}
        <h1 className="article-title">{title}</h1>

        {/* Category and Tag Tabs */}
        <div className="tabs">
          <span className="tab-label">Category : </span>
          <Tab
            label={category}
            active={activeTab === category}
            onClick={() => handleTabClick(category)}
          />
          <span className="tab-label">Tag(s) :</span>
          {tags.length > 0 ? (
            tags.map((tag, index) => (
              <Tab
                key={tag || index} // Use tag as key if unique, fallback to index
                label={tag || "Untitled"}
                active={activeTab === tag}
                onClick={() => handleTabClick(tag)}
              />
            ))
          ) : (
            <span>No tags available</span>
          )}
        </div>

        {/* Article Image (crochet tools) */}
        <div class="article-img">
          <img src={imageSrc} alt={imageAlt} className="article-image" />
        </div>

        {/* Main Content Section */}
        <div className="article-content-wrapper">
          <div className="article-content">
            {content.length > 0 ? (
              content.map((item, index) => (
                <div key={item.title || index} className="content-item">
                  <h3 className="content-item-title">
                    {item.title || "Untitled"}
                  </h3>
                  {item.description && (
                    <p className="content-item-description">
                      {item.description}
                    </p>
                  )}

                  {item.list && Array.isArray(item.list) && (
                    <ul className="content-item-list">
                      {item.list.map((listItem, idx) => (
                        <li key={idx} className="content-list-item">
                          <strong className="content-list-title">
                            • {listItem.title}
                          </strong>
                          <p
                            className="content-item-description"
                            style={{ marginLeft: "20px", margin: "5px 0px" }}
                          >
                            {listItem.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="content-item-image article-image "
                      style={{ paddingright: "20px" }}
                    />
                  )}
                </div>
              ))
            ) : (
              <p>No content available</p>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar with Comment Section and Info Boxes */}
      <div className="sidebar-content">
        {/* Info Boxes */}
        <div className="info-boxes">
          <InfoBox
            icon={
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7 27.8C10.45 27.8 10.2333 27.7167 10.05 27.55C9.88333 27.3833 9.8 27.1667 9.8 26.9V25.575C9.8 25.0583 9.93333 24.6 10.2 24.2C10.4667 23.8 10.825 23.4833 11.275 23.25C12.225 22.8 13.175 22.45 14.125 22.2C15.0917 21.9333 16.15 21.8 17.3 21.8C18.45 21.8 19.5 21.9333 20.45 22.2C21.4167 22.45 22.375 22.8 23.325 23.25C23.775 23.4833 24.1333 23.8 24.4 24.2C24.6667 24.6 24.8 25.0583 24.8 25.575V26.9C24.8 27.1667 24.7083 27.3833 24.525 27.55C24.3583 27.7167 24.15 27.8 23.9 27.8H10.7ZM26.4 27.8C26.5333 27.7 26.6333 27.575 26.7 27.425C26.7667 27.2583 26.8 27.0833 26.8 26.9V25.45C26.8 24.8 26.6333 24.1833 26.3 23.6C25.9833 23 25.5333 22.4833 24.95 22.05C25.6167 22.15 26.25 22.3083 26.85 22.525C27.45 22.725 28.025 22.9667 28.575 23.25C29.0917 23.5333 29.4917 23.8667 29.775 24.25C30.0583 24.6167 30.2 25.0167 30.2 25.45V26.9C30.2 27.1667 30.1083 27.3833 29.925 27.55C29.7583 27.7167 29.55 27.8 29.3 27.8H26.4ZM17.3 20.2C16.3333 20.2 15.5083 19.8583 14.825 19.175C14.1417 18.475 13.8 17.65 13.8 16.7C13.8 15.7333 14.1417 14.9083 14.825 14.225C15.5083 13.5417 16.3333 13.2 17.3 13.2C18.2667 13.2 19.0917 13.5417 19.775 14.225C20.4583 14.9083 20.8 15.7333 20.8 16.7C20.8 17.65 20.4583 18.475 19.775 19.175C19.0917 19.8583 18.2667 20.2 17.3 20.2ZM25.925 16.7C25.925 17.65 25.5833 18.475 24.9 19.175C24.2167 19.8583 23.3917 20.2 22.425 20.2C22.325 20.2 22.1833 20.1917 22 20.175C21.8333 20.1417 21.6917 20.1083 21.575 20.075C21.975 19.5917 22.275 19.0667 22.475 18.5C22.6917 17.9167 22.8 17.3167 22.8 16.7C22.8 16.0667 22.6917 15.4667 22.475 14.9C22.2583 14.3333 21.9583 13.8083 21.575 13.325C21.7083 13.275 21.85 13.2417 22 13.225C22.15 13.2083 22.2917 13.2 22.425 13.2C23.3917 13.2 24.2167 13.5417 24.9 14.225C25.5833 14.9083 25.925 15.7333 25.925 16.7ZM11.3 26.3H23.3V25.575C23.3 25.375 23.2417 25.1917 23.125 25.025C23.025 24.8583 22.8667 24.7167 22.65 24.6C21.8167 24.1833 20.9667 23.8667 20.1 23.65C19.2333 23.4167 18.3 23.3 17.3 23.3C16.3 23.3 15.3583 23.4167 14.475 23.65C13.6083 23.8667 12.7667 24.1833 11.95 24.6C11.7167 24.7167 11.55 24.8583 11.45 25.025C11.35 25.1917 11.3 25.375 11.3 25.575V26.3ZM17.3 18.7C17.85 18.7 18.3167 18.5083 18.7 18.125C19.1 17.725 19.3 17.25 19.3 16.7C19.3 16.15 19.1 15.6833 18.7 15.3C18.3167 14.9 17.85 14.7 17.3 14.7C16.75 14.7 16.275 14.9 15.875 15.3C15.4917 15.6833 15.3 16.15 15.3 16.7C15.3 17.25 15.4917 17.725 15.875 18.125C16.275 18.5083 16.75 18.7 17.3 18.7Z"
                  fill="#333333"
                />
              </svg>
            }
             label="No. of views"
            number={Number(views)}
           
          />
          <InfoBox
            icon={
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.15 27.5H14.4L23.65 18.25L22.425 17L13.15 26.275V27.5ZM26.85 17.15L23.475 13.8L24.8 12.5C25.0833 12.2167 25.4333 12.075 25.85 12.075C26.2833 12.075 26.6417 12.2167 26.925 12.5L28.15 13.725C28.4333 14.025 28.5833 14.3833 28.6 14.8C28.6167 15.2 28.475 15.5417 28.175 15.825L26.85 17.15ZM12.55 29C12.3 29 12.0833 28.9167 11.9 28.75C11.7333 28.5667 11.65 28.35 11.65 28.1V26C11.65 25.8833 11.6667 25.775 11.7 25.675C11.75 25.5583 11.825 25.45 11.925 25.35L22.4 14.875L25.775 18.25L15.3 28.725C15.2 28.825 15.0917 28.9 14.975 28.95C14.875 28.9833 14.7667 29 14.65 29H12.55ZM23.025 17.625L22.425 17L23.65 18.25L23.025 17.625Z"
                  fill="#333333"
                />
              </svg>
            }
            label="Total suggestion"
            number={Number(suggestions)}
          
            
          />
        </div>

        {/* Comment Section */}
        <div className="comment-section">
          <div className="tabs-container comment-header">
  <Tab label="Comments" active={activeTab === "Comments"} onClick={() => handleTabClick("Comments")} />
  <Tab
  label="Edit Suggestion"
  active={activeTab === "Edit Suggestion"}
  onClick={() => {
    navigate("/edit-suggestion", {
      state: {
        articleTitle: title,
        articleId: state?.id || "unknown",
      },
    });
  }}
/>
</div>

          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <Comment
                key={comment.author + index} // Use author + index as a fallback key
                avatar={comment.avatar}
                author={comment.author}
                date={comment.date}
                text={comment.text}
              />
              
            ))
          ) : (
            <p>No comments available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
