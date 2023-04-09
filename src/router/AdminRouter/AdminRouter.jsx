import { Routes, Route } from 'react-router-dom';
import { AuthView } from '../../pages/admin';
import { AdminLayoutView } from '../../layouts';

const AdminRouter = () => {
  return (
    <Routes>
      <Route path='/admin/' element={<AdminLayoutView />}>
        <Route path='/admin/*' element={<AuthView />} /> //el * deja que si
        pongo /admin/asdasd siempre ira a admin
      </Route>
    </Routes>
  );
};

export default AdminRouter;
