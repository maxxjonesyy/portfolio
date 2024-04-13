export type NavProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export type LinkButton = {
  download?: boolean;
  route: string;
  external: boolean;
  text: string;
  textSize?: string;
};

export type Project = {
  id: number;
  heading: string;
  image: string;
  description: string;
  challenges: string;
  website: string;
  github: string;
  technology: string[][];
};

export type ProjectCardType = {
  project: {
    heading: string;
    image: string;
    description: string;
    challenges: string;
    website: string;
    github: string;
    technology: string[][];
  };
  setActiveProject: React.Dispatch<React.SetStateAction<Object>>;
};

export type FeaturedCardType = {
  heading: string;
  image: string;
  description: string;
  challenges: string;
  website: string;
  github: string;
  technology: string[][];
};
