import { getLiveBatch, getVariants } from "@/services";
import { Hero } from "@/components";

export default async function Home() {
  const liveBatchData = await getLiveBatch();
  const variantsData = await getVariants();
  return (
    <main>
      <Hero liveBatchData={liveBatchData} variantsData={variantsData} />
    </main>
  );
}
