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
