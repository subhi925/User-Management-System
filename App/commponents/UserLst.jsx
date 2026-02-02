import React from "react";

const UserLst = ({ usersList }) => {
  return (
    <div className="card-group">
      {usersList.map((user, idx) => (
        <div className="card border-secondary" key={idx}>
          <div className="card-body">
            <h5 className="card-title">{user.name} </h5>
            <p className="card-text">{user.id}</p>{" "}
            <p className="card-text">{user.email}</p>
            <p className="card-text">{user.email}</p>
          </div>

          <div className="card-footer">
            <small className="text-muted">Role: {user.role}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserLst;
