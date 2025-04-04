import { hotelTypes } from "@/config/hotel-option-config";
import { HotelFilterProps } from "@/types";


export default function HotelFilter({ selectedHotelTypes, onChange }: HotelFilterProps) {
  return (
    <div className="grid grid-cols-2 border-b border-slate-300 pb-5">
      <h4 className="text-md font-semibold mb-2">Hotel Type</h4>
      {hotelTypes.map((hotelType) => (
        <label key={hotelType} className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="rounded"
            value={hotelType}
            checked={selectedHotelTypes.includes(hotelType)}
            onChange={onChange}
          />
          <span>{hotelType}</span>
        </label>
      ))}
    </div>
  );
}