import React, { useState } from "react";
function FirstAssTODO() {
  const [Activity, setactivity] = useState("");
  const [listdata, setlistdata] = useState([]);

  function addactivity() {
    setlistdata((listdata) => {
      const updatedlist = [...listdata, Activity];
      setactivity("");
      return updatedlist;
    });
  }
  function removeactivity(i) {
    const updatetedata = listdata.filter((ele, id) => {
      return i != id;
    });
    setlistdata(updatetedata);
  }
  function removeall() {
    setlistdata([]);
  }
  return (
    <div>
      <h1>First Assignment TODO List</h1>
      <input
        type="text"
        placeholder="Add Activity"
        value={Activity}
        onChange={(e) => setactivity(e.target.value)} //e.target.value ki vajah se jo bhi value ayegi oo value current activity me assign hogi
        style={{ width: "200px" }}
      />
      <button
        onClick={addactivity}
        style={{
          width: "150px ",
          height: "40px",
        }}
      >
        ADD
      </button>

      <h1> Here yoor list:</h1>
      {listdata != [] &&
        listdata.map((data, i) => {
          return (
            <>
              <p key={i}></p>{" "}
              {/*//we put unique key "put i" for adentifiactaion  */}
              <div>{data}</div>
              <div>
                <button onClick={() => removeactivity(i)}>REMOVE</button>
              </div>
            </>
          );
        })}
      <div>
        {listdata.length >= 1 && (
          <button onClick={removeall}>Remove all data</button>
        )}
      </div>
    </div>
  );
}
export default FirstAssTODO;
