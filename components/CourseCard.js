import { useContext, useState } from "react";
import {TodosContext} from "../pages/Gpacalc"
const CourseCard = (props) => {
  /*return (
    <>
      <p>This is Course card</p>
    </>
  );*/
  const { dispatch } = useContext(TodosContext);
  return (
    props.todos.map(item => {
      return (
        <>
        <div class="CourseCard">
          <tr >
            <td>
              <div class="tag">
                <p>subject : {item.name}</p>
                <p>grade : {item.a}</p>
                <p>credits : {item.c}</p>
              </div>
            </td>
            <tr id="trc">
            <button class="botn" onClick = {()=>{
                dispatch({
                    type: "DELETE_TODO",
                    payload: item.id,
                });}}>x</button>
            </tr>
          </tr>
        </div>
      </>
      );
    
  })
  
  );
  
};

export default CourseCard;
