import React, { useState } from 'react';
import { Target, Award, Sparkles } from 'lucide-react';

const ArcheryScorer = () => {
  const [centerX, setCenterX] = useState(50);
  const [centerY, setCenterY] = useState(50);
  const [radius1, setRadius1] = useState(5);
  const [radius2, setRadius2] = useState(10);
  const [radius3, setRadius3] = useState(15);
  const [radius4, setRadius4] = useState(20);
  const [points1, setPoints1] = useState(100);
  const [points2, setPoints2] = useState(50);
  const [points3, setPoints3] = useState(25);
  const [points4, setPoints4] = useState(10);
  const [arrowX, setArrowX] = useState(55);
  const [arrowY, setArrowY] = useState(52);
  const [score, setScore] = useState(null);

  const calculateScore = () => {
    const distance = Math.sqrt(
      Math.pow(arrowX - centerX, 2) + Math.pow(arrowY - centerY, 2)
    );

    const epsilon = 0.0001;
    
    const rings = [
      { radius: radius1, points: points1 },
      { radius: radius2, points: points2 },
      { radius: radius3, points: points3 },
      { radius: radius4, points: points4 }
    ].sort((a, b) => a.radius - b.radius);

    for (let i = 0; i < rings.length; i++) {
      const ring = rings[i];
      
      if (Math.abs(distance - ring.radius) < epsilon) {
        setScore(ring.points / 2);
        return;
      }
      
      if (distance < ring.radius) {
        setScore(ring.points);
        return;
      }
    }
    
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-green-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Sparkles className="text-yellow-500" size={32} />
            <h1 className="text-4xl font-bold text-red-600">Santa's Magical Archery Challenge</h1>
            <Sparkles className="text-yellow-500" size={32} />
          </div>
          <p className="text-gray-600">Calculate the elf's score based on where the arrow lands!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
              <Target size={24} />
              Target Configuration
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Target Center</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">X Coordinate</label>
                    <input
                      type="number"
                      value={centerX}
                      onChange={(e) => setCenterX(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Y Coordinate</label>
                    <input
                      type="number"
                      value={centerY}
                      onChange={(e) => setCenterY(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Ring Radii & Points</h3>
                <div className="space-y-2">
                  {[
                    { radius: radius1, setRadius: setRadius1, points: points1, setPoints: setPoints1, name: 'Bullseye (Black)', color: 'bg-gray-800' },
                    { radius: radius2, setRadius: setRadius2, points: points2, setPoints: setPoints2, name: 'Ring 2', color: 'bg-red-500' },
                    { radius: radius3, setRadius: setRadius3, points: points3, setPoints: setPoints3, name: 'Ring 3', color: 'bg-blue-500' },
                    { radius: radius4, setRadius: setRadius4, points: points4, setPoints: setPoints4, name: 'Ring 4', color: 'bg-green-500' }
                  ].map((ring, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full ${ring.color}`}></div>
                      <span className="text-sm font-medium w-20">{ring.name}</span>
                      <input
                        type="number"
                        value={ring.radius}
                        onChange={(e) => ring.setRadius(Number(e.target.value))}
                        placeholder="Radius"
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                      <input
                        type="number"
                        value={ring.points}
                        onChange={(e) => ring.setPoints(Number(e.target.value))}
                        placeholder="Points"
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                      <span className="text-sm text-gray-600">pts</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Arrow Position</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">X Coordinate</label>
                    <input
                      type="number"
                      value={arrowX}
                      onChange={(e) => setArrowX(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Y Coordinate</label>
                    <input
                      type="number"
                      value={arrowY}
                      onChange={(e) => setArrowY(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={calculateScore}
                className="w-full bg-gradient-to-r from-red-500 to-green-600 text-white font-bold py-3 rounded-lg hover:from-red-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Calculate Score! 🎯
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                <Award size={24} />
                Score Result
              </h2>
              
              {score !== null ? (
                <div className="text-center">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg p-6 mb-4">
                    <div className="text-6xl font-bold mb-2">{score}</div>
                    <div className="text-xl">Points!</div>
                  </div>
                  
                  {score === 0 && (
                    <p className="text-gray-600">Arrow missed all rings! Better luck next time! 🎯</p>
                  )}
                  {score > 0 && score < points4 && (
                    <p className="text-gray-600">Arrow landed on a ring boundary! Half points awarded! ⭐</p>
                  )}
                  {score === points1 && (
                    <p className="text-green-600 font-bold">🎉 BULLSEYE! Perfect shot! 🎉</p>
                  )}
                </div>
              ) : (
                <div className="text-center text-gray-400 py-8">
                  <Target size={64} className="mx-auto mb-4 opacity-50" />
                  <p>Click "Calculate Score!" to see the result</p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-bold text-gray-700 mb-3">Scoring Rules</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Arrow inside a ring: Full points for that ring</li>
                <li>• Arrow exactly on ring boundary: Half points</li>
                <li>• Arrow outside all rings: 0 points</li>
                <li>• Smaller rings are worth more points!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArcheryScorer;