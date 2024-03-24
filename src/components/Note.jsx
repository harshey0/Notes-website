import React from "react";

function Note(props) {

  function del(){
    props.onDel(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={del} style={{ backgroundColor: 'white' }}>DELETE</button>
    </div>
  );
}

export default Note;
