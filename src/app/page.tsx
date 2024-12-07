import { getLiveBatch, getVariants } from "@app/services";
import {
  DemoClassBookButton,
  Hero,
  PrimaryButton,
  SectionLinks,
} from "@app/components";
import Image from "next/image";

export default async function Home() {
  const liveBatchData = await getLiveBatch();
  const filteredSections = liveBatchData?.data?.sections?.filter(
    (item: any) => {
      return item?.name && item?.values?.length > 0;
    },
  );
  const variantsData = await getVariants();

  const demoClassEngagement = liveBatchData?.data?.sections[0]?.values[0];

  return (
    <main>
      <Hero liveBatchData={liveBatchData} variantsData={variantsData} />
      <div className="container flex flex-col gap-4 md:flex-row md:gap-12">
        <div className="order-2 my-8 flex-1 md:order-1 md:max-w-[calc(100%-348px)] lg:max-w-[calc(100%-448px)]">
          <SectionLinks sections={filteredSections} />

          {/* Demo class section */}
          <div
            id="demo-class"
            className="mb-8 mt-4 flex gap-4 overflow-hidden rounded-xl bg-center bg-no-repeat p-4 md:mb-12 md:p-8"
            style={{
              backgroundImage: `url(${demoClassEngagement?.background?.image})`,
            }}
          >
            <div className="w-full md:w-1/2">
              <Image
                src={demoClassEngagement?.top_left_icon_img}
                height={150}
                width={150}
                alt="demo-class-image"
                className="mb-4"
              />
              <h2
                className="mb-2 text-xl font-bold"
                style={{ color: demoClassEngagement?.title_color }}
              >
                {demoClassEngagement?.title}
              </h2>
              <p
                className="mb-6 text-base"
                style={{ color: demoClassEngagement?.description_color }}
              >
                {demoClassEngagement?.description}
              </p>
              <div className="w-3/5">
                <DemoClassBookButton cta={demoClassEngagement?.cta} />
              </div>
            </div>
            <div className="hidden w-1/2 items-center md:flex">
              <Image
                src={demoClassEngagement?.thumbnail}
                height={200}
                width={200}
                alt="thumbnail"
                className="w-full"
              />
            </div>
          </div>
          <div id="test2"></div>
          <div id="test3"></div>
        </div>
      </div>
    </main>
  );
}
