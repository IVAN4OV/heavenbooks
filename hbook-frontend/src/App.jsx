import { Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './view/layouts/DefaultLayout';

import { HomePage } from './view/pages/HomePage';
import { AboutPage } from './view/pages/AboutPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
      </Route>
    </Routes>
  )
}

export default App;
