import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAction } from "../actions/UserActions";

function UsersList() {
  const dispatch = useDispatch();
  const allUserState = useSelector((state) => state.getAllUserReducer);

  const { users } = allUserState;
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    dispatch(getAllUserAction());
  }, [users]);

  return (
    <div>
      <div className="container">
        <table className="table table-hovered table-success table-striped mx-auto my-3 w-100">
          <thead className="table-success">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Mail</th>
              <th>Created Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.mail}</td>
                <td>{new Date(user.createdAt).toLocaleString("tr-TR")}</td>

                <td>
                  {currentUser._id === user._id ? (
                    <>
                      <button className="btn btn-danger" disabled>
                        Delete
                      </button>
                    </>
                  ) : (
                    <button className="btn btn-danger"> Delete</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersList;
