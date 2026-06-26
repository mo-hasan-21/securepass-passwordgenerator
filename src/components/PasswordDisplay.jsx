function PasswordDisplay({ password, passwordRef, onCopy, copied }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:border sm:border-gray-200 sm:rounded-md sm:overflow-hidden">
      <input 
        type="text"
        value={password}
        className="flex-1 outline-none py-3 px-4 bg-gray-50 text-gray-900 font-mono text-sm rounded-md border border-gray-200 sm:border-0 sm:rounded-none sm:bg-transparent"
        placeholder="password" 
        readOnly
        ref={passwordRef}
      />
      <button 
        onClick={onCopy}
        className={`px-6 py-3 text-sm font-medium transition-colors duration-200 shrink-0 rounded-md whitespace-nowrap sm:rounded-none ${
          copied 
            ? 'bg-gray-800 text-white' 
            : 'bg-orange-500 text-white hover:bg-orange-600'
        }`}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}

export default PasswordDisplay;