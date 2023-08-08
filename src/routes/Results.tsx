import React, {useState, useEffect, useContext} from 'react';
import {prompt} from "../ai/api";
import {QuestionContext} from "../context";
import MealIdeas from "../components/MealIdeas";
import LoadingIcon from "../components/LoadingIcon";

function Results() {
  const { answers } = useContext(QuestionContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
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
      } catch (error) {
        console.error("Error fetching the data", error);
        // Handle error appropriately
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [answers]);

  if (loading) {
    return <LoadingIcon />;
  }

  return <MealIdeas data={data} />;
}

export default Results;
