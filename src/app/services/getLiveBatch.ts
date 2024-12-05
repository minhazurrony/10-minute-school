import { LIVE_BATCH_ENDPOINT } from "@/constants/api-routes";

export const getLiveBatch = async () => {
  const data = await fetch(LIVE_BATCH_ENDPOINT, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error("Error fetching live batch data", err));

  return data;
};
