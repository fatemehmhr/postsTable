import { Fragment } from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import LayoutApp from './components/LayoutApp';
import Dashboard from './pages/Dashboard/index';
import Posts from './pages/Posts';
import './App.css';

function App() {
  return (
     <div className='App'>
       
          <BrowserRouter>
          <LayoutApp>
              <Routes>
                  <Route path='/' element={<Dashboard />} />
                  <Route path='posts' element={<Posts />} />
                  <Route path='Comments' element={<Comments />} />
              </Routes>
              </LayoutApp>  
          </BrowserRouter>
       
     </div>
  );
}
function Home(){
  return (
    <Fragment>
        <Link to='/'>Dashboard</Link>
        <Link to='posts'>Posts</Link>
        <Link to='comments'>Comments</Link>
    </Fragment>
  )
}

// function Posts(){
//   return <h2>posts</h2>
// }

function Comments(){
  return <h2>1</h2>
}

export default App;
