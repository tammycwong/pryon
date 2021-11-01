import React from 'react'

export default function AstronautsTable({astronaut}) {
    const {name, craft} = astronaut;

    return (
        <table className="table-container">
            <thead className="header">
                <tr>
                    <th>Name</th>
                    <th>Craft</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                <td>{name}</td>
                <td>{craft}</td>
                </tr>
            </tbody>
        </table>
    )
}
