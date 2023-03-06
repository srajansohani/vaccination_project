import React from "react";
import {
  MDBInput,
  MDBRow,
  MDBCol,
  MDBCheckbox,
  MDBSwitch,
  MDBBtn
} from "mdb-react-ui-kit";
import "./Add.css";

export default function App() {
  let [
    is_first_doze_takeChecked,
    setIs_first_doze_takeChecked
  ] = React.useState(false);
  let [
    is_second_doze_takeChecked,
    setIs_second_doze_takeChecked
  ] = React.useState(false);
  return (
    <form method="post" action="#">
      <label for="vaccine_name">Vaccine Name:</label>
      <input type="text" id="vaccine_name" name="vaccine_name" required />

      <label for="is_first_doze_take">Is First Dose Taken:</label>
      <input
        type="checkbox"
        id="is_first_doze_take"
        name="is_first_doze_take"
        value="yes"
        onChange={(e) => {
          setIs_first_doze_takeChecked(e.target.checked);
        }}
      />

      {is_first_doze_takeChecked ? (
        <div id="first_dose_section">
          <label for="first_doze_date">First Dose Date:</label>
          <input type="date" id="first_doze_date" name="first_doze_date" />
        </div>
      ) : null}

      <label for="is_second_doze_take">Is Second Dose Taken:</label>
      <input
        type="checkbox"
        id="is_second_doze_take"
        name="is_second_doze_take"
        value="yes"
        onChange={(e) => {
          setIs_second_doze_takeChecked(e.target.checked);
        }}
      />

      {is_second_doze_takeChecked ? (
        <div id="second_dose_section">
          <label for="second_doze_date">Second Dose Date:</label>
          <input type="date" id="second_doze_date" name="second_doze_date" />
        </div>
      ) : null}

      <input type="submit" value="Submit" />
    </form>
  );
}
