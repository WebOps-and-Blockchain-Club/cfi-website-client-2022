export type ISwiper = {
  heading: string;
  image: string;
};

export type IContent = {
  title?: string | null;
  description: string;
  image?: string | null;
  images?: ISwiper[] | null;
};

export type IMember = {
  name: string;
  image: string;
  email: string;
  phone: string;
  linkedIn?: string | null;
};

export type IGallery = {
  image: string;
};

export type IClub = {
  name: string;
  logo: string;
  oneLiner?: string | null;
  description: string[];
  projects?: IContent[] | null;
  achivements?: IContent[] | null;
  website?: string | null;
  github?: string | null;
  gallery?: IGallery[] | null;
  email: string;
  contacts: IMember[];
};

export type IClubs = {
  "3d-printing-club": IClub;
  "aero-club": IClub;
  "analytics-club": IClub;
  "cvi-club": IClub;
  "electronics-club": IClub;
  horizon: IClub;
  "ibot-club": IClub;
  igem: IClub;
  "product-design-club": IClub;
  "programming-club": IClub;
  sahaay: IClub;
  "team-envisage": IClub;
  "webops-and-blockchain-club": IClub;
};

export enum ClubsName {
  PRINTING3D = "3d-printing-club",
  AERO = "aero-club",
  ANALYTICS = "analytics-club",
  CVI = "cvi-club",
  ELECTRONICS = "electronics-club",
  HORIZON = "horizon",
  IBOT = "ibot-club",
  IGEM = "igem",
  PDC = "product-design-club",
  PROGRAMING = "programming-club",
  SAHAAY = "sahaay",
  ENVISAGE = "team-envisage",
  WEBOPS = "webops-and-blockchain-club",
}

export type ITeam = {
  name: string;
  logo: string;
  landing: string;
  oneLiner?: string | null;
  description: string[];
  projects?: IContent[] | null;
  achivements?: IContent[] | null;
  email: string;
  website?: string | null;
  gallery?: IGallery[] | null;
  contacts: IMember[];
};

export type ITeams = {
  "raftar-formula-racing": ITeam;
  "team-abhiyaan": ITeam;
  "team-anveshak": ITeam;
  "team-avishkar-hyperloop": ITeam;
};

export enum TeamsName {
  RAFTER = "raftar-formula-racing",
  ABHIYAAN = "team-abhiyaan",
  ANVESHAL = "team-anveshak",
  AVISHKAR = "team-avishkar-hyperloop",
}
