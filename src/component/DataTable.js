import React from 'react';
import '../Style/DataTable.css'


function DataTable(props) {
  const data = [
    { round: "10:30PM", result: "340-7", round2: "04:30PM", result2:  "389-0"},
    { round: "10:30PM", result: "340-7", round2: "04:30PM", result2:  "389-0"},
    { round: "10:30PM", result: "340-7", round2: "04:30PM", result2:  "389-0"},
    { round: "10:30PM", result: "340-7", round2: "04:30PM", result2:  "389-0"}
    // Add more data as needed
  ];

  return (
    
    <div>

<div className='hope'><div className='text'>MAIN FATAFAT RESULT</div> <button className='btnchart' onClick={props.Chart}>Chart</button></div>
    <table>
    



      <thead>
        <tr>
          <th className='tho'>ROUND</th>
          <th className='tho1'>RESULT</th>
          <th className='tho'>ROUND</th>
          <th className='tho1'>RESULT</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            <td > {item.round}</td>
            <td className='tdh'>{item.result}</td>
            <td>{item.round2}</td>
            <td className='tdh'>{item.result2}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default DataTable;