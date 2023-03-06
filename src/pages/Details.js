import React from "react";
import "./Details.css";
import { useSelector } from "react-redux";

function Details() {
  const vaccineData = useSelector((state) => {
    return state.vaccinationData;
  });
  return (
    <div class="container">
      <pre>{JSON.stringify(vaccineData, undefined, 2)}</pre>
      <h1>Employee Vaccination Data</h1>
      <form>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search by employee name"
        />
        <br />
        <label for="vaccine">Filter by Vaccine:</label>
        <select id="vaccine" name="vaccine">
          <option value="">All</option>
          <option value="Pfizer">Pfizer</option>
          <option value="Moderna">Moderna</option>
          <option value="Johnson &amp; Johnson">Johnson &amp; Johnson</option>
        </select>
        <br />
        <label for="first-dose">First Dose Status:</label>
        <select id="first-dose" name="first-dose">
          <option value="">All</option>
          <option value="true">Taken</option>
          <option value="false">Not Taken</option>
        </select>
        <br />
        <label for="second-dose"> Second Dose Status:</label>
        <select id="second-dose" name="second-dose">
          <option value="">All</option>
          <option value="true">Taken</option>
          <option value="false">Not Taken</option>
        </select>
        <br />
        <input type="submit" value="Filter" />
        <br />
      </form>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>First Dose</th>
            <th>Vaccine</th>
            <th>First Dose Date</th>
            <th>Second Dose</th>
            <th>Second Dose Date</th>
            <th>Fully Vaccinated</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>John Doe</td>
            <td>Yes</td>
            <td>Pfizer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Details;
