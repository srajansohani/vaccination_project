import { createStore } from "redux";

const initialState = {
  users: [],
  loggedInUsers: null,
  vaccinationData: [
    {
      EmployeeId: "1",
      EmployeeName: "Joe",
      Vaccine: "moderna",
      FirstDose: "Yes",
      SecondDose: "Yes",
      FirstDoseDtae: "12/02/2004",
      SecondDoseDate: "13/02/2003"
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    default:
      return state;
  }
};

export default createStore(reducer);
