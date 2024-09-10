import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Error404 from './pages/Error404';
import MainLayout from './layout/MainLayout';
import ErrorLayout from './layout/ErrorLayout';
import MemberList from './pages/member/MemberList';
import MemberDelete from './pages/member/MemberDelete';
import MemberModify from './pages/member/MemberModify';
import MemberDetail from './pages/member/MemberDetail';
import MemberAdd from './pages/member/MemberAdd';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* MainLayout 사용 */}
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/member/add' element={<MemberAdd />} />
          <Route path='/member' element={<MemberList />} />
          <Route path='/member/detail' element={<MemberDetail />} />
          <Route path='/member/modify' element={<MemberModify />} />
          <Route path='/member/delete' element={<MemberDelete />} />
        </Route>

        {/* ErrorLayout 사용 */}
        <Route element={<ErrorLayout />}>
          <Route path='*' element={<Error404 />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
