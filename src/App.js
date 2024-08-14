import React from "react";
import ResponsiveDrawer from './Component/Siderbar1'
import Header from './Component/Header'
import MovieGrid from "./Component/MovieGrid";
// import Sidebar from "./Component/Sidebar";
import MovieGridRedux from "./Component/MovieGridRedux";

function App() {
  return (
    <div>
      <Header />
      {/* <Sidebar /> */}
      <main style={{ marginLeft: "240px", marginTop: "64px" }}>
        <MovieGridRedux/>
        <MovieGrid />
        <ResponsiveDrawer/>
      </main>
    </div>
  );
}

export default App;
