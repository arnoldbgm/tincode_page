import { BrowserRouter } from 'react-router-dom';
import { AdminRoute, WebRoute } from './router';

function App() {
  return (
    <BrowserRouter>
      <AdminRoute />
      <WebRoute />
    </BrowserRouter>
  );
}

export default App;
