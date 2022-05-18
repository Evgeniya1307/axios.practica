// Файл List.js будет обрабатывать отображение рипозиториев в виде списка


//Приведенный выше код является базовым компонентом списка React, который 
//отображает данные, в нашем конкретном случае, имена репозиториев и их описания в списке.
import React from 'react';
const List = (props) => {
  const { repos } = props; //Мы инициализируем свойство для компонента, который называется repos.
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Available Public Repositories</h2>
      {repos.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <span className='repo-text'>{repo.name} </span>
            <span className='repo-description'>{repo.description}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;