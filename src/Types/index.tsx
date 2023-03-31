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
  department?: string | null;
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
  logoM?: string | null;
  oneLiner?: string | null;
  description: string;
  projects?: IContent[] | null;
  achievements?: IContent[] | null;
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
  "team-sahaay": IClub;
  "team-envisage": IClub;
  "webops-and-blockchain-club": IClub;
  // "maths-club": IClub;

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
  SAHAAY = "team-sahaay",
  ENVISAGE = "team-envisage",
  WEBOPS = "webops-and-blockchain-club",
  // MATHS = "maths-club"
}

export type ITeam = {
  name: string;
  logo: string;
  logoM?: string | null;
  landing: string;
  oneLiner?: string | null;
  description: string;
  projects?: IContent[] | null;
  achievements?: IContent[] | null;
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
  // "team-agnirath": ITeam;
  // "team-abhyuday": ITeam
};

export enum TeamsName {
  RAFTER = "raftar-formula-racing",
  ABHIYAAN = "team-abhiyaan",
  ANVESHAL = "team-anveshak",
  AVISHKAR = "team-avishkar-hyperloop",
  // AGNIRATH = "team-agnirath",
  // ABHYUDAY = "team-abhyuday"
}

export type IContact = {
  title: string;
  email?: string | null;
  members: IMember[];
};
