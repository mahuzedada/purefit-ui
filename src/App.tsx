import { Route, Routes } from "react-router-dom";
import {
  QuestionContext,
  IQuestion,
  QuestionnaireContextData,
} from "./context.ts";
import StepView from "./routes/StepView.tsx";
import Home from "./routes/Home.tsx";
import Summary from "./routes/Summary.tsx";
import { useLocalStorage } from "./useLocalStorage.ts";
import Navbar from "./assets/Navbar.tsx";
import Container from "./components/Container.tsx";
import Results from "./routes/Results";
import emptyResponse from "./constants/emptyResponse";

import './i18n';
import './App.css';

const questions: IQuestion[] = [
  {
    id: "gender",
    text: "What is your gender?",
    summaryText: "Gender",
    options: [
      { title: "Male" },
      { title: "Female" },
      { title: "Prefer not to say" },
    ],
  },
  {
    id: "age_range",
    text: "What is your age range?",
    summaryText: "Age",
    options: [
      {
        title: "18-24",
        image: "",
      },
      {
        title: "25-34",
        image: "",
      },
      {
        title: "35-44",
        image: "",
      },
      {
        title: "45-54",
        image: "",
      },
      {
        title: "55-64",
        image: "",
      },
      {
        title: "65 or older",
        image: "",
      },
    ],
  },
  {
    id: "height",
    text: "How tall are you?",
    summaryText: "Height",
    inputs: ['ft', 'in'],
  },
  {
    id: "weight",
    text: "How much do you weight?",
    summaryText: "Weight",
    inputs: ['lbs'],
  },
  {
    id: "target_weight",
    text: "How much would you like to weight?",
    summaryText: "Target Weight",
    inputs: ['lbs'],
  },
  {
    id: "timeframe",
    text: "What is your timeframe to reach your weight goal?",
    summaryText: "Timeframe",
    options: [
      {
        title: "2-4 Weeks",
      },
      {
        title: "1-3 Months",
      },
      {
        title: "3-6 Months",
      },
      {
        title: "6-12 Months",
      },
    ],
  },
  {
    id: "lifestyle",
    text: "What is your current lifestyle?",
    summaryText: "Lifestyle",
    options: [
      {
        title: "Sedentary",
        subTitle: "little or no exercise",
      },
      {
        title: "Light",
        subTitle: "exercise/sports 1-3 days/week",
      },
      {
        title: "Moderate",
        subTitle: "exercise/sports 3-5 days/week",
      },
      {
        title: "Very active",
        subTitle: "exercise/sports 6-7 days a week",
      },
      {
        title: "Super active",
        subTitle: "exercise/physical job 2x/day",
      },
    ],
  },
  {
    id: "allergies",
    multiple: true,
    text: "Do you have any food allergies or intolerances?",
    summaryText: "Allergies",
    options: [
      { title: "No" },
      { title: "Dairy" },
      { title: "Gluten" },
      { title: "Peanuts" },
      { title: "Shellfish" },
      { title: "Soy" },
      { title: "Eggs" },
      { title: "Tree nuts" },
      { title: "Fish" },
    ],
  },
  {
    id: "preferred_cuisine",
    multiple: true,
    text: "What is your preferred cuisine?",
    summaryText: "Cuisine",
    options: [
      { title: "American" },
      { title: "Italian" },
      { title: "French" },
      { title: "Nigerian" },
      { title: "Mediterranean" },
      { title: "Asian" },
      { title: "Mexican" },
      { title: "Indian" },
    ],
  },
  {
    id: "preferred_protein",
    multiple: true,
    text: "What are your preferred sources of protein?",
    summaryText: "Protein",
    options: [
      { title: "Red Meat" },
      {
        title: "Poultry",
      },
      { title: "Fish/Seafood" },
      { title: "Eggs" },
      {
        title: "Dairy",
      },
      {
        title: "Legumes",
      },
      { title: "Tofu/Tempeh" },
    ],
  },
  {
    id: "preferred_fat",
    multiple: true,
    text: "What are your preferred sources of fat?",
    summaryText: "Fats",
    options: [
      {
        title: "Animal fats",
      },
      {
        title: "Plant oils",
      },
      { title: "Nuts and seeds" },
      { title: "Fish" },
      { title: "Avocados" },
      { title: "Eggs" },
    ],
  },
  {
    id: "preferred_carbs",
    multiple: true,
    text: "What are your preferred sources of carbohydrates?",
    summaryText: "Carbs",
    options: [
      {
        title: "Whole grains",
      },
      { title: "Fruits" },
      { title: "Vegetables" },
      { title: "Potatoes" },
      {
        title: "Legumes",
      },
      {
        title: "Dairy",
      },
      {
        title: "Sugars",
      },
      {
        title: "Baked snacks",
      },
    ],
  },
  {
    id: "specific_diet",
    text: "Are you following any specific diet?",
    summaryText: "Diet",
    options: [
      { title: "No specific diet" },
      { title: "Keto" },
      { title: "Paleo" },
      { title: "Vegan" },
      { title: "Vegetarian" },
      { title: "Pescatarian" },
      { title: "Gluten-free" },
      { title: "Low-carb" },
    ],
  },
  {
    id: "diet_goal",
    multiple: true,
    text: "What is your main goal with your diet?",
    summaryText: "Your goal",
    options: [
      { title: "Burn fat" },
      { title: "Build muscles" },
      { title: "Lose weight" },
      {
        title: "Improve overall health",
      },
      {
        title: "Improve athletic performance",
      }
    ],
  },
  {
    id: "dietary_restrictions",
    text: "Do you have any other dietary restrictions or specific food preferences?",
    summaryText: "Restrictions",
    options: [
      {
        title: "No additional restrictions or preferences",
      },
      { title: "Halal" },
      { title: "Kosher" },
      { title: "High fiber" },
      { title: "Organic" },
      { title: "Non-GMO" },
    ],
  },
];
const questionMap = new Map<string, IQuestion>(
  questions.map((question) => [question.id, question]),
);

function App(): React.ReactElement {
  const [answers, setAnswers] = useLocalStorage<{
    [key: string]: string | null;
  }>("answers", emptyResponse);
  const [storedMeals, setStoredMeals] = useLocalStorage('pureFitMeals', null);

  const contextValue: QuestionnaireContextData = {
    questions: questionMap,
    answers,
    setAnswers,
    storedMeals,
    setStoredMeals
  };

  return (
    <QuestionContext.Provider value={contextValue}>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {questions.map((question) => (
            <Route
              path={`/:questionId`}
              key={question.id}
              element={<StepView />}
            />
          ))}
          <Route path="/summary" element={<Summary />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Container>
    </QuestionContext.Provider>
  );
}

export default App;
