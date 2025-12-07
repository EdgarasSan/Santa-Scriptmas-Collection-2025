import React, { useState } from 'react';
import { Gift, Sparkles } from 'lucide-react';

export default function SantaGiftBag() {
  const [currentInput, setCurrentInput] = useState('');
  const [toys, setToys] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [magicalCount, setMagicalCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const addToy = () => {
    const price = parseFloat(currentInput);
    
    if (isNaN(price)) {
      alert('Please enter a valid number!');
      return;
    }

    if (price === 0) {
      // Finish the list
      setIsFinished(true);
      setCurrentInput('');
      return;
    }

    // Add toy to the list
    const newToys = [...toys, price];
    setToys(newToys);

    // Calculate magical toys (price > 10)
    if (price > 10) {
      setTotalPrice(totalPrice + price);
      setMagicalCount(magicalCount + 1);
    }

    setCurrentInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addToy();
    }
  };

  const reset = () => {
    setCurrentInput('');
    setToys([]);
    setTotalPrice(0);
    setMagicalCount(0);
    setIsFinished(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-green-700 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Gift className="w-10 h-10 text-red-600" />
              <h1 className="text-4xl font-bold text-red-600">Santa's Gift Bag</h1>
              <Gift className="w-10 h-10 text-green-600" />
            </div>
            <p className="text-gray-600">Enter toy prices (magical toys cost more than 10 EUR)</p>
            <p className="text-sm text-gray-500 mt-1">Enter 0 to finish the list</p>
          </div>

          {/* Input Section */}
          {!isFinished && (
            <div className="mb-6">
              <div className="flex gap-3">
                <input
                  type="number"
                  step="0.1"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter toy price (EUR)"
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500 text-lg"
                  autoFocus
                />
                <button
                  onClick={addToy}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Add Toy
                </button>
              </div>
            </div>
          )}

          {/* Toys List */}
          {toys.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">Toys Added:</h3>
              <div className="flex flex-wrap gap-2">
                {toys.map((price, index) => (
                  <div
                    key={index}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      price > 10
                        ? 'bg-yellow-100 text-yellow-800 border-2 border-yellow-400'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {price > 10 && <Sparkles className="w-4 h-4 inline mr-1" />}
                    {price.toFixed(1)} EUR
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results Section */}
          {isFinished && (
            <div className="bg-gradient-to-r from-yellow-50 to-green-50 border-2 border-green-300 rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-center mb-4 text-green-800 flex items-center justify-center gap-2">
                <Sparkles className="w-6 h-6" />
                Magical Toys Summary
                <Sparkles className="w-6 h-6" />
              </h2>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 shadow">
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">Total price of magical toys:</span>
                    <span className="text-2xl font-bold text-green-600 ml-2">
                      {totalPrice.toFixed(1)} EUR
                    </span>
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">Number of magical toys:</span>
                    <span className="text-2xl font-bold text-red-600 ml-2">
                      {magicalCount}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Reset Button */}
          {(isFinished || toys.length > 0) && (
            <button
              onClick={reset}
              className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Start New List
            </button>
          )}

          {/* Example */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800 font-semibold mb-1">Example:</p>
            <p className="text-sm text-blue-700">
              Input: 5.6, 6.7, 12.3, 15.7, 0
              <br />
              Output: Total price: 28.0 EUR | Number: 2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}