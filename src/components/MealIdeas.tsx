import EmailDialog from "./EmailDialog";

type MealIdea = {
  title: string;
  description: string;
  nutrition_information: {
    calories_per_serving: string;
    protein_content: string;
    fat_content: string;
    sugar_content: string;
  };
};

type MealIdeasProps = {
  data: {
    breakfast_idea: MealIdea;
    lunch_idea: MealIdea;
    dinner_idea: MealIdea;
    snack_idea: MealIdea;
    total_calories_deficit_needed_per_day: number;
    total_calories_per_day_from_all_suggested_meals: number;
    total_calories_surplus_needed_per_day: number;
    prediction_of_daily_calories_burn_based_on_user_life_style: number;
  };
};

const MealIdeas: React.FC<MealIdeasProps> = ({ data }: MealIdeasProps) => {
  const mealTypeDisplay: any = {
    breakfast_idea: "Breakfast",
    lunch_idea: "Lunch",
    dinner_idea: "Dinner",
    snack_idea: "Snack",
  };

  const {
    total_calories_deficit_needed_per_day,
    total_calories_per_day_from_all_suggested_meals,
    total_calories_surplus_needed_per_day,
    prediction_of_daily_calories_burn_based_on_user_life_style,
    ...meals
  } = data;

  return (
    <div className="pt-8 space-y-8">
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12"
            src="https://cdn-icons-png.flaticon.com/512/4080/4080032.png"
            alt="ChitChat Logo"
          />
        </div>
        <div>
          <div className="text-xl font-medium text-black">Calories Summary</div>
          <p className="text-gray-500">Calories & Lifestyle Data</p>
          <ul className="mt-2 text-gray-700">
            <li>
              Predicted Daily Calorie Burn:{" "}
              <span className="font-semibold">
                {prediction_of_daily_calories_burn_based_on_user_life_style}
              </span>
            </li>
            <li>
              Daily Calories Deficit Needed:{" "}
              <span className="font-semibold">
                {total_calories_deficit_needed_per_day}
              </span>
            </li>
            <li>
              Daily Calories Surplus Needed:{" "}
              <span className="font-semibold">
                {total_calories_surplus_needed_per_day}
              </span>
            </li>
            <li>
              Daily Calories from All Suggested Meals:{" "}
              <span className="font-semibold">
                {total_calories_per_day_from_all_suggested_meals}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {Object.keys(meals).map(
        (
          mealType: keyof {
            breakfast_idea: MealIdea;
            lunch_idea: MealIdea;
            dinner_idea: MealIdea;
            snack_idea: MealIdea;
          },
        ) => (
          <div
            key={mealType}
            className="bg-gray-200 max-w-md mx-auto rounded-xl shadow-md p-4 border border-gray-50"
          >
            <div
              style={{
                background: "linear-gradient(25deg, red, purple, blue)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              <h2 className="text-2xl font-bold mb-2">
                {mealTypeDisplay[mealType]}
              </h2>
              <h3 className="text-xl font-semibold mb-1">
                {data[mealType].title}
              </h3>
              <p className="mb-4">{data[mealType].description}</p>
              <div className="mt-4">
                <h4 className="text-lg font-medium mb-2 underline">
                  Nutrition
                </h4>
                <p>
                  <strong>Calories:</strong>{" "}
                  {data[mealType].nutrition_information.calories_per_serving}
                </p>
                <p>
                  <strong>Protein:</strong>{" "}
                  {data[mealType].nutrition_information.protein_content}
                </p>
                <p>
                  <strong>Fat:</strong>{" "}
                  {data[mealType].nutrition_information.fat_content}
                </p>
                <p>
                  <strong>Sugar:</strong>{" "}
                  {data[mealType].nutrition_information.sugar_content}
                </p>
              </div>
              <EmailDialog />
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default MealIdeas;
