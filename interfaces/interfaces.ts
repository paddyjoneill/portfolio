export interface PageData {
    hero: HeroData;
    services: ServicesData;
    features: FeaturesData;
    examples: ExampleSitesData;
    contact: ContactFormData;
}

export interface HeroData {
    businessName: string;
    mainMessage: string;
    subMessage: string;
    buttonText: string;
}

export interface ServicesData {
    title: string;
    firstSection: ServiceSection;
    secondSection: ServiceSection;
}

export interface ServiceSection {
    title: string;
    text: string;
}

export interface FeaturesData {
    title: string;
    box1: FeatureBoxData;
    box2: FeatureBoxData;
    box3: FeatureBoxData;
}

export interface FeatureBoxData {
    smallTitle: string;
    title: string;
    text: string;
}

export interface ExampleSitesData {
    sites: ExampleSite[];
}

export interface ExampleSite {
    link: string;
    imageUrl: string;
    title: string;
    description: string;
}

export interface ContactFormData {
    email: string;
    phone: string;
    address: string;
}
