import logo from './logo.svg';
import './App.css';
import Header from './Header'
// import Sidebar from './Sidebar';
import ResponsiveDrawer from './Sidebar1'
import MovieGrid from './MovieGrid'

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Sidebar/> */}
      <ResponsiveDrawer/>
      <MovieGrid/>
    </div>
  );
}

export default App;
