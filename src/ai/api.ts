import axios from "axios";

export const prompt = async (dietPlanData: { user_info: { [p: string]: string | null }; diet_rules: { limited_salt: boolean; reduced_times_eating: string; reduced_portion: string; intermittent_fasting: string; no_artificial_sugar: boolean } }): Promise<any> => {
  try {
    const response = await axios.post(
      "https://purefitapi.procamp.dev/ask",
      // "http://localhost:4089/ask",
      dietPlanData,
    );

    return response.data;
  } catch (error) {
    console.error("Error sending diet plan data:", error);
  }
};
export const plan = async (dietPlanData: { user_info: any; diet_rules: any, email: string }): Promise<any> => {
  try {
    const response = await axios.post(
      "https://purefitapi.procamp.dev/ask/plan",
      // "http://localhost:4089/ask/plan",
      dietPlanData,
    );

    return response.data;
  } catch (error) {
    console.error("Error sending diet plan data:", error);
  }
};
