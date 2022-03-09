import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent() {
    const [firstName, setFirstName] = useState("Django");
    const [lastName, setLastName] = useState("Starr");

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }
    
      function handleLasttNameChange(e) {
        setLastName(e.target.value);
    }

    return (
        <div>
            <Form 
                firstName={firstName}
                lastName={lastName}
                handleFirstNameChange={handleFirstNameChange}
                handleLasttNameChange={handleLasttNameChange}
            />
            <DisplayData firstName={firstName} lastName={lastName} />
        </div>
    )
}

export default ParentComponent;