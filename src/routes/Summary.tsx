import {useEffect} from "react";
import { useNavigate} from "react-router-dom";
import useNext from "../useNext";
import BMIDisplay from "../components/BMIDisplay";
import WeightGoalChart from "../components/WeightGoalChart";
import DietaryProfile from "../components/DietaryProfile";

function Summary(): React.ReactElement {

  const navigate = useNavigate();
  const next = useNext();

  // Attempt to answer any questions that are left unanswered
  useEffect(() => {
    next();
  }, []);

  function resetAnswers(): void {
    navigate("/");
  }

  return (
    <div className="p-4 md:p-10 rounded-lg shadow-lg overflow-scroll">
      <h1 className="text-4xl mb-8 text-center font-bold">Summary</h1>
      <BMIDisplay />
      <WeightGoalChart />
      <DietaryProfile />
      <button
        className="px-8 py-4 mt-8 bg-blue-600 text-white rounded-lg w-full md:w-auto"
        onClick={() => navigate('/results')}>View my meals</button>
      <button
        className="bg-red-600 m-auto px-8 py-4 mt-8 text-white rounded-lg"
        onClick={resetAnswers}
      >
            Start Over
      </button>
    </div>
  );
}

export default Summary;
