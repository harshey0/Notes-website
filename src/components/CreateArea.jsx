import React,{useState} from "react";
import Note from "./Note"


function CreateArea(props) {

 const [ oentry, nentry]=useState({title:"", content:""});
 const [exp,expa]=useState(false);

 function title(event){
  var {value,name}= event.target;
nentry((prevValue)=> {return{...prevValue,[name]:value }});


 }
 function expand(){
  expa(true);
 }

 function save(event){
  props.onAdd(oentry);
  event.preventDefault();

  nentry({title:"", content:""});
 }

  return (
    <div>
      <form>
        <input name="title" onChange={title} placeholder="Title" onClick={expand} value={oentry.title} />
        
        {exp &&(<textarea name="content" onChange={title} placeholder="Take a note..." rows="3" value={oentry.content}/>)}
       { exp && <button onClick={save}>Add</button>}
      </form>
    </div>
  );
}
export default CreateArea;
