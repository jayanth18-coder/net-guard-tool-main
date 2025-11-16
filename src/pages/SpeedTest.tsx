import React, { useState } from "react";
import { Zap, ArrowDownCircle, ArrowUpCircle, Loader2 } from "lucide-react";

const SpeedTest = () => {
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [download, setDownload] = useState<string | null>(null);
  const [upload, setUpload] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const runSpeedTest = async () => {
    setError(null);
    setDownload(null);
    setUpload(null);
    setLoading(true);
    setResult("Testing download speed...");

    // Animated loader while running test
    // Download
    const downloadUrl = "/image.jpg";
    const fileSizeBytes = 128379;
    let tStart = performance.now();
    try {
      let response = await fetch(downloadUrl, { cache: "no-store" });
      if (!response.ok) throw new Error("Download fetch failed " + response.status);
      await response.arrayBuffer();
      let tEnd = performance.now();
      let duration = (tEnd - tStart) / 1000;
      let bitsLoaded = fileSizeBytes * 8;
      let downloadSpeedMbps = (bitsLoaded / duration / 1024 / 1024).toFixed(2);
      setDownload(downloadSpeedMbps);

      // Upload
      setResult("Testing upload speed...");
      const uploadSizeBytes = 100 * 1024;
      const uploadBlob = new Blob([new Uint8Array(uploadSizeBytes)]);
      let tStartUpload = performance.now();
      let formData = new FormData();
      formData.append("file", uploadBlob, "testfile.bin");
      let uploadResp = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
      });
      let tEndUpload = performance.now();
      if (!uploadResp.ok) throw new Error("Upload fetch failed " + uploadResp.status);
      let durationUpload = (tEndUpload - tStartUpload) / 1000;
      let bitsUploaded = uploadSizeBytes * 8;
      let uploadSpeedMbps = (bitsUploaded / durationUpload / 1024 / 1024).toFixed(2);
      setUpload(uploadSpeedMbps);
      setResult("");
    } catch (err: any) {
      setError("Test failed: " + err.message);
      setResult("");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center px-2">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8 border border-blue-100">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-gradient-to-tr from-blue-500 to-indigo-400 rounded-full p-5 shadow-lg">
            <Zap className="h-12 w-12 text-white" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600">
          Speed Test
        </h2>
        <p className="text-center text-gray-500 mb-8">Test your download & upload speed instantly</p>
        <button
          onClick={runSpeedTest}
          disabled={loading}
          className={`w-full py-3 font-semibold rounded-lg transition bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg hover:scale-105
                      ${loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"}`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="animate-spin h-5 w-5" />
              Testing...
            </span>
          ) : (
            <>
              <Zap className="inline-block mr-2 h-5 w-5" />
              Start Test
            </>
          )}
        </button>

        <div className="mt-10">
          {error && (
            <div className="rounded bg-red-100 text-red-700 px-4 py-2 mb-4 text-center font-medium">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-5 items-center">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2 text-gray-600">Download Speed</span>
              <ArrowDownCircle className={`h-8 w-8 mb-1 ${download ? "text-blue-500" : "text-gray-400"}`} />
              <span className="text-2xl font-bold">
                {download ? `${download} Mbps` : "--"}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2 text-gray-600">Upload Speed</span>
              <ArrowUpCircle className={`h-8 w-8 mb-1 ${upload ? "text-indigo-500" : "text-gray-400"}`} />
              <span className="text-2xl font-bold">
                {upload ? `${upload} Mbps` : "--"}
              </span>
            </div>
          </div>
        </div>

        {result && loading && (
          <div className="text-center text-blue-500 mt-7 text-lg font-medium animate-pulse">{result}</div>
        )}
      </div>
    </div>
  );
};

export default SpeedTest;
