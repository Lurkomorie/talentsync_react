import { FiActivity, FiBookOpen, FiCheckCircle, FiUser } from "react-icons/fi";
import { ProcessItemProps } from "./ProcessTree.types";
import { ReactComponent as People } from "../../icons/people2.svg";
import { ReactComponent as Mask } from "../../icons/mask.svg";
import { ReactComponent as Guard } from "../../icons/guard.svg";
import { ReactComponent as Pointer } from "../../icons/pointer.svg";

export const processItem: ProcessItemProps[] = [
    {
        isFirst: true,
        icon: People,
        title: "Introductory Meeting (10-15 Minutes)",
        description:
            "Let's have a chat about your company, tech stack and open positions. Our mutual succes depends on the amount of detail we get from you.",
    },
    {
        icon: Mask,
        title: "Talent Sourcing",
        description:
            "Throughout our network, we identify and attract highly qualified engineers from Eastern Europe, ensuring a pool of candidates who align with your company's technical and cultural requirements.",
    },
    {
        icon: Guard,
        title: "Screening and Assessment",
        description:
            "Our rigorous screening process evaluates candidates not only for their technical expertise but also for their English skills, adaptability and problem-solving skills, ensuring a holistic fit for your organization.",
    },
    {
        icon: Pointer,
        title: "Logistics and Legal Support (up to 2 weeks, if needed)",
        description:
            "From negotiation and signing a B2B contract, to opening companies for your new teammate(s) if needed. We cover it all, making the onboarding process smooth for both you and the recruited talent.",
        isLast: true,
    },
];