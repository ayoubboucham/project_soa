// ArticlesPage.js
import React from 'react';

const articlesData = [
  { id: 1, title: 'Article 1', summary: 'Summary of Article 1' },
  { id: 2, title: 'Article 2', summary: 'Summary of Article 2' },
  { id: 3, title: 'Article 3', summary: 'Summary of Article 3' },
];

const ArticlesPage = () => {
  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articlesData.map(article => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <a href={`/articles/${article.id}`}>Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesPage;
