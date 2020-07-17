import React, { useState } from 'react';
import './App.css';


import EmployeeDirectory from './Views/EmployeeDirectory';


function App() {

  const [data, setData] = useState([
    {
      id: 1,
      name: 'John',
      job: 'developer',
      dept: 'technology',
      supervisor: 'Jak',

    },
    {
      id: 9,
      name: 'Eun-Kyung',
      job: 'paralegal',
      dept: 'legal',
      supervisor: 'CEO',

    },
    {
      id: 7,
      name: 'Ben',
      job: 'writer',
      dept: 'advertising',
      supervisor: 'Marcus',

    },
    {
      id: 2,
      name: 'Dean',
      job: 'developer',
      dept: 'technology',
      supervisor: 'Jak',

    },
    {
      id: 3,
      name: 'Ankit',
      job: 'developer',
      dept: 'technology',
      supervisor: 'Jak'

    },
    {
      id: 4,
      name: 'John Hancock',
      job: 'lawyer',
      dept: 'legal',
      supervisor: 'CEO',

    },
    {
      id: 5,
      name: 'Wendy',
      job: 'artist',
      dept: 'advertising',
      supervisor: 'Marcus',

    },
    {
      id: 6,
      name: 'Andrew',
      job: 'developer',
      dept: 'advertising',
      supervisor: 'Marcus',

    },
  ])



  return (

    <EmployeeDirectory EmployeeData={data}>
    </EmployeeDirectory>



  );
}

export default App;
