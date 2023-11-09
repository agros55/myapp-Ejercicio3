
/* import './App.css'; */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './Componentes/Main/Main';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';
import InfoProd from './Componentes/InfoProd/InfoProd';

function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/myapp-Ejercicio3/" element={<Main />} />
          <Route path="/myapp-Ejercicio3/producto/:id" element={<InfoProd />} />
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>


  );
}

export default App;
