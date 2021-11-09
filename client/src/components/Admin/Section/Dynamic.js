import React, { useState } from "react";
import "./SectionCreate.css"

function Dynamic() {
  const [inputList, setInputList] = useState([{  Subjects: "ADBA", Faculities: "Mr. Mohit Dayal"  }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { Subjects: "", Faculities: "" }]);
  };

  return (
    <div >
    
      {inputList.map((x, i) => {
        return (
          <div className="boxs">
          <div>
          <label htmlFor="Subjects">Subjects: </label>
                  <select className="sel">
            <option>
             
              {x.Subjects}
              
            </option>
            </select>
              </div>
            <div>
            <label htmlFor="Faculites">Faculities: </label>
            <select  className="sel">
            <option>

              {x.Faculities}

              </option>

            </select>
            </div>
            <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button className="add" onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
    
    </div>
  );
}

export default Dynamic;