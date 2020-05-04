import React from "react";
import { useLocalStorage } from "./hooks/LocalStorageHook";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Messages from "./components/Messages";
import AddMessage from "./AddMessage";
import Login from "./components/Login";
import CurrentUser from "./components/CurrentUser";
import Loading from "./components/Loading";

export const MESSAGES = gql`
  query messages {
    messages {
      id
      name
      message
      date
    }
  }
`;

const App = () => {
  const [name, setName] = useLocalStorage("name", null);
  const { loading, data } = useQuery(MESSAGES, {
    pollInterval: 2000
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <>
        {name === null ? (
          <Login setName={setName} />
        ) : (
          <>
            <CurrentUser name={name} />
            <Messages messages={data.messages} />
            <AddMessage name={name} />
          </>
        )}
      </>
    </main>
  );
};

export default App;
