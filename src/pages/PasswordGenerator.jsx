import { useState, useCallback, useEffect, useRef } from 'react'
import PasswordDisplay from '../components/PasswordDisplay'
import PasswordSettings from '../components/PasswordSettings'

function PasswordGenerator() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(true)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "._-!@#$%&*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass = pass + str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="animate-fade-in max-w-xl mx-auto">
      <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Password Generator
        </h1>

        <PasswordDisplay 
          password={password} 
          passwordRef={passwordRef} 
          onCopy={copyPasswordToClipboard}
          copied={copied}
        />

        <PasswordSettings 
          length={length}
          setLength={setLength}
          numberAllowed={numberAllowed}
          setNumberAllowed={setNumberAllowed}
          charAllowed={charAllowed}
          setCharAllowed={setCharAllowed}
        />

        <button
          onClick={passwordGenerator}
          className="w-full mt-8 px-6 py-2.5 bg-orange-500 text-white text-sm font-medium rounded-md hover:bg-orange-600 transition-colors"
        >
          Regenerate Password
        </button>
      </div>
    </div>
  )
}

export default PasswordGenerator