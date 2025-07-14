import { useEffect, useState } from 'react';

export default function Table() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://builder-dashboard-ui-1.onrender.com/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const filtered = data.filter(d =>
  (d.Brand?.toLowerCase().includes(query.toLowerCase())) ||
  (d.City?.toLowerCase().includes(query.toLowerCase()))||
  (d.Community?.toLowerCase().includes(query.toLowerCase()))
);


  return (
    <div className="bg-white shadow rounded p-4 overflow-x-auto">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by Builder"
        className="border p-2 w-full mb-4 rounded"
      />

      <table className="min-w-[800px] w-full text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Brand</th>
            <th className="p-2 text-left">Plan</th>
            <th className="p-2 text-left">City</th>
            <th className="p-2 text-left">State</th>
            <th className="p-2 text-left">Community</th>
            <th className="p-2 text-left">Builders</th>
            <th className="p-2 text-left">Price</th>
            <th className="p-2 text-left">Sq Ft</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((row, idx) => (
            <tr key={idx} className="border-t">
              <td className="p-2">{row.Date || '-'}</td>
              <td className="p-2">{row.Brand || '-'}</td>
              <td className="p-2">
                <a
                  href={row.URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View Plan
                </a>
              </td>
              <td className="p-2">{row.City || '-'}</td>
              <td className="p-2">{row.State || '-'}</td>
              <td className="p-2">{row.Community || '-'}</td>
              <td className="p-2">{row.Builders || 'N/A'}</td>
              <td className="p-2">
                {row.Price
                  ? `$${Number(row.Price).toLocaleString()}`
                  : '-'}
              </td>
              <td className="p-2">{row['Sq ft'] || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
