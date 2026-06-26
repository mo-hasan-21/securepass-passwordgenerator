import { Link } from 'react-router-dom'
import jez from '../assets/jez.jpg'
import james from '../assets/james.jpg'
import hecker from '../assets/hecker.jpg'

function Home() {
  const reviews = [
    {
      name: "Jezza",
      stars: 5,
      text: "an best password generator",
      image: jez
    },
    {
      name: "James",
      stars: 5,
      text: "Last night, hacker had a stroke and died guessing my password!",
      image: james
    },
    {
      name: "Heckar [KIA]",
      stars: 0,
      text: "*had a stroke and died guessing the password.Not recommended",
      image: hecker
    }
  ]

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

      {/* Feature Cards */}
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

      {/* User Reviews Section */}
      <div className="mt-20 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
          What Users Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard 
              key={index}
              name={review.name}
              stars={review.stars}
              text={review.text}
              image={review.image}
              delay={`stagger-${(index % 3) + 1}`}
            />
          ))}
        </div>
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

function ReviewCard({ name, stars, text, image, delay }) {
  return (
    <div className={`bg-white p-6 rounded-lg border border-gray-100 shadow-sm animate-fade-in ${delay}`}>
      <div className="flex items-center gap-3 mb-4">
        <img 
          src={image} 
          alt={`${name}'s profile`}
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
        />
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">{name}</h4>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < stars ? 'text-orange-500' : 'text-gray-200'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 italic leading-relaxed">"{text}"</p>
    </div>
  )
}

export default Home