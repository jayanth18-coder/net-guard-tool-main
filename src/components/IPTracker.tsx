import React, { useState } from "react";

const IPTracker = () => {
  const [ip, setIp] = useState("");
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();
    setLoading(true);
    setInfo(null);
    try {
      const resp = await fetch(`https://ipapi.co/${ip}/json/`);
      const data = await resp.json();
      console.log("IP Lookup Data:", data);
      setInfo(data);
    } catch (err) {
      console.error("API error:", err);
      setInfo({ error: "API error" });
    }
    setLoading(false);
  }

  return (
    <div className="rounded-2xl shadow-xl border border-blue-200 bg-white/90 p-8 min-w-[340px] min-h-[340px] flex flex-col">
      <h2 className="text-xl font-bold mb-4 text-blue-700 flex items-center gap-2">
        <span role="img" aria-label="locate">📍</span> IP Location Tracker
      </h2>
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          placeholder="Enter IP address..."
          value={ip}
          onChange={e => setIp(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
          disabled={loading}
        >{loading ? "Searching..." : "Search"}</button>
      </form>
      {info && (
        info.error ? (
          <div className="text-red-600 text-center font-bold">{info.error}</div>
        ) : info.error || info.detail ? (
          <div className="text-red-600 text-center font-bold">{info.reason || info.detail || "No location found for that IP."}</div>
        ) : (
          <>
            <div className="mb-3 text-sm grid gap-1">
              <div><b>IP:</b> {info.ip}</div>
              <div><b>City:</b> {info.city || "-"}</div>
              <div><b>Region:</b> {info.region || "-"}</div>
              <div><b>Country:</b> {info.country_name || "-"}</div>
              <div><b>Org/ISP:</b> {info.org || "-"}</div>
              <div><b>Coordinates:</b> {info.latitude}, {info.longitude}</div>
            </div>
            {info.latitude && info.longitude &&
              <div className="rounded-xl overflow-hidden shadow-md mb-2">
                <iframe
                  title="map"
                  width="100%"
                  height="170"
                  style={{ border: 0 }}
                  loading="lazy"
                  src={`https://maps.google.com/maps?q=${info.latitude},${info.longitude}&z=12&output=embed`}
                  allowFullScreen
                />
              </div>
            }
          </>
        )
      )}
    </div>
  );
};

export default IPTracker;
