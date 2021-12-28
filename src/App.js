import * as React from "react";
import { UserForm } from "./components/UserForm";
import { UserSection } from './components/UserSection'


const App = () => {
  const [userName, setUserName] = React.useState(null);

  const handleSubmit = (newUserName) => setUserName(newUserName);
  const handleSelect = (newUserName) => setUserName(newUserName);

  return (
    <div>
      <UserForm userName={userName} onSubmit={handleSubmit} />
      <hr />
      <div className="m-4">
        <UserSection onSelect={handleSelect} userName={userName} />
      </div>
    </div>
  );
};

export default App;
