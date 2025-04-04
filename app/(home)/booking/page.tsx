import CardDetail from "@/components/bookings/CardDetail";
import HotelBookingForm from "@/components/bookings/HotelBookingForm";

export default function Page() {
  return (
    <main>
      <div className="grid grid-cols-2 mt-10">
        <CardDetail />
        <HotelBookingForm />
      </div>
    </main>
  );
}
