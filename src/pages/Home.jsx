import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
          Generate Secure Passwords
        </h1>
        
        <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto animate-fade-in stagger-1">
          Create strong, unique passwords to protect your accounts with a simple, fast, and secure generator.
        </p>

        <div className="flex justify-center gap-4 animate-fade-in stagger-2">
          <Link
            to="/generator"
            className="px-6 py-2.5 bg-orange-500 text-white text-sm font-medium rounded-md hover:bg-orange-600 transition-colors"
          >
            Get Started
          </Link>
          
          <Link
            to="/about"
            className="px-6 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Feature Cards - No emojis, just clean typography */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <FeatureCard 
          title="Secure"
          description="Cryptographically strong random generation for maximum safety."
          delay="stagger-1"
        />
        <FeatureCard 
          title="Fast"
          description="Generate complex passwords instantly with a single click."
          delay="stagger-2"
        />
        <FeatureCard 
          title="Customizable"
          description="Adjust length, include numbers, and add special characters."
          delay="stagger-3"
        />
      </div>
    </div>
  )
}

function FeatureCard({ title, description, delay }) {
  return (
    <div className={`bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover-lift animate-fade-in ${delay}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  )
}

export default Home