import React, { useState } from "react";
import { useContext } from "react";
import "../App.css";
import { Fragment } from "react";

import ReadOnlyTable from "./ReadOnlyTable";
import EditTable from "./EditTable";
import { TableContext } from "./TableContext";

export default function Timetable() {
  const [editRowId, setEditRowId] = useState(null);
  const [addOn, setAddOn] = useState(true);
  let formData = "";

  const { state } = useContext(TableContext);

  const tableData = state.tableData;
  const filter = state.filter;

  const handleEditClick = (e, timeData) => {
    e.preventDefault();
    setEditRowId(timeData.id);

    formData = {
      id: timeData.id,
      time: timeData.time,
      monday: timeData.monday,
      tuesday: timeData.tuesday,
      wednesday: timeData.wednesday,
      thursday: timeData.thursday,
      friday: timeData.friday,
    };
  };

  const handleDeleteClick = () => {
    setAddOn(true);
  };

  return (
    <div className="w-full h-full relative z-1">
      <div className="absolute w-full h-full top-[2rem] left-0 flex flex-col text-center bg-slate-300/100 text-gray-800">
        <div className="absolute w-full flex flex-col md:block">
          <div className="overflow-auto">
            <form>
              <table className="max-w-[1300px] shadow-lg mx-auto bg-gray-100/70 ">
                <thead>
                  <tr>
                    <th className="px-8 py-4">STT</th>
                    <th className="px-16 py-4">Time</th>
                    <th className="px-12 py-4">Monday</th>
                    <th className="px-12 py-4">Tuesday</th>
                    <th className="px-12 py-4">Wednesday</th>
                    <th className="px-12 py-4">Thursday</th>
                    <th className="px-12 py-4">Friday</th>
                  </tr>
                </thead>
                <tbody>
                  {React.Children.toArray(
                    tableData.map((time, id) => (
                      <Fragment>
                        {editRowId === id ? (
                          <EditTable
                            formData={formData}
                            editRowId={editRowId}
                            setEditRowId={setEditRowId}
                          />
                        ) : (
                          <ReadOnlyTable
                            timeData={time}
                            id={id}
                            handleEditClick={handleEditClick}
                            handleDeleteClick={handleDeleteClick}
                            addOn={addOn}
                            filter={filter}
                          />
                        )}
                      </Fragment>
                    ))
                  )}
                </tbody>
              </table>
            </form>
          </div>
          <button
            className={
              addOn ? "block absolute top-[100%] left-[45%] m-4  " : "hidden"
            }
            onClick={() => setAddOn(false)}
          >
            Add an extra hour
          </button>
        </div>
      </div>
    </div>
  );
}
/* 
        <h1 className="py-6 tracking-widest text-blue-500 underline underline-offset-4 font-semibold">
            TIMETABLE
          </h1>
*/
