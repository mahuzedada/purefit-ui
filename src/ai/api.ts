import axios from "axios";
import { DietPlanDTO } from "./dto.ts";

export const prompt = async (dietPlanData: DietPlanDTO): Promise<void> => {
  try {
    const response = await axios.post(
      "http://localhost:3000/ask",
      dietPlanData,
    );

    // Log the result
    console.log(response.data);
  } catch (error) {
    console.error("Error sending diet plan data:", error);
  }
};
