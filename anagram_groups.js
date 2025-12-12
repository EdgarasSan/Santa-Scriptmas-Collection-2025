/**
 * Groups words that are anagrams of each other
 * @param {string[]} words - Array of words to group
 * @returns {string[][]} - Array of anagram groups
 */
function groupAnagrams(words) {
  // Use a Map to store anagram groups
  // Key: sorted letters, Value: array of words with those letters
  const anagramMap = new Map();
  
  for (const word of words) {
    // Sort the letters to create a unique key for each anagram group
    const sortedKey = word.split('').sort().join('');
    
    // Add word to the appropriate group
    if (!anagramMap.has(sortedKey)) {
      anagramMap.set(sortedKey, []);
    }
    anagramMap.get(sortedKey).push(word);
  }
  
  // Convert Map values to array
  return Array.from(anagramMap.values());
}

/**
 * Groups anagrams with bonus features:
 * - Sorts each group alphabetically
 * - Sorts groups by size (largest first)
 */
function groupAnagramsWithBonus(words) {
  const anagramMap = new Map();
  
  for (const word of words) {
    const sortedKey = word.split('').sort().join('');
    
    if (!anagramMap.has(sortedKey)) {
      anagramMap.set(sortedKey, []);
    }
    anagramMap.get(sortedKey).push(word);
  }
  
  // Convert to array and apply bonus features
  const groups = Array.from(anagramMap.values());
  
  // Sort each group alphabetically
  groups.forEach(group => group.sort());
  
  // Sort groups by size (largest first)
  groups.sort((a, b) => b.length - a.length);
  
  return groups;
}

// Exports for testing and external usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { groupAnagrams, groupAnagramsWithBonus };
}

// Demo/test cases – only run when executed directly, not when imported
if (typeof require !== 'undefined' && require.main === module) {
  console.log("Basic Test:");
  const words1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
  console.log(groupAnagrams(words1));
  // Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

  console.log("\nWith Bonus Features:");
  console.log(groupAnagramsWithBonus(words1));
  // Output: [["ate", "eat", "tea"], ["nat", "tan"], ["bat"]]

  console.log("\nChristmas Words Test:");
  const christmasWords = [
    "santa", "satan", "star", "rats", "arts", 
    "tars", "snow", "owns", "tree", "deer", "reed"
  ];
  console.log(groupAnagramsWithBonus(christmasWords));

  console.log("\nEmpty and Single Word Tests:");
  console.log(groupAnagrams([])); // []
  console.log(groupAnagrams(["word"])); // [["word"]]

  console.log("\nPerformance Test (1000 words):");
  const largeTest = Array(1000).fill("test").map((w, i) => 
    w.split('').sort(() => Math.random() - 0.5).join('') + i % 10
  );
  console.time("groupAnagrams");
  groupAnagrams(largeTest);
  console.timeEnd("groupAnagrams");
}