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
          <td className="t-header">{a.title}</td>
          <td className="t-header">{a.category}</td>
          <td className="t-header">{a.author}</td>
          <td className="t-header">{a.date}</td>
          <td className="t-header">{a.views}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ArticleTable;
