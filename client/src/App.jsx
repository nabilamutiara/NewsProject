import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './dashboard/pages/Login';
import MainLayout from './dashboard/layout/MainLayout';
import Adminindex from './dashboard/pages/Adminindex';
import ProtectDashboard from './middleware/ProtectDashboard';
import ProtectRole from './middleware/ProtectRole';
import Unable from './dashboard/pages/Unable';
import Profile from './dashboard/pages/Profile';
import News from './dashboard/pages/News';
import AddWriter from './dashboard/pages/AddWriter';
import Writers from './dashboard/pages/Writers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<Login />} />

        
        <Route path="/dashboard" element={<ProtectDashboard />}>
          <Route path="" element={<MainLayout />}>
            <Route path="" index element={<Navigate to="/dashboard/admin" replace />} />
            <Route path="unable-access" element={<Unable />} />
            <Route path="profile" element={<Profile />} />
            <Route path="news" element={<News />} />
            <Route path='' element={<ProtectRole role='admin'/>}>
              <Route path="admin" element={<Adminindex />} />
              <Route path="writer/add" element={<AddWriter />} />
              <Route path="writers" element={<Writers />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
