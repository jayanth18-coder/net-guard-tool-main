import React, { useEffect, useState } from "react";

// List of common tracker script URL keywords
const KNOWN_TRACKERS = [
  { name: "Google Analytics", keywords: ["google-analytics", "gtag", "analytics.js", "googletagmanager"] },
  { name: "Facebook Pixel", keywords: ["connect.facebook.net", "fbq"] },
  { name: "Hotjar", keywords: ["hotjar"] },
  { name: "Mixpanel", keywords: ["mixpanel"] },
  { name: "LinkedIn Insights", keywords: ["ads.linkedin.com", "linkedin.com/insights"] },
  { name: "Amplitude", keywords: ["amplitude"] },
  { name: "Crazy Egg", keywords: ["crazyegg"] },
  { name: "Microsoft Clarity", keywords: ["clarity.ms", "clarity.min.js"] }
  // Add more tracker definitions here!
];

const scanTrackers = () => {
  // Scan all script src attributes
  const scripts = Array.from(document.scripts);
  const found = [];
  for (const tracker of KNOWN_TRACKERS) {
    for (const keyword of tracker.keywords) {
      if (scripts.some(s => s.src && s.src.includes(keyword))) {
        found.push(tracker.name);
        break;
      }
    }
  }
  // You can also scan window properties for things like window.fbq etc.
  if (window.fbq) found.push("Facebook Pixel");
  if (window.ga) found.push("Google Analytics");
  return found;
};

const TrackerDetector = () => {
  const [trackers, setTrackers] = useState<string[]>([]);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    // Only scan when asked
    // setTrackers(scanTrackers()); // For instant auto scan
  }, []);

  const handleScan = () => {
    setTrackers(scanTrackers());
    setScanned(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-indigo-100 px-2">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8 border border-pink-100">
        <h2 className="text-2xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-700 to-indigo-600">
          Tracker Detector
        </h2>
        <p className="mb-6 text-center text-gray-500">
          Scan this page for common website tracking scripts.
        </p>
        <button
          onClick={handleScan}
          className="w-full py-3 font-semibold rounded-lg transition bg-gradient-to-r from-pink-500 to-indigo-500 text-white shadow-lg hover:scale-105 hover:opacity-90"
        >
          Scan Website
        </button>
        {scanned && (
          <div className="mt-8">
            {trackers.length > 0 ? (
              <div>
                <div className="font-bold text-lg mb-3 text-pink-700 text-center">Tracking Scripts Detected:</div>
                <ul className="list-disc pl-6 text-gray-700">
                  {trackers.map(t => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="font-bold text-lg mb-3 text-green-700 text-center">
                ✅ No common trackers detected on this page.
              </div>
            )}
          </div>
        )}
        <div className="mt-8 text-sm text-gray-500 text-center">
          This tool works for scripts loaded into this app. For advanced multi-site scanning, use browser extensions such as uBlock or Privacy Badger.
        </div>
      </div>
    </div>
  );
};

export default TrackerDetector;
