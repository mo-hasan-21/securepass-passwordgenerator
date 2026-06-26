function About() {
  return (
    <div className="animate-fade-in max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          About SecurePass
        </h1>

        <div className="space-y-8 text-gray-600 leading-relaxed">
          <section className="animate-fade-in stagger-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h2>
            <p className="text-sm">
              SecurePass is dedicated to helping you create strong, unique passwords that keep your 
              online accounts safe. In an era where data breaches are common, having robust password 
              security is essential.
            </p>
          </section>

          <section className="animate-fade-in stagger-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">How It Works</h2>
            <p className="text-sm">
              Our password generator uses cryptographically secure random number generation to create 
              unpredictable passwords. You can customize the length and character types to meet 
              specific security requirements.
            </p>
          </section>

          <section className="animate-fade-in stagger-3">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Best Practices</h2>
            <ul className="list-disc list-inside space-y-2 text-sm ml-2">
              <li>Use at least 12 characters for strong security</li>
              <li>Include a mix of uppercase, lowercase, numbers, and symbols</li>
              <li>Never reuse passwords across different accounts</li>
              <li>Consider using a password manager to store your passwords securely</li>
            </ul>
          </section>

          <section className="animate-fade-in">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Privacy First</h2>
            <p className="text-sm">
              Your privacy matters. SecurePass generates passwords entirely in your browser. 
              We never store, transmit, or log your passwords. What happens in your browser stays 
              in your browser.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About