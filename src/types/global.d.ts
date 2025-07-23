type buttonClick = () => void;

type ButtonProps = {
  text: string;
  action: () => void;
};

type HeadingProps = {
  mainHeading: string;
  subHeading: string
};


type ServiceProps = {
  imgIndex: number;
  title: string;
  description: string;
  dotpoints?: string[];
  location?: string;
  price?: string;
}