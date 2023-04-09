import { Route, Routes } from 'react-router-dom';
import { HomeView } from '../../pages/web';
import { WebLayoutView } from '../../layouts';

const WebRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<WebLayoutView />}>
        <Route path='/' element={<HomeView />} />
      </Route>
    </Routes>
  );
};

export default WebRouter;
