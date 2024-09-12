'use client';

import { useState, useEffect } from 'react';

const Tokens = () => {
  const [email, setEmail] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [clientId, setClientId] = useState('');
  const [developerToken, setDeveloperToken] = useState('');
  const [apiVersion, setApiVersion] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [tokens, setTokens] = useState([]);

  const saveToken = (e: any) => {
    e.preventDefault();
    const newToken = {
      email,
      accessToken,
      clientId,
      apiVersion,
      customerId,
    };
    setTokens([...tokens, newToken]);
    setEmail('');
    setAccessToken('');
    setClientSecret('');
    setClientId('');
    setDeveloperToken('');
    setApiVersion('');
    setCustomerId('');
    alert('Token saved successfully.');
  };

  useEffect(() => {
    fetchAllTokens();
  }, []);

  const fetchAllTokens = () => {
    setTokens([
      { email: 'user1@example.com', accessToken: 'token1', clientId: 'client1', apiVersion: 'v1', customerId: '1' },
      { email: 'user2@example.com', accessToken: 'token2', clientId: 'client2', apiVersion: 'v2', customerId: '2' },
      { email: 'user3@example.com', accessToken: 'token3', clientId: 'client3', apiVersion: 'v3', customerId: '3' },
      { email: 'user4@example.com', accessToken: 'token4', clientId: 'client4', apiVersion: 'v4', customerId: '4' },
      { email: 'user5@example.com', accessToken: 'token5', clientId: 'client5', apiVersion: 'v5', customerId: '5' },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex flex-col lg:flex-row lg:space-x-6 items-start justify-center">
        {/* Form on the left */}
        <form className="bg-white p-6 rounded shadow-md w-full lg:w-1/3 mb-6 lg:mb-0" onSubmit={saveToken}>
          <h2 className="text-xl font-bold mb-4 text-black">Save Token</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Email</label>
            <input
              type="email"
              className="w-full border px-3 py-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Access Token</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              value={accessToken}
              onChange={(e) => setAccessToken(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Client Secret</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              value={clientSecret}
              onChange={(e) => setClientSecret(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Client ID</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Developer Token</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              value={developerToken}
              onChange={(e) => setDeveloperToken(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">API Version</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              value={apiVersion}
              onChange={(e) => setApiVersion(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Customer ID</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
            Save Token
          </button>
        </form>

        <div className="w-full lg:w-2/3">
          <button onClick={fetchAllTokens} className="bg-green-500 text-white px-4 py-2 rounded mb-4">
            Fetch All Tokens
          </button>
          <table className="min-w-full bg-white shadow-md rounded overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 text-black">Email</th>
                <th className="py-2 px-4 text-black">Access Token</th>
                <th className="py-2 px-4 text-black">Client ID</th>
                <th className="py-2 px-4 text-black">API Version</th>
                <th className="py-2 px-4 text-black">Customer ID</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((token, index) => (
                <tr key={index} className="border-t hover:bg-gray-100">
                  <td className="py-2 px-4 text-black">{token.email}</td>
                  <td className="py-2 px-4 text-black">{token.accessToken}</td>
                  <td className="py-2 px-4 text-black">{token.clientId}</td>
                  <td className="py-2 px-4 text-black">{token.apiVersion}</td>
                  <td className="py-2 px-4 text-black">{token.customerId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tokens;
