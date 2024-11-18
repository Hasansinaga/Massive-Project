import React from 'react';
import { Icon } from '@iconify/react';

const CardImageUpload = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      {/* Upload Cover Image */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center space-y-2">
        <Icon icon="mdi:upload" className="w-12 h-12" style={{ color: '#7AB434' }} />
        <button className="font-semibold" style={{ color: '#7AB434' }}>Upload Image</button>
        <p className="text-gray-400 text-sm">
          Upload a cover image for your product.<br />
          File Format <span className="font-semibold">jpeg, png</span> Recommended Size <span className="font-semibold">600×600 (1:1)</span>
        </p>
      </div>

      {/* Additional Images */}
      <div>
        <p className="text-gray-700 font-medium mb-2">Additional Images</p>
        <div className="flex space-x-4">
          {/* Additional Image Upload */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 w-24 h-24 flex flex-col items-center justify-center text-center space-y-1">
            <Icon icon="mdi:upload" className="w-8 h-8" style={{ color: '#7AB434' }} />
            <button className="text-sm font-semibold" style={{ color: '#7AB434' }}>Upload Image</button>
          </div>

          {/* Placeholder for Additional Image */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg w-24 h-24 flex items-center justify-center">
            <p className="text-gray-400 text-xs">No Image</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImageUpload;
