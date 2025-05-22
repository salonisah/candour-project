import React from 'react';
import Table from '../components/Table'; 
import DropdownButton from '../components/Button'; 
const Articles = () => {
  const tableHeaders = ['Title', 'Category', 'Published By', 'Published Date', 'No. of Views'];
  const tableData = [
    {
      title: '5 ways to start crocheting',
      category: 'Leisure & Lifestyle',
      publishedBy: 'Anusha Puri',
      publishedDate: '15th Jan, 2025',
      views: '50',
    },
    {
      title: 'Foods that diabetic patient can eat',
      category: 'Medical',
      publishedBy: 'Sambrina Raut',
      publishedDate: '15th Jan, 2025',
      views: '29',
    },
    {
      title: 'Must go to place when you visit Nepal',
      category: 'Leisure & Lifestyle',
      publishedBy: 'Abiral Pradhanag',
      publishedDate: '15th Jan, 2025',
      views: '2',
    },
    {
      title: 'Foods that diabetic patient can eat',
      category: 'Medical',
      publishedBy: 'Sakun Napit',
      publishedDate: '15th Jan, 2025',
      views: '150',
    },
    {
      title: 'Grid System',
      category: 'Design',
      publishedBy: 'Saraswati Niroula',
      publishedDate: '15th Jan, 2025',
      views: '2587',
    },
  ];
  const headerToKeyMap = {
    'Title': 'title',
    'Category': 'category',
    'Published By': 'publishedBy',
    'Published Date': 'publishedDate',
    'No. of Views': 'views', // Map "No. of Views" to "views"
  };

  return (
    <div className="Articles">
    <div className='header-article'>
      <h2>Recent Articles</h2>
        <DropdownButton
          text="View All"
          icon={
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.95 6.5L0.350001 1.9L1.4 0.849999L7.05 6.5L1.4 12.15L0.350001 11.1L4.95 6.5Z" fill="#800000"/>
            </svg>
          }
          newcl="view-btn"
        />
        </div>
      <Table headers={tableHeaders} data={tableData} 
        headerToKeyMap={headerToKeyMap}
      />
    </div>
  );
};

export default Articles;