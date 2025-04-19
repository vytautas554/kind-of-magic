export interface ImageInfo {
  imageSrc: string;
  showTitle: boolean;
  title: string;
  description: string;
  showCta: boolean;
}

export interface CardSectionData {
  imageSrc: string;
  title: string;
  description: string;
  ctaLabel: string;
  routePath: string;
  reviewPerson?: string;
}

export interface ImageData {
  name: string;
  url: string;
  loaded?: boolean;
}
