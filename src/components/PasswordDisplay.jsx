function PasswordDisplay({ password, passwordRef, onCopy, copied }) {
  return (
    <div className="flex border border-gray-200 rounded-md overflow-hidden">
      <input 
        type="text"
        value={password}
        className="flex-1 outline-none py-3 px-4 bg-gray-50 text-gray-900 font-mono text-sm"
        placeholder="password" 
        readOnly
        ref={passwordRef}
      />
      <button 
        onClick={onCopy}
        className={`px-5 py-3 text-sm font-medium transition-colors duration-200 shrink-0 ${
          copied 
            ? 'bg-gray-800 text-white' 
            : 'bg-orange-500 text-white hover:bg-orange-600'
        }`}
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
}

export default PasswordDisplay;