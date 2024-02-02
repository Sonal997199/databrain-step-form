import React from "react";
import UserForm from "./components/UserForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <> 
       <Navbar />
       <div className="App">
         <UserForm />
       </div>
    </>
  );
}

export default App;