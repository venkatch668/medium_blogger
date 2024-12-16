import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./HelloWorld/HelloWorld";
import Product from "./Product";
import nokia from "./images/nokia.png";
import iphone from "./images/iphone.png";
import pixel from "./images/pixel.png";
import { useState } from "react";

// const data = [
//   {
//     imagePath: nokia,
//     title: "nokia",
//     desc: "lorem ipusm is a dummy text",
//   }
// ];

const data = [
  {
    imagePath: nokia,
    title: "nokia",
    desc: "lorem ipusm is a dummy text",
  },
  {
    imagePath: iphone,
    title: "I phone",
    desc: "lorem ipusm is a dummy text",
  },
  {
    imagePath: pixel,
    title: "Goole pixel",
    desc: "lorem ipusm is a dummy text",
  },
  {
    imagePath: pixel,
    title: "Goole pixel",
    desc: "lorem ipusm is a dummy text",
  },
  {
    imagePath: pixel,
    title: "Goole pixel",
    desc: "lorem ipusm is a dummy text",
  },
  {
    imagePath: pixel,
    title: "Goole pixel",
    desc: "lorem ipusm is a dummy text",
  },
];
// JSON..

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1> welcome to react </h1>  */}
        {/* { comment - ctrl+?} */}
        {/* <HelloWorld name={"venkat"}/>
        <HelloWorld name={"Govind"}/>
        <HelloWorld name={"Manogna"}/> */}
        <button onClick={() => setVisible(false)}> hide the images </button>
        {visible && (
          <div className="grid">
            {data.map((item) => (
              <Product imgpath={item.imagePath} name={item.title} />
            ))}
          </div>
        )}
        <div className="alert alert-success">
          success alert
        </div>
        {/* <Product imgpath={nokia} name={"nokia"}/>
        <Product imgpath={iphone} name={"iphone"}/>
        <Product imgpath={iphone} name={"iphone"}/>
        <Product imgpath={iphone} name={"iphone"}/>
        <Product imgpath={iphone} name={"iphone"}/>
        <Product imgpath={iphone} name={"iphone"}/>
        <Product imgpath={iphone} name={"iphone"}/>
        <Product imgpath={iphone} name={"iphone"}/> */}
      </header>
    </div>
  );
}

export default App;
