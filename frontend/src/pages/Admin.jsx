import React from 'react';
import { useAdmin } from '../context/AdminContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Admin = () => {
    const { data } = useAdmin();

    return (
        <div className="container mt-4">
            <h2>Users</h2>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={user.userid || user.id || index}>
                            <td>{user.userid || user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Admin;