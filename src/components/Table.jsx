import React from 'react';

const Table = () => {
  return (
    <div className="App">
    <table>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
        </tr>
        <tr>
            <td>Hammad</td>
            <td>19</td>
            <td>Male</td>
            <button>Delete</button>
        </tr>
        <tr>
            <td>Sahab</td>
            <td>19</td>
            <td>Male</td>
            <button>Delete</button>
        </tr>
        <tr>
            <td>Osman</td>
            <td>25</td>
            <td>Male</td>
            <button>Delete</button>
        </tr>
    </table>
</div>
  );
}

export default Table;
