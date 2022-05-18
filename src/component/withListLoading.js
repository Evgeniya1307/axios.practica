//файл withListLoading.js будет содержать компонент высшего порядка

/*принимает другой компонент, а затем возвращает некоторую логику. 
В данном случае наш компонент высшего порядка будет ожидать проверки, 
является ли текущее состояние isLoadingкомпонента, который он принимает, 
true или false. Если текущее состояние isLoadingравно true, в нем будет 
отображаться сообщение Hold on, fetching data may take some time🙂 . 
Сразу же после изменения состояния isLoading на false он отобразит компонент, 
который принял. В нашем случае это компонент List. */

import React from 'react';

function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on, fetching data may take some time :)
      </p>
    );
  };
}
export default WithListLoading;