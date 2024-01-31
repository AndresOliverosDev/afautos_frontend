import SideBar from './Pages/SideBar'
import './App.css';
import Header from './Pages/Header';
import Orders from './Pages/Orders';

function App() {

  return (
    <div className='flex content-center gap-x-2 p-2 bg-lContrast dark:bg-dBackground max-h-screen'>
      <section className="hidden max-w-64 xl:block">
        <SideBar/>
      </section>
      <section className='flex-2 grow'>
        <Orders className="flex-basis-9/12 order-1"/>
      </section>
    </div>
  )
}

export default App;
