import React, { useEffect } from "react";
import { User } from "../../utils/types";
import "../../App.css";

interface UserTableProps {
  userData: User[];
}

const UserTable: React.FC<UserTableProps> = ({ userData }) => {
  useEffect(() => {
    console.log("userData", userData);
  }, []);

  return (
    <div className="table-container">
        <h1>User Table</h1>
 <div className="table-wrapper">      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>EmailAddress</th>
            <th>Phone</th>
            <th>JobTitle</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((user, index) => (
            <tr key={user.ID}>
              <td>{user.ID}</td>
              <td>{user.FirstNameLastName}</td>
              <td>{user.EmailAddress}</td>
              <td>{user.Email}</td>
              <td>{user.Phone}</td>
              <td>{user.JobTitle}</td>
              <td>{user.Company}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
 
  );
};

export default UserTable;
