import React from "react";

function ListCard(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{props.name}</td>
            <td>{props.assignment}</td>
            <td>{props.difficultyRating}</td>
            <td>{props.enjoymentRating}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default ListCard;
