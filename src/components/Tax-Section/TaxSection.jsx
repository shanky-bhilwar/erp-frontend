import React, { useState } from 'react';
import CountryTaxSelector from '../../components/Tax-Section/CountryTaxSelector';
import TaxSettings from '../../components/Tax-Section/TaxSettings';

const TaxSection = () => {
  const [selectedCountry, setSelectedCountry] = useState('uae');

  return (
    <>
      <div className="grid grid-cols-8 gap-14">
        <div className="col-span-3"> 
          <CountryTaxSelector 
            selectedCountry={selectedCountry} 
            setSelectedCountry={setSelectedCountry} 
          />
        </div>
        <div className="col-span-5"> 
          <TaxSettings selectedCountry={selectedCountry} />
        </div>
      </div>
    </>
  );
};

export default TaxSection;