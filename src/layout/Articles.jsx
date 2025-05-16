import React from 'react';
import Table from '../components/Table'; 

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

  return (
    <div className="Articles">
      <h2>Recent Articles</h2>
      <Table headers={tableHeaders} data={tableData} />
    </div>
  );
};

export default Articles;