//Файл App.js является функциональным компонентом, 
//который использует React Hooks для обработки состояния, а также побочных эффектов.


import React, { useEffect, useState } from 'react';
import './App.css';
import List from './component/List';
import withListLoading from './component/withListLoading';
function App() {
  /* Здесь мы создаем новый компонент с именем ListLoading 
  и назначаем withListLoadingкомпонентом высшего порядка, 
  обернутым вокруг компонента списка. Затем мы создаем 
  значения состояния loading и repos и используем React Hook useState().*/
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  }); // 


  /*Здесь мы инициализируем React Hook useEffect(). 
  В хуке useEffect() мы устанавливаем для начального состояния 
  загрузки значение true, пока это так, наш компонент более высокого 
  порядка будет отображать сообщение */
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  
  return ( // Здесь мы в основном просто отображаем Component,
  // который мы назначили компонентом высшего порядка, а также заполняем 
  //свойства isLoading и repos значениями состояния.
    <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            
          </span>{' '}
          with by Shedrack Akintayo
        </div>
      </footer>
    </div>
  );
}
export default App;
