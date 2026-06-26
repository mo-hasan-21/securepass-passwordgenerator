function PasswordSettings({ 
  length, 
  setLength, 
  numberAllowed, 
  setNumberAllowed, 
  charAllowed, 
  setCharAllowed 
}) {
  return (
    <div className="mt-6 space-y-6">
      <div>
        <div className="flex justify-between items-center mb-3">
          <label className="text-sm font-medium text-gray-700">
            Password Length
          </label>
          <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-md">
            {length}
          </span>
        </div>
        
        {/* Updated Slider */}
        <input 
          type="range"
          min={6}
          max={25} // Changed from 100 to 25
          value={length}
          className="easy-slider" // Applied custom CSS class
          onChange={(e) => { setLength(Number(e.target.value)) }}
        />
        
        {/* Min/Max labels for better context */}
        <div className="flex justify-between text-xs text-gray-400 mt-1 px-1">
          <span>6</span>
          <span>25</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 pt-2">
        <Checkbox 
          id="numberInput"
          checked={numberAllowed}
          onChange={() => { setNumberAllowed((prev) => !prev) }}
          label="Include Numbers"
        />

        <Checkbox 
          id="charInput"
          checked={charAllowed}
          onChange={() => { setCharAllowed((prev) => !prev) }}
          label="Include Symbols"
        />
      </div>
    </div>
  );
}

function Checkbox({ id, checked, onChange, label }) {
  return (
    <label 
      htmlFor={id}
      className="flex items-center gap-2.5 cursor-pointer group"
    >
      <input
        type="checkbox"
        checked={checked}
        id={id}
        onChange={onChange}
        className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 focus:ring-1 accent-orange-500"
      />
      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
        {label}
      </span>
    </label>
  );
}

export default PasswordSettings;