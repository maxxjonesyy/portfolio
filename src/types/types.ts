export type NavProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export type LinkButton = {
  internalRoute: string;
  externalRoute?: string;
  text: string;
};
