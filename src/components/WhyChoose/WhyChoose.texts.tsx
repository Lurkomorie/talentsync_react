import { ReactComponent as LayersIcon } from "../../icons/layers.svg";
import { ReactComponent as CodeIcon } from "../../icons/code.svg";
import { ReactComponent as PeopleIcon } from "../../icons/people.svg";
import { ReactComponent as ProIcon } from "../../icons/pro.svg";
import { WhyChooseItemProps } from "./WhyChoose.types";

export const whyChooseItems: WhyChooseItemProps[] = [
  {
    icon: LayersIcon,
    title: "Cost-Effectiveness",
    description:
      "Value that speaks volumes. TalentSync delivers not only exceptional services but also cost-effective solutions. Our commission is a monthly salary of the engineer. That's it.",
  },
  {
    icon: CodeIcon,
    title: "Customized Approach",
    description:
      "No two businesses are alike, and neither are their talent management needs. TalentSync takes a highly personalized approach, crafting customized solutions to address the unique challenges and goals of each client.",
  },
  {
    icon: PeopleIcon,
    title: "Scalability and Flexibility",
    description:
      "Grow with confidence. TalentSync's services are designed to scale alongside your business, ensuring flexibility and adaptability to meet evolving demands. Whether you're a startup or an enterprise, we've got you covered.",
  },
  {
    icon: ProIcon,
    title: "Expertise and Experience",
    description:
      "At TalentSync, our team boasts a wealth of industry expertise and years of hands-on experience. With a deep understanding of the talent landscape, our professionals bring unparalleled insights to every client.",
  },
];
