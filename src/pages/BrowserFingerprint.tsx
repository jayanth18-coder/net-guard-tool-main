import React, { useState } from "react";

// Simple hash function (FNV-1a)
function hash(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
  }
  return ("00000000" + (h >>> 0).toString(16)).slice(-8);
}

function getFingerprint() {
  // Collect common fingerprint properties
  const items = [
    `UserAgent:${navigator.userAgent}`,
    `Platform:${navigator.platform}`,
    `Language:${navigator.language}`,
    `Languages:${navigator.languages}`,
    `ScreenRes:${window.screen.width}x${window.screen.height}`,
    `ColorDepth:${window.screen.colorDepth}`,
    `Timezone:${Intl.DateTimeFormat().resolvedOptions().timeZone}`,
    `Cookies:${navigator.cookieEnabled}`,
    `JavaEnabled:${navigator.javaEnabled ? navigator.javaEnabled() : 'N/A'}`,
    `plugins:${Array.from(navigator.plugins).map(p => p.name).join(',')}`
  ];
  return items.join('\n');
}

const BrowserFingerprint = () => {
  const [fingerprint, setFingerprint] = useState<string | null>(null);
  const [hashVal, setHashVal] = useState<string | null>(null);

  const handleGenerate = () => {
    const fpData = getFingerprint();
    setFingerprint(fpData);
    setHashVal(hash(fpData));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-indigo-100 px-2">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8 border border-green-100">
        <h2 className="text-2xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-indigo-600">
          Browser Fingerprint
        </h2>
        <p className="mb-6 text-center text-gray-500">
          See what information creates your browser’s unique fingerprint.
        </p>
        <button
          onClick={handleGenerate}
          className="w-full py-3 font-semibold rounded-lg transition bg-gradient-to-r from-green-500 to-indigo-500 text-white shadow-lg hover:scale-105 hover:opacity-90"
        >
          View Fingerprint
        </button>
        {fingerprint && (
          <div className="mt-8">
            <div className="text-lg font-semibold mb-2 text-center">Your Browser Fingerprint Hash:</div>
            <div className="font-mono p-2 rounded-lg bg-green-50 mb-4 break-all text-center">{hashVal}</div>
            <div className="text-sm font-bold mb-2">Details used in fingerprint:</div>
            <pre className="bg-gray-50 rounded-lg p-3 text-xs overflow-auto">{fingerprint}</pre>
          </div>
        )}
        <div className="mt-8 text-sm text-gray-500 text-center">
          Browser fingerprint combines browser, device, and plugin info into a unique ID used by websites to track users <br/>
          For detailed analysis, use tools like <a href="https://amiunique.org/" target="_blank" rel="noopener" className="underline text-blue-600">amiunique.org</a>
        </div>
      </div>
    </div>
  );
};

export default BrowserFingerprint;
