"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "../ui/button";

export default function HotelBookingForm() {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("ชื่อ:", name);
    console.log("เช็คอิน:", checkInDate);
    console.log("เช็คเอาท์:", checkOutDate);
    // ตรงนี้สามารถส่งข้อมูลไป backend ได้
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col mx-auto p-4 border shadow-md rounded-2xl"
    >
      <h2 className="text-xl font-bold mb-4">Booking Forms</h2>

      <label className="block mb-2">Please enter the guest name.</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        required
      />

      <label className="block mb-2">Check-in Date</label>
      <DatePicker
        selected={checkInDate}
        onChange={(date) => setCheckInDate(date)}
        selectsStart
        startDate={checkInDate}
        endDate={checkOutDate}
        minDate={new Date()}
        dateFormat="dd/MM/yyyy"
        placeholderText="select check-in date"
        className="w-full p-2 border rounded mb-4"
      />

      <label className="block mb-2">Check-out Date</label>
      <DatePicker
        selected={checkOutDate}
        onChange={(date: Date | null) => setCheckOutDate(date)}
        selectsEnd
        startDate={checkInDate}
        endDate={checkOutDate}
        minDate={checkInDate || new Date()}
        dateFormat="dd/MM/yyyy"
        placeholderText="select check-out date"
        className="w-full p-2 border rounded mb-4"
      />
      <div className="flex justify-center items-center mt-4">

      <Button
        type="submit"
        className="w-[500px] bg-[#395c4e] text-white p-2 rounded hover:bg-[#1d1d1d] transition duration-200"
      >
        Submit
      </Button>

      </div>
    </form>
  );
}
