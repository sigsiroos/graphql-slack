import React, { useState } from "react";
// import { useMutation } from "@apollo/react-hooks";
// import gql from "graphql-tag";

const AddMessage = ({ name }) => {
  const [message, setMessage] = useState("");

  return (
    <div className="addMessage">
      <form>
        <input
          value={message}
          onChange={e => {
            setMessage(e.target.value);
          }}
          autoFocus
          placeholder="Add message"
        />
      </form>
    </div>
  );
};

export default AddMessage;
