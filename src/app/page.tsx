import { getLiveBatch, getVariants } from "@/app/services";

export default async function Home() {
  const liveBatchData = await getLiveBatch();
  const variantsData = await getVariants();

  return (
    <div>
      <h1>10 minute school</h1>
    </div>
  );
}
