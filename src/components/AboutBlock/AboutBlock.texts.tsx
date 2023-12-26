import { AboutItemProps } from "./AboutBlock.types";
import { ReactComponent as People } from "../../icons/people2.svg";
import { ReactComponent as Layers } from "../../icons/layers.svg";
import { ReactComponent as Bulb } from "../../icons/bul.svg";
import { ReactComponent as Reception } from "../../icons/reception.svg";
import { ReactComponent as Time } from "../../icons/time.svg";
import { ReactComponent as Euro } from "../../icons/euro.svg";
import { ReactComponent as Family } from "../../icons/family.svg";
import { ReactComponent as World } from "../../icons/world.svg";

export const aboutItems: AboutItemProps[] = [
  {
    icon: People,
    title: "Highly Skilled Workforce",
    description:
      "Eastern Europe has a strong tradition of technical education and a well-educated workforce. Engineers from this region often possess strong technical skills, with a solid foundation in mathematics, science, and engineering.",
  },
  {
    icon: Layers,
    title: "Cost-Effective Solutions",
    description:
      "While salaries in Western Europe may be higher, Eastern Europe offers competitive labor costs without compromising on the quality of talent. This can result in significant cost savings for companies.",
  },
  {
    icon: Bulb,
    title: "Innovative Mindset",
    description:
      "Eastern European engineers are known for their innovative and problem-solving mindset. They often excel in creative thinking and adaptability, making them valuable contributors to technology-driven industries.",
  },
  {
    icon: Reception,
    title: "Cultural Compatibility",
    description:
      "Eastern European professionals often share cultural similarities with Western Europe, which can contribute to a smoother integration within multinational teams. Shared values and work ethics can enhance collaboration and team dynamics.",
  },
  {
    icon: Time,
    title: "Time Zone Advantage",
    description:
      "Eastern European countries typically have time zones that allow for convenient overlap with Western European business hours. This can facilitate real-time communication and collaboration between teams.",
  },
  {
    icon: Euro,
    title: "European Union Membership",
    description:
      "Several Eastern European countries are members of the European Union, promoting a regulatory environment that aligns with EU standards. This can simplify legal and administrative processes for companies operating within the EU. At the same time, several engineers possess a double citizenship which allows them to make business trips as often as needed.",
  },
  {
    icon: Family,
    title: "Diverse Talent Pool",
    description:
      "Eastern Europe offers a diverse talent pool with expertise in various engineering disciplines. Whether your company needs software developers, hardware engineers, or specialists in emerging technologies, you can find a broad range of skills in the region.",
  },
  {
    icon: World,
    title: "Global Recognition",
    description:
      "Over the years, Eastern Europe has gained recognition for its contributions to the global technology and engineering sectors. Companies choosing talent from this region benefit from the region's positive reputation in the international business community.",
  },
];
