import {CSSProperties} from 'react';

const buttonStyles: CSSProperties = {
    backgroundColor: "#5aac44",
    borderRadius: "3px",
    border: "none",
    boxShadow: "none"
}

export function App() {
  return (
    <div className="App">
     Trello
        <button style={buttonStyles}>Click me</button>
    </div>
  );
}

