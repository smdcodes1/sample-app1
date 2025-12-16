
import React from 'react'

function Users() {
    const recommendedUsers = [
    { id: 1, user: 'Asim', phone:"9497235611"},
    { id: 2, user: 'Ayan', phone:"9497235611"},
    { id: 3, user: 'Afi', phone:"9497235611"},

  ];
  return (
    <div>
      <h1>New Users</h1>
      {recommendedUsers.map((val)=> {
       return <div key={val.id} onClick={()=> {}}>
        <p >{val.user}</p>
        <p >{val.phone}</p>
      </div>
  })}
      
    </div>
  );
}

export default Users
