import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  data: any[];
};

export const CustomAccordion: React.FC<Props> = ({ data }) => {
  return (
    <Accordion type="single" collapsible defaultValue={data[0]?.id}>
      {data?.map((item: any) => {
        return (
          <AccordionItem key={item?.id} value={item?.id}>
            <AccordionTrigger className="hover:no-underline">
              <div dangerouslySetInnerHTML={{ __html: item?.title }} />
            </AccordionTrigger>
            <AccordionContent>
              <div dangerouslySetInnerHTML={{ __html: item?.description }} />
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
