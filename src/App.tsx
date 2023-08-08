import React from "react";
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
    id: "marital_status",
    text: "What is your marital status?",
    summaryText: "Marital",
    options: [
      { title: "Single" },
      {
        title: "Married or Domestic Partnership",
      },
      { title: "Divorced" },
      { title: "Widowed" },
    ],
  },
  {
    id: "number_of_kids",
    text: "Do you have kids? If yes, how many?",
    summaryText: "Kids",
    options: [
      { title: "No" },
      { title: "1" },
      { title: "2" },
      { title: "3" },
      { title: "4 or more" },
    ],
  },
  {
    id: "kids_age_ranges",
    text: "If you have kids, what are their age ranges?",
    summaryText: "Kids Age",
    options: [
      { title: "Under 2 years" },
      { title: "2-5 years" },
      { title: "6-9 years" },
      { title: "10-13 years" },
      { title: "14-17 years" },
      { title: "18 or older" },
    ],
  },
  {
    id: "allergies",
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
      {
        title: "Other (please specify)",
      },
    ],
  },
  {
    id: "preferred_cuisine",
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
      {
        title: "Other (please specify)",
      },
    ],
  },
  {
    id: "preferred_protein",
    text: "What are your preferred sources of protein?",
    summaryText: "Protein",
    options: [
      { title: "Meat (beef, pork)" },
      {
        title: "Poultry (chicken, turkey)",
      },
      { title: "Fish/Seafood" },
      { title: "Eggs" },
      {
        title: "Dairy (cheese, yogurt)",
      },
      {
        title: "Legumes (beans, lentils)",
      },
      { title: "Tofu/Tempeh" },
      {
        title: "Other (please specify)",
      },
    ],
  },
  {
    id: "preferred_fat",
    text: "What are your preferred sources of fat?",
    summaryText: "Fats",
    options: [
      {
        title: "Animal fats (butter, lard)",
      },
      {
        title: "Plant oils (olive, avocado)",
      },
      { title: "Nuts and seeds" },
      { title: "Fish" },
      { title: "Avocados" },
      { title: "Eggs" },
      {
        title: "Other (please specify)",
      },
    ],
  },
  {
    id: "preferred_carbs",
    text: "What are your preferred sources of carbohydrates?",
    summaryText: "Carbs",
    options: [
      {
        title: "Whole grains (rice, wheat, oats)",
      },
      { title: "Fruits" },
      { title: "Vegetables" },
      {
        title: "Legumes (beans, lentils)",
      },
      {
        title: "Dairy (milk, yogurt)",
      },
      {
        title: "Sugars (honey, agave)",
      },
      {
        title: "Baked goods (bread, pastries)",
      },
      {
        title: "Other (please specify)",
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
      {
        title: "Other (please specify)",
      },
    ],
  },
  {
    id: "diet_goal",
    text: "What is your main goal with your diet?",
    summaryText: "Your goal",
    options: [
      { title: "Weight loss" },
      { title: "Weight gain" },
      {
        title: "Maintain current weight",
      },
      {
        title: "Improve overall health",
      },
      {
        title: "Improve athletic performance",
      },
      {
        title: "Manage a medical condition",
      },
      {
        title: "Other (please specify)",
      },
    ],
  },
  {
    id: "meals_per_day",
    text: "How many meals do you prefer to eat per day?",
    summaryText: "Meals per day",
    options: [
      { title: "1" },
      { title: "2" },
      { title: "3" },
      { title: "4" },
      { title: "5 or more" },
      { title: "Varies every day" },
    ],
  },
  {
    id: "time_for_cook",
    summaryText: "Time to cook",
    text: "How much time do you generally have for meal preparation?",
    options: [
      {
        title: "Less than 15 minutes",
      },
      { title: "15-30 minutes" },
      { title: "30-60 minutes" },
      {
        title: "More than 60 minutes",
      },
      { title: "Varies every day" },
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
      { title: "Low sodium" },
      { title: "Low sugar" },
      { title: "High fiber" },
      { title: "Organic" },
      { title: "Non-GMO" },
      {
        title: "Other (please specify)",
      },
    ],
  },
];
const questionMap = new Map<string, IQuestion>(
  questions.map((question) => [question.id, question]),
);

function App(): React.ReactElement {
  const [answers, setAnswers] = useLocalStorage<{
    [key: string]: string | null;
  }>("answers", {
    gender: null,
    age_range: null,
    lifestyle: null,
    marital_status: null,
    number_of_kids: null,
    kids_age_ranges: null,
    allergies: null,
    preferred_cuisine: null,
    preferred_protein: null,
    preferred_fat: null,
    preferred_carbs: null,
    specific_diet: null,
    diet_goal: null,
    meals_per_day: null,
    time_for_cook: null,
    dietary_restrictions: null,
  });
  const contextValue: QuestionnaireContextData = {
    questions: questionMap,
    answers,
    setAnswers,
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
