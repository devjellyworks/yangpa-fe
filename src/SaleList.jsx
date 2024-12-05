import { useState } from 'react';
import axios from 'axios';

export default function SaleList() {
  const [sales, setSales] = useState([]);

  const getSales = async () => {
    const response = await axios.get(
      // `http://localhost:3001/sales`,
      `https://yangpa-be-lyr111-cgd2cdd4a6bvfub6.koreacentral-01.azurewebsites.net/sales`,
      {
        params: {
          page: 1,
          pageSize: 10,
        },
      }
    );
    const data = response.data;
    setSales(data.documents);
    console.log(sales);
  };

  return (
    <div>
      <button onClick={getSales}>Sale 가져오기2</button>
      {sales.map((sale) => {
        return (
          <div>
            <h3>{sale.productName}</h3>
          </div>
        );
      })}
    </div>
  );
}
