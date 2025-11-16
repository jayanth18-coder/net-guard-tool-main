import React, { useState } from "react";

function getPasswordStrength(pw: string) {
  let score = 0;
  if (!pw) return score;
  // Increment score for length
  if (pw.length >= 8) score++;
  if (pw.length >= 12) score++;
  // Increment score for combinations
  if (/[a-z]/.test(pw)) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;

  if (score <= 2) return "Weak";
  if (score <= 4) return "Medium";
  return "Strong";
}

const PasswordStrength = () => {
  const [password, setPassword] = useState("");
  const strength = getPasswordStrength(password);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-2">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8 border border-blue-100">
        <h2 className="text-2xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600">
          Password Strength Checker
        </h2>
        <p className="mb-6 text-center text-gray-500">Enter your password below to see its strength</p>
        <input
          type="password"
          className="w-full px-4 py-2 rounded-lg border border-gray-200 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Type password..."
        />
        <div className="text-center">
          <span
            className={`font-bold text-xl px-5 py-2 rounded-lg ${
              strength === "Weak"
                ? "bg-red-100 text-red-600"
                : strength === "Medium"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {strength}
          </span>
        </div>
        <ul className="mt-6 text-sm text-gray-600 space-y-1">
          <li>Password should be at least 8 characters</li>
          <li>Use numbers, uppercase and lowercase, special characters</li>
        </ul>
      </div>
    </div>
  );
};

export default PasswordStrength;
