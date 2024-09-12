'use client';

import { useState } from 'react';

const Campaigns = () => {
  const [campaignId, setCampaignId] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [newCampaignName, setNewCampaignName] = useState('');
  const [campaignData, setCampaignData] = useState<any | null>(null);
  const [allCampaigns, setAllCampaigns] = useState([
    { id: '001', name: 'Campaign 1', status: 'Active' },
    { id: '002', name: 'Campaign 2', status: 'Paused' },
    { id: '003', name: 'Campaign 3', status: 'Active' },
    { id: '004', name: 'Campaign 4', status: 'Inactive' },
  ]);

  const createCampaign = (e: any) => {
    e.preventDefault();
    const newCampaign = {
      id: (allCampaigns.length + 1).toString().padStart(3, '0'),
      name: newCampaignName || `Campaign ${allCampaigns.length + 1}`,
      status: 'Active',
    };
    setAllCampaigns([...allCampaigns, newCampaign]);
    setNewCampaignName('');
    alert('Campaign created successfully.');
  };

  const fetchCampaign = (e: any) => {
    e.preventDefault();
    const campaign = allCampaigns.find((c) => c.id === campaignId);
    if (campaign) {
      setCampaignData(campaign);
    } else {
      setCampaignData({ id: campaignId, name: 'Unknown Campaign', status: 'Not Found' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-8 text-black">Manage Campaigns</h1>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8">
        {/* Campaign Form Section */}
        <div className="w-full lg:w-1/2 p-6 bg-white rounded shadow-md">
          <h2 className="text-xl font-bold mb-6 text-black">Create New Campaign</h2>
          <form onSubmit={createCampaign}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-black">Campaign Name</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                value={newCampaignName}
                onChange={(e) => setNewCampaignName(e.target.value)}
                placeholder="Enter campaign name"
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
              Create Campaign
            </button>
          </form>

          <h2 className="text-xl font-bold mt-8 mb-4 text-black">Fetch Campaign</h2>
          <form onSubmit={fetchCampaign}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-black">Campaign ID</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                value={campaignId}
                onChange={(e) => setCampaignId(e.target.value)}
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
              <label className="block text-sm font-medium text-black">Customer ID</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
              Fetch Campaign
            </button>
          </form>

          {campaignData && (
            <div className="bg-gray-50 p-4 mt-6 shadow-md rounded">
              <h3 className="text-xl font-bold text-black">Campaign Details</h3>
              <p className="text-black">ID: {campaignData.id}</p>
              <p className="text-black">Name: {campaignData.name}</p>
              <p className="text-black">Status: {campaignData.status}</p>
            </div>
          )}
        </div>

        {/* Campaign List Section */}
        <div className="w-full lg:w-1/2 p-6 bg-white rounded shadow-md">
          <h2 className="text-xl font-bold mb-6 text-black">All Campaigns</h2>
          <table className="min-w-full bg-gray-50 text-left rounded">
            <thead>
              <tr>
                <th className="px-4 py-2 border text-black">ID</th>
                <th className="px-4 py-2 border text-black">Name</th>
                <th className="px-4 py-2 border text-black">Status</th>
              </tr>
            </thead>
            <tbody>
              {allCampaigns.map((campaign, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border text-black">{campaign.id}</td>
                  <td className="px-4 py-2 border text-black">{campaign.name}</td>
                  <td className="px-4 py-2 border text-black">{campaign.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
