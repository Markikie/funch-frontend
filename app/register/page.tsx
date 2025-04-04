"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function registerUser(ev: React.FormEvent) {
    ev.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        throw new Error("Registration failed. Try again.");
      }

      alert("User registered successfully. Please login.");
      router.push("/login");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6 text-neutral-950">
          Register
        </h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={registerUser} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded text-gray-500"
            required
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded text-gray-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded text-gray-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#395c4e] text-white p-2 rounded"
          >
            Register
          </button>
          <div className="text-center text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="underline text-blue-600">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
