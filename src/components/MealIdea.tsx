import React from 'react';

function MealIdea({ recipe }) {
  // Extracting meal name and the recipe details from the string
  const [mealName, ...recipeDetails] = recipe.split(':');

  return (
    <div className="p-4 rounded shadow-lg w-full max-w-md mx-auto"
      style={{
        background: 'linear-gradient(45deg, purple, black, blue)',
        WebkitBackgroundClip: 'text',
        color: 'transparent'
      }}
    >
      <h2 className="text-2xl font-semibold mb-4">{mealName}</h2>
      <div className="text-gray-700">
        {recipeDetails.join(':').trim().split('.').map((step, idx) => (
          <p key={idx} className="mb-2">
            {step.trim()}
            {idx !== recipeDetails.length - 1 && '.'}
          </p>
        ))}
      </div>
    </div>
  );
}

export default MealIdea;
