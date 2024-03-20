export interface PlanInfo {
  header: string;
  subHeader?: string;
  serviceInfo: ServiceInfo[];
  specialOffer?: SpecialOffer;
}

export interface ServiceInfo {
  photographyValue: PhotographyValue;
  includedServices: string[];
  extraServices: string[];
}

interface PhotographyValue {
  time: string;
  price: string;
}

interface SpecialOffer {
  header: string;
  offer: string;
}
