import Container from 'components/container';
import About from 'pages/about';
import Home from 'pages/home';
import Main from 'pages/main';
import Menu from 'pages/menu';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Dental = lazy(() => import('pages/dental'));
const CopyCat = lazy(() => import('pages/copy-cat'));
const Joongang = lazy(() => import('pages/joongang'));
const Chungjungwon = lazy(() => import('pages/chungjungwon'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="/main" element={<Main />} />
      <Route
        path="/dental"
        element={
          <Suspense fallback={<>loading...</>}>
            <Dental />
          </Suspense>
        }
      />
      <Route
        path="/copy-cat"
        element={
          <Suspense fallback={<>loading...</>}>
            <CopyCat />
          </Suspense>
        }
      />
      <Route
        path="/joongang"
        element={
          <Suspense fallback={<>loading...</>}>
            <Joongang />
          </Suspense>
        }
      />
      <Route
        path="/chungjungwon"
        element={
          <Suspense fallback={<>loading...</>}>
            <Chungjungwon />
          </Suspense>
        }
      />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
