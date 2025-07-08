import React, { useState, useEffect } from 'react';
import { Search, Globe } from 'lucide-react';
import countriesData from './countries.json';

const CountryTaxSelector = ({ selectedCountry, setSelectedCountry }) => {
  const [activeRegion, setActiveRegion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    // In a real app, you might fetch this from an API
    setCountries(countriesData.countries);
    setRegions(countriesData.regions);
  }, []);

  const filteredCountries = countries.filter(country => {
    const matchesRegion = activeRegion === 'all' || country.region === activeRegion;
    const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const currentCountry = countries.find(c => c.id === selectedCountry) || countries[0];

  return (
    <div className="mx-auto space-y-6">
      {/* Country Selection Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50 rounded-t-xl">
          <span className="font-semibold text-gray-800">Select Country</span>
          <div className="flex items-center bg-white rounded-lg px-3 py-2 w-48 border">
            <input
              type="text"
              placeholder="Search country..."
              className="bg-transparent outline-none flex-1 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="h-4 w-4 text-gray-400 ml-2" />
          </div>
        </div>
        <div className="p-4">
          {/* Region Tabs */}
          <div className="flex space-x-2 mb-6 flex-wrap">
            {regions.map(region => (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeRegion === region.id
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
          
          {/* Country Grid */}
          <div className="grid grid-cols-1 gap-4">
            {filteredCountries.map(country => (
              <div
                key={country.id}
                onClick={() => setSelectedCountry(country.id)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:transform hover:-translate-y-1 ${
                  selectedCountry === country.id
                    ? 'border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-200'
                    : 'border-transparent bg-gray-50 hover:border-blue-200 hover:bg-blue-25 hover:shadow-md'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl mr-4 ${country.bgColor}`}>
                    {country.flag}
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">{country.name}</h5>
                    <small className="text-gray-500">{country.shortRegion}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tax Summary Card */}
      {currentCountry && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="p-4 border-b border-gray-100 bg-gray-50 rounded-t-xl">
            <span className="font-semibold text-gray-800">Tax Summary</span>
          </div>
          <div className="p-4 relative">
            <Globe className="absolute top-5 right-5 h-32 w-32 text-gray-100 z-0" />
            
            {/* Tax Summary Card */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-xl p-5 mb-4 relative z-10 shadow-lg">
              <div className="flex justify-between">
                <div>
                  <div className="text-blue-100 text-sm">Standard VAT Rate</div>
                  <div className="text-3xl font-bold">{currentCountry.taxData.standardVat}</div>
                </div>
                <div>
                  <div className="text-blue-100 text-sm">Corporate Tax</div>
                  <div className="text-3xl font-bold">{currentCountry.taxData.corporateTax}</div>
                </div>
              </div>
            </div>
            
            <h6 className="font-semibold text-gray-800 mb-3">Key Taxes</h6>
            <div className="mb-4 space-y-2">
              <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">VAT: {currentCountry.taxData.standardVat}</span>
              <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">Corporate: {currentCountry.taxData.corporateTax}</span>
              <span className="inline-block bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">Excise: {currentCountry.taxData.exciseTax}</span>
              <span className="inline-block bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">Withholding: 0%</span>
            </div>
            
            <h6 className="font-semibold text-gray-800 mb-3">Filing Requirements</h6>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">VAT Filing Frequency</span>
                <span className="font-semibold text-gray-800">{currentCountry.taxData.filingRequirements.vatFrequency}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Corporate Tax Filing</span>
                <span className="font-semibold text-gray-800">{currentCountry.taxData.filingRequirements.corporateFrequency}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Last Filing Date</span>
                <span className="font-semibold text-gray-800">{currentCountry.taxData.filingRequirements.lastFilingDate}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryTaxSelector;