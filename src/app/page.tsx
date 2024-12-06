import { getLiveBatch, getVariants } from "@app/services";
import { Hero, SectionLinks } from "@app/components";

export default async function Home() {
  const liveBatchData = await getLiveBatch();
  const filteredSections = liveBatchData?.data?.sections?.filter(
    (item: any) => {
      return item?.name && item?.values?.length > 0;
    },
  );
  const variantsData = await getVariants();
  return (
    <main>
      <Hero liveBatchData={liveBatchData} variantsData={variantsData} />
      <div className="container flex flex-col gap-4 md:flex-row md:gap-12">
        <div className="order-2 my-8 flex-1 md:order-1 md:max-w-[calc(100%-348px)] lg:max-w-[calc(100%-448px)]">
          <SectionLinks sections={filteredSections} />

          <div id="test1"></div>
          <div id="test2"></div>
          <div id="test3"></div>
        </div>
      </div>
    </main>
  );
}
