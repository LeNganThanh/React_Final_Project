import React, { useContext, useState } from "react";
import { TableContext } from "./TableContext";
import { AiFillSave } from "react-icons/ai";
import { MdCancelScheduleSend } from "react-icons/md";

export default function EditTable({ formData, editRowId, setEditRowId }) {
  //handle the changing data in the row
  const [editFormData, setEditFormData] = useState(formData);

  //using context
  const { dispatch } = useContext(TableContext);

  //handle onChange input value
  const handleEditChange = e => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldVal = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldVal;
    setEditFormData(newFormData);
  };

  //Submit editing data
  const handleEditFormSubmit = e => {
    e.preventDefault();
    const editedRow = {
      id: editRowId,
      time: editFormData.time,
      monday: editFormData.monday,
      tuesday: editFormData.tuesday,
      wednesday: editFormData.wednesday,
      thursday: editFormData.thursday,
      friday: editFormData.friday,
    };

    dispatch({
      type: "SAVE",
      data: editedRow,
      editId: editRowId,
    });

    setEditRowId("");
  };

  return (
    <tr>
      <td>
        <div>
          <button type="submit" onClick={handleEditFormSubmit}>
            <AiFillSave className="text-green-700" />{" "}
          </button>
          <button type="button" onClick={() => setEditRowId("")}>
            <MdCancelScheduleSend className="text-yellow-900" />
          </button>
        </div>
      </td>
      <td>
        <input
          type="number"
          placeholder="Editing"
          name="time"
          value={formData.time}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Editing"
          name="monday"
          value={formData.monday}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Editing"
          name="tuesday"
          value={formData.tuesday}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Editing"
          name="wednesday"
          value={formData.wednesday}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Editing"
          name="thursday"
          value={formData.thursday}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Editing"
          name="friday"
          value={formData.friday}
          onChange={handleEditChange}
        />
      </td>
    </tr>
  );
}
