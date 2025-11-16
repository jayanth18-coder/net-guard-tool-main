import React, { useEffect, useState } from "react";

const VPNChecker = () => {
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

  // Replace these with your home details for reliable "No VPN" detection
  const homeCountry = "India";
  const homeISP = "Reliance Jio Infocomm Limited"; // Or your normal ISP

  function getVPNStatus() {
    if (!info) return "Unknown";
    if (!info.isp || !info.country) return "Unknown";
    let isVPN = info.country !== homeCountry || info.isp !== homeISP;
    return isVPN ? "VPN Detected" : "No VPN Detected";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-2">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8 border border-blue-100">
        <h2 className="text-2xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600">
          VPN Connection Checker
        </h2>
        <p className="mb-5 text-center text-gray-500">
          Check if your VPN is hiding your real IP and ISP info.
        </p>
        {loading ? (
          <div className="text-lg text-blue-600 text-center">Checking...</div>
        ) : (
          <div>
            <div className="mb-5 text-center">
              <span className={`font-bold text-xl px-5 py-2 rounded-lg ${
                getVPNStatus() === "No VPN Detected"
                  ? "bg-green-100 text-green-700"
                  : getVPNStatus() === "VPN Detected"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-gray-200 text-gray-700"
              }`}>
                {getVPNStatus()}
              </span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-1">
              <div className="font-semibold text-gray-700">Current IP</div>
              <div className="font-mono">{info.query}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-1">
              <div className="font-semibold text-gray-700">Location</div>
              <div>{info.city}, {info.regionName}, {info.country}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-1">
              <div className="font-semibold text-gray-700">ISP</div>
              <div>{info.isp}</div>
            </div>
          </div>
        )}
        <div className="mt-8 text-sm text-gray-500 text-center">
          Tip: For best results, compare your normal ISP/country with what appears under VPN.
        </div>
      </div>
    </div>
  );
};

export default VPNChecker;
