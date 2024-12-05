import { getLiveBatch, getVariants } from "@/app/services";
import { Hero } from "@/app/components";

export default async function Home() {
  const liveBatchData = await getLiveBatch();
  const variantsData = await getVariants();
  return (
    <main>
      <Hero liveBatchData={liveBatchData} variantsData={variantsData} />
    </main>
  );
}
