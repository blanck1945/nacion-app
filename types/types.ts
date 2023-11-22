export type AccountTags = {
  name: string;
  id_web: string;
  type_id: string;
  type: string;
};

export type AccountBranch = {
  id: string;
  crmid: string;
  country: string;
  state: string;
  city: string;
  cuit: string;
  neighborhood: string;
  zip_code: string;
  region: string;
  address: string;
  number: string;
  observations: string;
  location: number;
  status: string;
  phone: string;
  virtualCard: boolean;
  created_on: string;
  updated_on: string;
};

export type AccountBenefit = {
  ids: string[];
  id: string;
  program_name: string[];
  name: string;
  type: string;
  type_benefit: string;
  type_weight: number;
  category: string;
  subcategory: string;
  gender: string | null;
  exclusive: boolean;
  alliance: string | null;
  title: string;
  description: string;
  legal: string;
  images: {
    id: string;
    type: string;
    url: string;
    highlighted: boolean;
    thumb: boolean;
  }[];
  value: string;
  weekdays: string[];
  status: string;
  auto_renew: string;
  validity: {
    date_from: string;
    date_to: string;
  };
  crm_ids: string[];
  created_on: string;
  updated_on: string;
  transactionTypes: string[];
  urlBenefit: string | null;
  haveVoucher: boolean;
};

export type AccountImage = {
  id: string;
  type: string;
  url: string;
  highlighted: boolean;
  thumb: boolean;
};

export type AccountSocialNetworks = {
  facebook: {
    name: string;
    type: string;
    prefix: string;
    url: string;
  };
  twitter: {
    name: string;
    type: string;
    prefix: string;
    url: string;
  };
  instagram: {
    name: string;
    type: string;
    prefix: string;
    url: string;
  };
};

export type Account = {
  id: string;
  crmid: string;
  name: string;
  isGeoLocal: boolean;
  haveVoucher: boolean;
  cuit: string;
  status: string;
  tags: AccountTags[];
  branches: AccountBranch[];
  benefits: AccountBenefit[];
  phone: string | null;
  email: string | null;
  web: string | null;
  highlighted: string;
  created_on: string;
  updated_on: string;
  ecommerce: boolean;
  images: AccountImage[];
  relevance: number;
  description: string;
  virtualCard: boolean;
  socialNetworks: AccountSocialNetworks;
};

export type ApiCodes = {
  name: string;
  image: string;
  crmid: string;
};

export type ApiBenefits = {
  name: string;
  image: string;
  crmid: string;
  benefits: AccountBenefit[];
  nearLocation: number;
};

export type CardData = Partial<ApiBenefits> & {
  name: string;
  image: string;
  crmid: string;
};

export const cardTypes = {
  codes: "codes",
  benefits: "benefits",
} as const;

export type CardTypes = (typeof cardTypes)[keyof typeof cardTypes];
