import React, { useState } from 'react';
import { Clock, RotateCw, Sparkles } from 'lucide-react';

export default function SantaClockMystery() {
  const [hours, setHours] = useState(3);
  const [minutes, setMinutes] = useState(30);
  const [showResult, setShowResult] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const calculateNewTime = () => {
    // One full rotation of minute hand = 60 minutes = 1 hour
    let newMinutes = minutes;
    let newHours = (hours + 1) % 24;
    
    return { newHours, newMinutes };
  };

  const handleSpin = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setShowResult(true);
      setIsSpinning(false);
    }, 1000);
  };

  const handleReset = () => {
    setShowResult(false);
  };

  const result = calculateNewTime();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-green-900 to-red-800 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-yellow-500" />
              <h1 className="text-4xl font-bold text-red-600">Santa's Spinning Clock</h1>
              <Sparkles className="w-8 h-8 text-yellow-500" />
            </div>
            <p className="text-gray-600 text-lg">
              When the minute hand spins 360°, time advances by 1 full hour!
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 mb-6">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Current Time
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-center">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hours (h)
                </label>
                <input
                  type="number"
                  min="0"
                  max="23"
                  value={hours}
                  onChange={(e) => {
                    setHours(Math.max(0, Math.min(23, parseInt(e.target.value) || 0)));
                    setShowResult(false);
                  }}
                  className="w-24 px-4 py-3 text-3xl font-bold text-center border-4 border-red-300 rounded-xl focus:border-red-500 focus:outline-none"
                />
              </div>
              
              <span className="text-4xl font-bold text-gray-600 mt-8">:</span>
              
              <div className="text-center">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minutes (m)
                </label>
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={minutes}
                  onChange={(e) => {
                    setMinutes(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)));
                    setShowResult(false);
                  }}
                  className="w-24 px-4 py-3 text-3xl font-bold text-center border-4 border-green-300 rounded-xl focus:border-green-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={showResult ? handleReset : handleSpin}
                disabled={isSpinning}
                className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                  showResult
                    ? 'bg-gray-500 hover:bg-gray-600 text-white'
                    : 'bg-gradient-to-r from-red-500 to-green-600 hover:from-red-600 hover:to-green-700 text-white shadow-lg'
                } ${isSpinning ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSpinning ? (
                  <>
                    <RotateCw className={`w-6 h-6 animate-spin`} />
                    Spinning...
                  </>
                ) : showResult ? (
                  <>
                    <Clock className="w-6 h-6" />
                    Try Another Time
                  </>
                ) : (
                  <>
                    <RotateCw className="w-6 h-6" />
                    Spin the Minute Hand!
                  </>
                )}
              </button>
            </div>
          </div>

          {showResult && (
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border-4 border-yellow-400 animate-pulse">
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
                ✨ New Time After Spinning! ✨
              </h2>
              <div className="text-center">
                <div className="text-6xl font-bold text-green-600 mb-4">
                  {String(result.newHours).padStart(2, '0')}:{String(result.newMinutes).padStart(2, '0')}
                </div>
                <div className="bg-white rounded-xl p-4 text-left">
                  <p className="text-gray-700 font-medium mb-2">
                    <span className="font-bold text-red-600">The Magic:</span>
                  </p>
                  <p className="text-gray-600">
                    • Starting time: <span className="font-bold">{String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}</span>
                  </p>
                  <p className="text-gray-600">
                    • Minute hand spins 360° = <span className="font-bold text-green-600">60 minutes pass</span>
                  </p>
                  <p className="text-gray-600">
                    • 60 minutes = <span className="font-bold text-blue-600">1 hour</span>
                  </p>
                  <p className="text-gray-600">
                    • New time: <span className="font-bold text-green-600">{String(result.newHours).padStart(2, '0')}:{String(result.newMinutes).padStart(2, '0')}</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white/90 rounded-2xl p-6 text-center">
          <p className="text-gray-700 text-lg">
            🎅 <span className="font-bold">Santa's Tip:</span> One full rotation = 60 minutes = 1 hour added to the clock!
          </p>
        </div>
      </div>
    </div>
  );
}