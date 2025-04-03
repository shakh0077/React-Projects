import React from "react";

const Maps = () => {
  return (
    <div className="pt-10 lg:pt-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58908.02269419206!2d69.30937873609317!3d41.3378315295116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4431777da7b%3A0x289db26806f061e!2z0JzQuNGA0LfQvi3Qo9C70YPQs9Cx0LXQutGB0LrQuNC5INGA0LDQudC-0L0sINCi0LDRiNC60LXQvdGCLCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e1!3m2!1sru!2s!4v1743195478903!5m2!1sru!2s"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-[300px] h-[550px] lg:w-[800px] lg:h-[580px]"
      ></iframe>
    </div>
  );
};

export default Maps;