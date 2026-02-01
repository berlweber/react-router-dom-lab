import './App.css';
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from 'react-router';
import { useState } from "react";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  }

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<h2>Post Office</h2>}/>
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />}/>
      <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>}/>
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>}/>
      <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
    </Routes>
      
    </>
  )
};

export default App;