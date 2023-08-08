import React, { useState, useEffect } from 'react';

const phrases = [
  // Processed sugar
  "Processed sugar can lead to weight gain.",
  "Sugar consumption can increase the risk of heart disease.",
  "High sugar intake can cause acne.",
  "Too much sugar can lead to type 2 diabetes.",
  "Processed sugars contribute to fatty liver disease.",

  // Gluten
  "Some individuals are gluten-intolerant, leading to harmful effects on their body.",
  "Gluten can cause digestive issues for some.",
  "A gluten-free diet might help reduce symptoms of irritable bowel syndrome.",
  "Gluten might be linked to autoimmune disorders in certain individuals.",

  // Importance of nutrition
  "Good nutrition is crucial for maintaining health and well-being.",
  "Balanced nutrition boosts the immune system.",
  "A nutritious diet can enhance mental health.",
  "Proper nutrition is essential for growth and development in children.",

  // Surprising facts about nutrition
  "Spinach contains almost as much protein as meat.",
  "Raw and cooked vegetables can offer different nutrients.",
  "Chocolate was once used as currency.",
  "Bananas are berries, but strawberries aren't!"
];

export default function LoadingIcon() {
  const [randomPhrase, setRandomPhrase] = useState(phrases[Math.floor(Math.random() * phrases.length)]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      setRandomPhrase(newPhrase);
    }, 3000);  // change the phrase every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="mb-8">We are using AI to build your meal ideas...</div>
      <div className="p-6 rounded-xl shadow-2xl mx-4 text-2xl">
        <div className="text-center text-black font-bold">{randomPhrase}</div>
      </div>
    </div>
  );
}
