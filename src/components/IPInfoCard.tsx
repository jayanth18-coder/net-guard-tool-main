import React, { useEffect, useState } from "react";

const IPInfoCard = () => {
  const [info, setInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://ip-api.com/json/")
      .then(res => res.json())
      .then(data => {
        setInfo(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="rounded-xl shadow-lg bg-white p-6 mb-6 border border-gray-100">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <span role="img" aria-label="globe">🌐</span>
        Your IP Information
      </h3>
      {loading ? (
        <div className="text-blue-500 text-lg">Loading...</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="font-semibold text-gray-700">IP Address</div>
            <div className="font-mono">{info.query}</div>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="font-semibold text-gray-700">Location</div>
            <div>{info.city}, {info.regionName}, {info.country}</div>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="font-semibold text-gray-700">ISP</div>
            <div>{info.isp || "Unknown"}</div>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="font-semibold text-gray-700">Organization</div>
            <div>{info.org || info.isp || "Unknown"}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IPInfoCard;
