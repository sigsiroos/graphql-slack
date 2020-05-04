import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const ADD_MESSAGE = gql`
  mutation addMessage($name: String!, $message: String!) {
    addMessage(name: $name, message: $message) {
      id
      name
      message
    }
  }
`;

const AddMessage = ({ name }) => {
  const [message, setMessage] = useState("");
  const [addMessage] = useMutation(ADD_MESSAGE);

  return (
    <div className="addMessage">
      <form
        onSubmit={e => {
          e.preventDefault();
          addMessage({
            variables: {
              name,
              message
            },
            refetchQueries: ["messages"]
          });
          setMessage("");
        }}
      >
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
