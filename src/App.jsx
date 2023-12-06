import SideBar from './Pages/SideBar'
import './App.css';
import Header from './Pages/Header';
import Orders from './Pages/Orders';

function App() {

  return (
    <div id='App' className='bg-lBackground dark:bg-dBackground'>
      <SideBar />
      <Header />
      <div id='Pages'>
        <Orders />
      </div>
    </div>
  )
}

export default App;
