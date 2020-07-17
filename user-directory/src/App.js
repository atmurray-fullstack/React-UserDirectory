import React, { useState } from 'react';
import './App.css';


import EmployeeDirectory from './Views/EmployeeDirectory';


function App() {

  const [data, setData] = useState([
    {
      key: 1,
      name: 'John',
      job: 'developer',
      dept: 'technology',
      supervisor: 'Jak',

    },
    {
      key: 9,
      name: 'Eun-Kyung',
      job: 'paralegal',
      dept: 'legal',
      supervisor: 'CEO',

    },
    {
      key: 7,
      name: 'Ben',
      job: 'writer',
      dept: 'advertising',
      supervisor: 'Marcus',

    },
    {
      key: 2,
      name: 'Dean',
      job: 'developer',
      dept: 'technology',
      supervisor: 'Jak',

    },
    {
      key: 3,
      name: 'Ankit',
      job: 'developer',
      dept: 'technology',
      supervisor: 'Jak'

    },
    {
      key: 4,
      name: 'John Hancock',
      job: 'lawyer',
      dept: 'legal',
      supervisor: 'CEO',

    },
    {
      key: 5,
      name: 'Wendy',
      job: 'artist',
      dept: 'advertising',
      supervisor: 'Marcus',

    },
    {
      key: 6,
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
