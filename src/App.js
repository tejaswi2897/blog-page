import { Route, Routes } from 'react-router-dom';
import Login from './components/author/Login';
import Home from './components/customer/Home';
import Contact  from './components/customer/Contact';
import About  from './components/customer/About';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';
import CreateBlog from './components/author/Create-blog';
import MyBlog from './components/author/My-blog';

function App() {
  return <>
  <Header/>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/login' element={ <Login />} />
    <Route path='/Contact-us' element={ <Contact />} />
    <Route path='/About-us' element={ <About />} />
    <Route path='/write-blog' element={ <CreateBlog/>} />
    <Route path='/My-blog' element={ <MyBlog/>} />
    <Route path='*' element={ <PageNotFound />} />
  </Routes>
    
   
  </>
}

export default App;
