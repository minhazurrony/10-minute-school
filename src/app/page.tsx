import { getLiveBatch, getVariants } from "@app/services";
import {
  DemoClassBookButton,
  Feature,
  Hero,
  Instructor,
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
  const courseInstructors = liveBatchData?.data?.sections.find(
    (section: any) => section?.type === "instructors",
  );

  const features = liveBatchData?.data?.sections?.find(
    (section: any) => section?.type === "features",
  );

  return (
    <main>
      <Hero liveBatchData={liveBatchData} variantsData={variantsData} />
      <div className="container flex flex-col gap-4 md:flex-row md:gap-12">
        <div className="order-2 my-8 flex-1 md:order-1 md:max-w-[calc(100%-348px)] lg:max-w-[calc(100%-448px)]">
          <SectionLinks sections={filteredSections} />

          {/* Demo class section */}
          <div
            id="demo-class"
            className="mb-12 mt-4 flex gap-4 overflow-hidden rounded-xl bg-center bg-no-repeat p-4 md:mb-12 md:p-8"
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

          {/* Couse instructors */}
          <div id={courseInstructors?.type} className="mb-12">
            <h2 className="mb-4 text-xl font-bold md:text-2xl">
              {courseInstructors?.name}
            </h2>
            <div className="grid grid-cols-1 rounded border px-4 md:grid-cols-2">
              {courseInstructors?.values?.map((person: any) => {
                return <Instructor key={person?.slug} data={person} />;
              })}
            </div>
          </div>

          {/* features section */}
          <div id={features?.type} className="mb-12">
            <h2 className="mb-4 text-xl font-bold md:text-2xl">
              {features?.name}
            </h2>
            <div className="grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
              {features?.values.map((feature: any) => {
                return <Feature key={feature?.id} feature={feature} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
