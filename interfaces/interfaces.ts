export interface PageData {
    hero: HeroData;
    features: FeaturesData;
}

export interface HeroData {
    businessName: string;
    mainMessage: string;
    subMessage: string;
    buttonText: string;
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
