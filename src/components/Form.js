import React from "react";

function Form({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLasttNameChange,  
}) {
  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLasttNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
