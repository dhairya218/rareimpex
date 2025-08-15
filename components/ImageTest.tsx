'use client';

export default function ImageTest() {
  const imagePath = "/images/backgrounds/slide-2-logistics.jpg";
  
  return (
    <div className="p-4 bg-white">
      <h2 className="text-xl font-bold mb-4">Image Test Component</h2>
      
      {/* Test 1: Direct img tag */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">1. Direct Image Tag:</h3>
        <img 
          src={imagePath} 
          alt="Test background" 
          className="w-64 h-32 object-cover border"
          onLoad={() => console.log('Image loaded successfully!')}
          onError={(e) => console.error('Image failed to load:', e)}
        />
      </div>
      
      {/* Test 2: Background image div */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">2. Background Image Div:</h3>
        <div 
          className="w-64 h-32 border"
          style={{
            backgroundImage: `url(${imagePath})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="w-full h-full bg-black/50 flex items-center justify-center text-white">
            Background Image Test
          </div>
        </div>
      </div>
      
      {/* Test 3: Image path info */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">3. Image Path Information:</h3>
        <p><strong>Path:</strong> {imagePath}</p>
        <p><strong>Full URL:</strong> {typeof window !== 'undefined' ? window.location.origin + imagePath : 'Server side'}</p>
      </div>
      
      {/* Test 4: Network tab check */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">4. Debug Instructions:</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Open browser Developer Tools (F12)</li>
          <li>Go to Console tab to see image loading logs</li>
          <li>Go to Network tab to see if image request is made</li>
          <li>Check if image file exists in public folder</li>
        </ol>
      </div>
    </div>
  );
}
