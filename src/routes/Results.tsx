import { useState, useEffect, useContext, useRef } from 'react';
import { prompt } from "../ai/api";
import { QuestionContext } from "../context";
import MealIdeas from "../components/MealIdeas";
import LoadingIcon from "../components/LoadingIcon";
import ResultMenu from "../components/ResultMenu";
import Congratulations from "../components/Congratulations";

function Results() {
  const { answers, storedMeals, setStoredMeals } = useContext(QuestionContext);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const isFetching = useRef(false);

  async function fetchData(force?: true) {
    if (!force && (storedMeals && Object.keys(storedMeals).length)) {
      setData(storedMeals);
      return;
    }
    if (isFetching.current) {
      return;
    }
    isFetching.current = true;
    setLoading(true);
    try {
      const response = await prompt({
        user_info: answers,
        diet_rules: {
          no_artificial_sugar: true,
          limited_salt: true,
          intermittent_fasting: "{dependent_on_user}",
          reduced_portion: "{dependent_on_user}",
          reduced_times_eating: "{dependent_on_user}",
        },
      });
      setData(response);
      setStoredMeals(response);
    } catch (error) {
      console.error("Error fetching the data", error);
      // Handle error appropriately
    } finally {
      setLoading(false);
      isFetching.current = false;
    }
  }

  useEffect(() => {
    fetchData();
  }, [answers]);

  if (loading || !data) {
    return <LoadingIcon />;
  }

  return (
    <>
      <div className="flex justify-end">
        <ResultMenu fetchData={fetchData} />
      </div>
      <Congratulations />
      <MealIdeas data={data} />
    </>
  );
}

export default Results;
