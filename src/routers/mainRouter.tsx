import { Route, Routes } from 'react-router-dom';
import PostWriter from '../containers/postWriter';

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<PostWriter />} />
    </Routes>
  );
}

export default MainRouter;
