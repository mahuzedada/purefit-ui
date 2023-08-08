import MealIdea from "./MealIdea";

type MealData = {
    breakfast_ideas: string[];
    lunch_ideas: string[];
    dinner_ideas: string[];
    snack_ideas: string[];
};

interface MealIdeasProps { 
    data: MealData;
}

const MealIdeas: React.FC<MealIdeasProps> = ({ data }) => {
  return (
    <div className="bg-gray-100 min-h-screen p-5">
      {Object.keys(data).map((category) => (
        <div key={category} className="mb-6">
          <h2
            className="text-2xl font-bold text-blue-700 mb-4 capitalize"
            style={{
              background: 'linear-gradient(45deg, red, yellow, blue)',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}>
            {category.replace('_ideas', ' ideas')}
          </h2>
          <ul className="">
            {data[category as keyof MealData].map((idea, index) => (
              <li
                key={index}
                className="bg-white shadow-lg rounded-lg mb-8"
              >
                <MealIdea recipe={idea} />

              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MealIdeas;
