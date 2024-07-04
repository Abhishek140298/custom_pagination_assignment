import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Pagination from './components/pagination';
import UserTable from './components/table';
import {User} from './utils/types'



function App():JSX.Element {

  const [userData,setUserData]=React.useState<User[]>([])
  const [pageNumber,setPageNumber]=React.useState<number []>([1,2,3,4])
  const [current,setCurrentPageNumber]=React.useState<number>(1)

React.useEffect(()=>{
  const fetchData = async () => {
    try {
      const response = await fetch(`https://give-me-users-forever.vercel.app/api/users/${current}/next`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const jsonData = await response.json();
      console.log("Set The data",jsonData)
      const userList:User[]=jsonData.users
      setUserData(userList)
    
      
    } catch (error) {
      console.error('Error fetching data:', error);
    
    }
  };

  fetchData();



},[current])




  return (
   <div className="App">
<UserTable userData={userData}/>
<Pagination  pageNumber={pageNumber} setPageNumber={setPageNumber} current={current} setCurrentPageNumber={setCurrentPageNumber}/>

    </div>
  );
}

export default App;
