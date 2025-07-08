import React, { useState } from 'react';
import { Download, UploadCloud as CloudArrowUp, Receipt, Building, CupSoda, ShieldCheck, Flag } from 'lucide-react';
import countriesData from './countries.json';

const TaxSettings = ({ selectedCountry }) => {
  const [vatFilingFrequency, setVatFilingFrequency] = useState('Quarterly');
  const [vatScheme, setVatScheme] = useState('Standard VAT');
  const [transferPricing, setTransferPricing] = useState(true);

  const currentCountry = countriesData.countries.find(c => c.id === selectedCountry) || countriesData.countries[0];

  if (!currentCountry) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      {/* Main Tax Configuration Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="p-4 border-b border-gray-100 bg-gray-50 rounded-t-xl flex justify-between items-center">
          <h4 className="text-xl font-semibold text-gray-800">{currentCountry.name} Tax Settings</h4>
          <div className="flex space-x-2">
            <button className="bg-white border border-blue-500 text-blue-600 px-4 py-2 rounded-lg flex items-center hover:bg-blue-50 transition-colors">
              <Download className="mr-2 h-4 w-4" />
              Export Settings
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors">
              <CloudArrowUp className="mr-2 h-4 w-4" />
              Sync with Authority
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {/* Tax Rates Overview */}
          <h5 className="text-lg font-semibold text-gray-800 mb-4">Tax Rates & Rules</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-xl p-5 text-center hover:shadow-md transition-shadow">
              <Receipt className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-600 mb-2">{currentCountry.taxData.standardVat}</div>
              <div className="font-medium text-gray-800 mb-1">Standard VAT Rate</div>
              <small className="text-gray-600">Applied to most goods and services</small>
            </div>
            <div className="bg-green-50 rounded-xl p-5 text-center hover:shadow-md transition-shadow">
              <Building className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-600 mb-2">{currentCountry.taxData.corporateTax}</div>
              <div className="font-medium text-gray-800 mb-1">Corporate Tax</div>
              <small className="text-gray-600">For taxable income</small>
            </div>
            <div className="bg-red-50 rounded-xl p-5 text-center hover:shadow-md transition-shadow">
              <CupSoda className="h-12 w-12 text-red-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-red-600 mb-2">{currentCountry.taxData.exciseTax}</div>
              <div className="font-medium text-gray-800 mb-1">Excise Tax</div>
              <small className="text-gray-600">Tobacco, energy drinks, etc.</small>
            </div>
          </div>

          {/* VAT Configuration */}
          <div className="bg-white rounded-xl border border-gray-100 p-5 mb-6">
            <h5 className="text-lg font-semibold text-gray-800 mb-4">VAT Configuration</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">VAT Registration Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={currentCountry.taxData.vatRegistrationNumber}
                    readOnly
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">VAT Filing Frequency</label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={vatFilingFrequency}
                    onChange={(e) => setVatFilingFrequency(e.target.value)}
                  >
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Annually</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">VAT Scheme</label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={vatScheme}
                    onChange={(e) => setVatScheme(e.target.value)}
                  >
                    <option>Standard VAT</option>
                    <option>Cash Accounting</option>
                    <option>Flat Rate</option>
                    <option>Margin Scheme</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">VAT Return Due Day</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>1st of following month</option>
                    <option>15th of following month</option>
                    <option>28th of following month</option>
                  </select>
                </div>
              </div>
            </div>

            {/* VAT Rates Table */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">VAT Rates by Category</label>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Category</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">VAT Rate</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentCountry.taxData.vatRates.map((rate, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3">{rate.category}</td>
                        <td className="border border-gray-200 px-4 py-3">{rate.rate}</td>
                        <td className="border border-gray-200 px-4 py-3">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">{rate.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Additional Taxes */}
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <h5 className="text-lg font-semibold text-gray-800 mb-4">Additional Taxes & Duties</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Excise Tax Rates</label>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Product Category</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Tax Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentCountry.taxData.exciseTaxRates.map((tax, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3">{tax.category}</td>
                          <td className="border border-gray-200 px-4 py-3">{tax.rate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Withholding Tax</label>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Payment Type</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Tax Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentCountry.taxData.withholdingTaxRates.map((tax, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3">{tax.type}</td>
                          <td className="border border-gray-200 px-4 py-3">{tax.rate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Customs Duties</label>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="bg-blue-500 rounded-full p-1 mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-blue-800">
                    {currentCountry.taxData.customsDuties}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Tax Profiles */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100 bg-gray-50 rounded-t-xl">
          <span className="font-semibold text-gray-800">Regional Tax Profiles</span>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Country</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">VAT/GST</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Corporate Tax</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Withholding Tax</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Filing Frequency</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {countriesData.countries.map(country => (
                  <tr key={country.id} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 flex items-center">
                      <Flag className="h-4 w-4 text-red-500 mr-2" />
                      {country.name}
                    </td>
                    <td className="border border-gray-200 px-4 py-3">{country.taxData.standardVat}</td>
                    <td className="border border-gray-200 px-4 py-3">{country.taxData.corporateTax}</td>
                    <td className="border border-gray-200 px-4 py-3">
                      {country.taxData.withholdingTaxRates[0]?.rate || "0%"}
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      {country.taxData.filingRequirements.vatFrequency}
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        country.id === selectedCountry 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {country.id === selectedCountry ? 'Configured' : 'Pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxSettings;