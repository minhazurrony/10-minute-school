import { VARIANTS_ENDPOINT } from "../constants/api-routes";

export const getVariants = async () => {
  const data = await fetch(VARIANTS_ENDPOINT, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error("Error fetching variants data", err));

  return data;
};
