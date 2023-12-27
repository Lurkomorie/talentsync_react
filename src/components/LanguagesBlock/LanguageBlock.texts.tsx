import JavaScriptIcon from "../../icons/languages/javascript.svg";
import TypeScriptIcon from "../../icons/languages/typescript.svg";
import ReactIcon from "../../icons/languages/react.svg";
import AngularIcon from "../../icons/languages/angular.svg";
import JavaIcon from "../../icons/languages/java.svg";
import NodeJSIcon from "../../icons/languages/nodejs.svg";
import PythonIcon from "../../icons/languages/python.svg";
import SwiftIcon from "../../icons/languages/swift.svg";
import KotlinIcon from "../../icons/languages/kotlin.svg";
import CSharpIcon from "../../icons/languages/c.png";
import BigDataEngineeringIcon from "../../icons/languages/bigdata.png";
import MLIcon from "../../icons/languages/ml.png";
import AWSIcon from "../../icons/languages/aws.svg";
import AzureIcon from "../../icons/languages/azure.png";
import DataScienceIcon from "../../icons/languages/data-science.png";

export type TechItem = {
  icon: string;
  title: string;
};

export const techItems: TechItem[] = [
  {
    icon: JavaScriptIcon,
    title: "JavaScript",
  },
  {
    icon: TypeScriptIcon,
    title: "TypeScript",
  },
  {
    icon: ReactIcon,
    title: "React",
  },
  {
    icon: AngularIcon,
    title: "Angular",
  },
  {
    icon: JavaIcon,
    title: "Java",
  },
  {
    icon: NodeJSIcon,
    title: "Node.js",
  },
  {
    icon: PythonIcon,
    title: "Python",
  },
  {
    icon: SwiftIcon,
    title: "Swift",
  },
  {
    icon: KotlinIcon,
    title: "Kotlin",
  },
  {
    icon: CSharpIcon,
    title: "C#/.Net",
  },
  {
    icon: BigDataEngineeringIcon,
    title: "Big Data Engineering",
  },
  {
    icon: DataScienceIcon,
    title: "Data Science",
  },
  {
    icon: MLIcon,
    title: "Machine Learning",
  },
  {
    icon: AWSIcon,
    title: "AWS",
  },
  {
    icon: AzureIcon,
    title: "Azure",
  },
];
