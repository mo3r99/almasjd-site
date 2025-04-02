import { Input } from "@/components/ui/input";

export default function GiftAidForm({ amount, postcode, setPostcode, validatePostcode }) {
  return (
    <>
      <p className="text-sm mt-4">
        If you have paid at least £{amount} or more in income tax or capital
        gains tax this year, then opting into gift aid means HMRC can increase your donation by 25%.
      </p>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-3 gap-x-8 gap-y-2 md:gap-y-4 mb-2">
        <div className="col-span-2 md:col-span-3">
          <label htmlFor={"house-number"}>House No./Name:</label>
          <Input name="house-number" id={"house-number"} required />
        </div>
        <div className="col-span-2 md:col-span-3">
          <label htmlFor={"street"}>Street Address:</label>
          <Input name="street" id={"street"} required />
        </div>
        <div className="col-span-2 md:col-span-3">
          <label htmlFor={"city"}>City:</label>
          <Input name="city" id={"city"} required />
        </div>
        <div className="col-span-1">
          <label htmlFor={"postcode"}>Postcode:</label>
          <Input
            name="postcode"
            id={"postcode"}
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            onBlur={validatePostcode}
            required
          />
        </div>
      </div>
    </>
  );
}
