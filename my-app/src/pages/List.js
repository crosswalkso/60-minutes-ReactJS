import React from "react";

const User = (props) => {
  return (
    <tr>
      <td>{props.userData.name}</td>
      <td>{props.userData.email}</td>
    </tr>
  );
};

const UserList = () => {
  const users = [
    { email: "ryu@gmail.com", name: "유재석" },
    { email: "kim@gmail.com", name: "김종국" },
    { email: "ha@gmail.com", name: "하하" },
    { email: "s@gmail.com", name: "송지효" },
  ];
  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>이메일</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User userData={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
