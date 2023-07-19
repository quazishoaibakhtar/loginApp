import React from "react";


function DataTable() {
  const data = [
    {
      TIME: "04-07-23",
      DATE: "Twesday",
      r1: "290",
      r1a: "1",
      r2: "245",
      r2a: "8",
      r3: "250",
      r3a: "5",
      r4: "150",
      r4a: "2",
      r5: "200",
      r5a: "7",
      r6: "145",
      r6a: "3",
      r7: "250",
      r7a: "5",
      r8: "123",
      r8a: "10",
    },
    {
      TIME: "04-07-23",
      DATE: "Twesday",
      r1: "290",
      r1a: "1",
      r2: "245",
      r2a: "8",
      r3: "250",
      r3a: "5",
      r4: "150",
      r4a: "2",
      r5: "200",
      r5a: "7",
      r6: "145",
      r6a: "3",
      r7: "250",
      r7a: "5",
      r8: "123",
      r8a: "10",
    },
    {
      TIME: "04-07-23",
      DATE: "Twesday",
      r1: "290",
      r1a: "1",
      r2: "245",
      r2a: "8",
      r3: "250",
      r3a: "5",
      r4: "150",
      r4a: "2",
      r5: "200",
      r5a: "7",
      r6: "145",
      r6a: "3",
      r7: "250",
      r7a: "5",
      r8: "123",
      r8a: "10",
    },
    {
      TIME: "04-07-23",
      DATE: "Twesday",
      r1: "290",
      r1a: "1",
      r2: "245",
      r2a: "8",
      r3: "250",
      r3a: "5",
      r4: "150",
      r4a: "2",
      r5: "200",
      r5a: "7",
      r6: "145",
      r6a: "3",
      r7: "250",
      r7a: "5",
      r8: "123",
      r8a: "10",
    },
    {
      TIME: "04-07-23",
      DATE: "Twesday",
      r1: "290",
      r1a: "1",
      r2: "245",
      r2a: "8",
      r3: "250",
      r3a: "5",
      r4: "150",
      r4a: "2",
      r5: "200",
      r5a: "7",
      r6: "145",
      r6a: "3",
      r7: "250",
      r7a: "5",
      r8: "123",
      r8a: "10",
    },
    {
      TIME: "04-07-23",
      DATE: "Twesday",
      r1: "290",
      r1a: "1",
      r2: "245",
      r2a: "8",
      r3: "250",
      r3a: "5",
      r4: "150",
      r4a: "2",
      r5: "200",
      r5a: "7",
      r6: "145",
      r6a: "3",
      r7: "250",
      r7a: "5",
      r8: "123",
      r8a: "10",
    },
    {
      TIME: "04-07-23",
      DATE: "Twesday",
      r1: "290",
      r1a: "1",
      r2: "245",
      r2a: "8",
      r3: "250",
      r3a: "5",
      r4: "150",
      r4a: "2",
      r5: "200",
      r5a: "7",
      r6: "145",
      r6a: "3",
      r7: "250",
      r7a: "5",
      r8: "123",
      r8a: "10",
    },
    {
        TIME: "04-07-23",
        DATE: "Twesday",
        r1: "290",
        r1a: "1",
        r2: "245",
        r2a: "8",
        r3: "250",
        r3a: "5",
        r4: "150",
        r4a: "2",
        r5: "200",
        r5a: "7",
        r6: "145",
        r6a: "3",
        r7: "250",
        r7a: "5",
        r8: "123",
        r8a: "10",
      },
    // Add more data as needed
  ];

  return (
    
    <table className="tablechart">
     
      <thead >
        
        <tr>
          <th className="throw">DATE</th>
          <th className="throw">10:30</th>
          <th className="throw">12:00</th>
          <th className="throw">11:00</th>
          <th className="throw">1:23</th>
          <th className="throw">3:25</th>
          <th className="throw">4:30</th>
          <th className="throw">9:00</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            <td className='tdcol'>
              {item.TIME} <br />
              {item.DATE}
            </td>
            <td className='tdcol'>
              {item.r1} <br /> <div className="br">{item.r1a}</div>
            </td>
            <td className='tdcol'>
              {item.r2} <br /> <div className="br">{item.r2a}</div>
            </td>
            <td className='tdcol'>
              {item.r3} <br /> <div className="br"> {item.r3a}</div>
            </td>
            <td className='tdcol'>
              {item.r4} <br /> <div className="br"> {item.r4a}</div>
            </td>
            <td className='tdcol'>
              {item.r5} <br /> <div className="br"> {item.r5a}</div>
            </td>
            <td className='tdcol'>
              {item.r6} <br /> <div className="br"> {item.r6a}</div>
            </td>
            <td className='tdcol'>
              {item.r7} <br /> <div className="br"> {item.r7a}</div>
            </td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
