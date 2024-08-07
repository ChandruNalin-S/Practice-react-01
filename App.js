const heading = React.createElement("h1",{id:"heading"},"hello world from react");

console.log(heading);

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);

    const paragraph = React.createElement("p",{},"this is the first time in react");

    const root1 = ReactDOM.createRoot(document.getElementById("root1"));

    root1.render(paragraph);

    const paragraph1 = React.createElement("p",{className:"content"},"subject of the body");

    const root2 = ReactDOM.createRoot(document.getElementById('root1'));

    root2.render(paragraph1);

  
    const parent = React.createElement(
      "div",
      {id:"parent"},
      [
        React.createElement("div",
          {id:"child"},[
            React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")
          ]),
        React.createElement("div",
          {id:"child2"},[
            React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")
          ])
      ]
      );

    console.log(parent);


    const root3 = ReactDOM.createRoot(document.getElementById('root2'));

    root3.render(parent);



    const body = React.createElement("div",
      {id:"parent"},
      React.createElement("div",{id:"child"},
      [React.createElement("p",{},"hello"),React.createElement("p",{},"I'm Chandru S")]
      )
    );

    const root4 = ReactDOM.createRoot(document.getElementById('root3'));

    root4.render(body);

