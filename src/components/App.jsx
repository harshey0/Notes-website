import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
const [note,newnotes] = useState([]);

function addd(no){
newnotes(prevValue=>{return [...prevValue,no]})};

function del(id){
  console.log("harshit");
newnotes(prevValue => {return prevValue.filter((item,index)=>{return index!==id;});});
};


  return (
    <div>
      <Header />
      <CreateArea onAdd={addd}/>
      {note.map((not,index)=> {return <Note key={index} id={index} title={not.title} content={not.content} onDel={del}/>})}
      
      <Footer />
    </div>
  );
}

export default App;
