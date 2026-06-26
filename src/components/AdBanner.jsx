import { useEffect } from 'react'

function AdBanner({ slot, className = "" }) {
  useEffect(() => {
    try {
      // Push the ad to the AdSense queue
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error("AdSense error:", e)
    }
  }, [])

  return (
    // Minimalist wrapper matching your 2D theme
    <div className={`bg-white border border-gray-100 rounded-lg p-4 shadow-sm ${className}`}>
      <span className="text-[10px] text-gray-400 uppercase tracking-wider mb-3 block text-center">
        Advertisement
      </span>
      
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7475108519381819"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  )
}

export default AdBanner