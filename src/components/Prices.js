import React from 'react';

// Styling
import Table from 'react-bootstrap/Table';

const Prices = () => {


  return(
    <div>
      <h1 style={{marginBottom: 25}}>Hinnasto</h1>
      <Table hover style={{marginTop: 50}}>
        <thead>
          <tr>
            <th></th>
            <th>S-etukortilla</th>
            <th>Perushinta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Aikuiset</td>
            <td>15€</td>
            <td>17€</td>
          </tr>
          <tr>
            <td>Lapset, 7 - 15 v.</td>
            <td>6€</td>
            <td>8€</td>
          </tr>
          <tr>
            <td>Eläkeläiset</td>
            <td>14€</td>
            <td>16€</td>
          </tr>
          <tr>
            <td>Opiskelijat</td>
            <td>14€</td>
            <td>16€</td>
          </tr>
          <tr>
            <td>Ryhmät, minimi 15 hlöä</td>
            <td>14€</td>
            <td>14€</td>
          </tr>
          <tr>
            <td>Ryhmät, minimi 25 hlöä</td>
            <td>13€</td>
            <td>13€</td>
          </tr>
        </tbody>
      </Table>
      <p style={{color: 'red', fontSize: '1.5em'}}>Ryhmien matkanjohtaja ja linja-autonkuljettaja ilmaiseksi</p>
      

    </div>
  );
};

export default Prices;