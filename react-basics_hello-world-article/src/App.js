import React from "react";
import "./styles.css";
function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World!</h1>
      <p>This world is one hell of a world.</p>
      <div>
        <b>NO</b> TURTLEFEST!
      </div>
      <br></br>
      <hr></hr>
    </article>
  );
}
export default function App() {
  return <HelloWorldArticle />;
}
