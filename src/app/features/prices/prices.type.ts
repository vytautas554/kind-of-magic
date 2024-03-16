export interface PlanInfo {
  category: string;
  serviceInfo: ServiceInfo[];
  extraServices: string[];
}

export interface ServiceInfo {
  photographyValue: PhotographyValue;
  includedServices: string[];
}

interface PhotographyValue {
  time: string;
  price: string;
}
