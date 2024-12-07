import { getLiveBatch, getVariants } from "@app/services";
import {
  DemoClassBookButton,
  Feature,
  Hero,
  Instructor,
  SectionLinks,
  Pointer,
  RoutineDownload,
  TestimonialCarousel,
  CustomAccordion,
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

  const pointers = liveBatchData?.data?.sections?.find(
    (section: any) => section?.type === "pointers",
  );

  const classRoutine = liveBatchData?.data?.sections?.find(
    (section: any) => section?.type === "routine",
  );

  const testimonials = liveBatchData?.data?.sections?.find(
    (section: any) => section?.type === "testimonials",
  );

  const about = liveBatchData?.data?.sections?.find(
    (section: any) => section?.type === "about",
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

          {/* pointers section */}
          <div id={pointers?.type} className="mb-12">
            <h2 className="mb-4 text-xl font-bold md:text-2xl">
              {pointers?.name}
            </h2>
            <div className="grid grid-cols-1 gap-4 rounded-md border p-6 md:grid-cols-2 md:gap-8">
              {pointers?.values.map((pointer: any) => {
                return <Pointer key={pointer?.id} pointer={pointer} />;
              })}
            </div>
          </div>

          {/* class routine section */}
          <div id={classRoutine?.type} className="mb-12">
            <div className="flex justify-between">
              <h2 className="mb-4 text-xl font-bold md:text-2xl">
                {classRoutine?.name}
              </h2>
              <RoutineDownload
                downloadLink={classRoutine?.values[0]?.download_link}
              />
            </div>

            <div
              className="w-full"
              dangerouslySetInnerHTML={{
                __html: classRoutine?.values[0]?.html,
              }}
            />
          </div>

          {/* testimonials section */}
          <div id={testimonials?.type} className="mb-12">
            <h2 className="mb-4 text-xl font-bold md:text-2xl">
              {testimonials?.name}
            </h2>
            <TestimonialCarousel data={testimonials?.values} />
          </div>

          {/* about section */}
          <div id={about?.type} className="mb-12">
            <h2 className="mb-4 text-xl font-bold md:text-2xl">
              {about?.name}
            </h2>
            <CustomAccordion data={about?.values} />
          </div>
        </div>
      </div>
    </main>
  );
}
