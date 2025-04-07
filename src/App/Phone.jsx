import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PhoneCan = ({ value, onChange }) => {
  return (
    <div className="w-full max-w-[250px] lg:max-w-[600px]">
      <PhoneInput
        international
        defaultCountry="RU"
        placeholder="Telefon raqamingizni kiriting"
        value={value}
        onChange={onChange}
        className="font-semibold text-xl px-3 py-3.5 rounded-2xl bg-gray-100"
      />
    </div>
  );
};

export default PhoneCan;
