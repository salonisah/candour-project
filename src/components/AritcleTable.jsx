const ArticleTable = ({ articles }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Title</th><th>Category</th><th>Published By</th><th>Published Date</th><th>No. of Views</th>
      </tr>
    </thead>
    <tbody>
      {articles.map((a, i) => (
        <tr key={i}>
          <td>{a.title}</td>
          <td>{a.category}</td>
          <td>{a.author}</td>
          <td>{a.date}</td>
          <td>{a.views}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ArticleTable;
