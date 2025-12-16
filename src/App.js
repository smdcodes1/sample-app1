import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Users from './screens/Users';
import NotFound from "./screens/NotFound";
function App() {
  return (
    <Router>
      <Routes>
        <Route
        path='/users'
        element={<Users />} />
        <Route
        path='*'
        element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
