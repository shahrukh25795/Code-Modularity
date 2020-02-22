import React from 'react';
import './user.css'

const User = (props) => {
    // console.log(props.user)
    return (
        <table className="user_list_table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {props.user.map((i, index) => {
                    return (
                        <tr key={`keys_${i.id}_${index}`}>
                            <td>{i.first_name + " " + i.last_name}</td>
                            <td>{i.email}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default User;