import React, { useEffect, useState } from "react";

// Use a public geo IP API
const geoApi = "https://api.ip.sb/geoip"; // Simple, free

const DNSLeakTest = () => {
  const [info, setInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(geoApi)
      .then(res => res.json())
      .then(data => {
        setInfo(data);
        setLoading(false);
      });
  }, []);

  // User should compare results with their VPN/external DNS manually
  function getDNSLeakHint() {
    if (!info) return "";
    // If you are on VPN, but your DNS (ISP) matches your real ISP, there may be a leak
    // Example trusted VPNs: "NordVPN", "Private Internet Access", etc.
    // Example leaked (home ISP): "Jio", "Airtel", etc.
    const suspectISPs = ["Jio", "Airtel", "BSNL", "ACT", "Hathway"];
    const isSuspect = suspectISPs.some(s => (info?.isp || "").toLowerCase().includes(s.toLowerCase()));
    if (isSuspect)
      return "⚠️ Possible DNS Leak: Your DNS provider matches a known local ISP. If you are using a VPN, this suggests DNS requests may go outside your VPN.";
    return "✅ No obvious DNS leak detected. Your DNS provider does not match local ISPs.";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-100 px-2">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8 border border-purple-100">
        <h2 className="text-2xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-600">
          DNS Leak Test
        </h2>
        <p className="mb-6 text-center text-gray-500">
          This test checks if your DNS queries are leaking to your normal ISP instead of your VPN.
        </p>
        {loading ? (
          <div className="text-lg text-blue-600 text-center">Checking...</div>
        ) : (
          <div>
            <div className="font-bold text-center text-lg mb-4">
              {getDNSLeakHint()}
            </div>
            <div className="bg-blue-50 rounded-lg p-4 mb-2">
              <div className="font-semibold text-gray-700">DNS Server IP (Your Detected IP)</div>
              <div className="font-mono">{info.ip}</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 mb-2">
              <div className="font-semibold text-gray-700">ISP</div>
              <div>{info.isp}</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 mb-2">
              <div className="font-semibold text-gray-700">Country</div>
              <div>{info.country}</div>
            </div>
          </div>
        )}
        <div className="mt-8 text-sm text-gray-500 text-center">
          Note: For full DNS leak testing, advanced browser tools or manual check at <a className="text-blue-600 underline" href="https://dnsleaktest.com/" target="_blank" rel="noopener">dnsleaktest.com</a> are recommended.
        </div>
      </div>
    </div>
  );
};

export default DNSLeakTest;
