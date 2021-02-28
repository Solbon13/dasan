// import './App.css';

import React from "react";

import { Player } from './components/player';

function App() {

//   let cells = []
//   for (let i = 0; i < 10; i++)
//   cells.push(i)
//     let rows = []
//   for (let i = 0; i < 35; i++)
//   rows.push(i)

//     const rowsElement = rows.map(p =>
//       <div key= {p}
//         style={{ width: `2vw`, border: `1px solid black` }}>
  
//       </div>
//     )

//   const cellsElement = cells.map(p =>
//     <div
//     key= {p}
//       style={{
//         height: `2vw`,
//         // border: `1px solid black`,
//         display: `flex` }}>
// {rowsElement}
//     </div>
//   )

  const clicked = (e) => {
        console.log(e.target.getBoundingClientRect());
  }

  return (
    <div>
      <Player skin="m2" />
    </div>
    // <div
    //   style={{
    //     backgroundImage: `url(/dasan/images/datsan.png)`,
    //     backgroundPosition: `0px 0px`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "contain",
    //     height: `100vh`
    //   }}
    //   onClick = {clicked}
    // >
    //   {cellsElement}
    // </div>
  );
}

export default App;
