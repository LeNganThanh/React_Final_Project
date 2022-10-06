import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";

export default function ReadOnlyTable({
  timeData,
  id,
  handleEditClick,
  handleDeleteClick,
  addOn,
  filter,
}) {
  if (addOn === true && id === 6) {
    return (
      <tr key={id} className="hidden">
        <td className="border lg:bg-green-400/70 flex p-4 justify-around">
          {id + 1}
          <AiOutlineEdit onClick={e => handleEditClick(e, timeData)} />
        </td>
        <td className="border bg-orange-500/70">{timeData.time}</td>
        <td className="border bg-blue-500/70">{timeData.monday}</td>
        <td className="border bg-red-500/70">{timeData.tuesday}</td>
        <td className="border bg-yellow-500/70">{timeData.wednesday}</td>
        <td className="border bg-purple-500/70 p-4">{timeData.thursday}</td>
        <td className="border bg-cyan-500/70 p-4">{timeData.friday}</td>
      </tr>
    );
  } else {
    return (
      <tr key={id}>
        <td className="border lg:bg-green-400/70 flex p-4 justify-around">
          {id + 1 < 7 ? (
            id + 1
          ) : (
            <RiDeleteBinLine
              size={24}
              className="text-red-900"
              onClick={handleDeleteClick}
            />
          )}
          <AiOutlineEdit onClick={e => handleEditClick(e, timeData)} />
        </td>
        <td className="border bg-orange-500/70">{timeData.time}</td>
        <td
          className="border bg-blue-500/70"
          style={{
            backgroundColor:
              timeData.monday.substring(0, 2).toLowerCase() ===
              filter.toLowerCase()
                ? "wheat"
                : "",
          }}
        >
          {timeData.monday}
        </td>
        <td
          className="border bg-red-500/70"
          style={{
            backgroundColor:
              timeData.tuesday.substring(0, 2).toLowerCase() ===
              filter.toLowerCase()
                ? "wheat"
                : "",
          }}
        >
          {timeData.tuesday}
        </td>
        <td
          className="border bg-yellow-500/70"
          style={{
            backgroundColor:
              timeData.wednesday.substring(0, 2).toLowerCase() ===
              filter.toLowerCase()
                ? "wheat"
                : "",
          }}
        >
          {timeData.wednesday}
        </td>
        <td
          className="border bg-purple-500/70 p-4"
          style={{
            backgroundColor:
              timeData.thursday.substring(0, 2).toLowerCase() ===
              filter.toLowerCase()
                ? "wheat"
                : "",
          }}
        >
          {timeData.thursday}
        </td>
        <td
          className="border bg-cyan-500/70 p-4"
          style={{
            backgroundColor:
              timeData.friday.substring(0, 2).toLowerCase() ===
              filter.toLowerCase()
                ? "wheat"
                : "",
          }}
        >
          {timeData.friday}
        </td>
      </tr>
    );
  }
}
