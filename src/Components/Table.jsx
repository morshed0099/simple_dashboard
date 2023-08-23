import React from 'react';

const Table = () => {
    return (
        <div className="overflow-x-auto">
  <table className="table border mb-4  table-zebra">
    {/* head */}
    <thead className='border'>
      <tr>
        <th className='border'>sl</th>
        <th className='border'>Name</th>
        <th className='border'>Job</th>
        <th className='border'>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th className='border'>1</th>
        <td className='border'>Cy Ganderton</td>
        <td className='border'>Quality Control Specialist</td>
        <td className='border'>Blue</td>
      </tr>
      {/* row 2 */}
 
 
    </tbody>
  </table>
</div>
    );
};

export default Table;