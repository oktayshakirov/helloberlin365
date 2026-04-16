export interface AppDictionary {
  metadata: {
    title: string;
    description: string;
    keywords: string;
    ogLocale: string;
    imageAlt: string;
  };
  navbar: {
    ariaLabel: string;
    mobileAriaLabel: string;
    logoAriaLabel: string;
    languageLabel: string;
    switchTo: string;
    items: Array<{
      key: "home" | "services" | "angebote" | "about" | "contact";
      title: string;
      ariaLabel: string;
      icon: "home" | "code" | "layers" | "users" | "phone";
    }>;
  };
  hero: {
    slogans: string[];
    description: string;
    cta: string;
    imageAlt: string;
  };
  services: {
    title: string;
    description: string;
    features: Array<{
      step: string;
      title: string;
      content: string;
      image: string;
    }>;
  };
  customers: {
    title: string;
    description: string;
    labels: string[];
  };
  offerings: {
    title: string;
    description: string;
    customOffer: string;
    popular: string;
    summary: string;
    plans: Array<{
      title: string;
      description: string;
      features: string[];
    }>;
    categoryLabels: {
      branding: string;
      website: string;
      drone: string;
      print: string;
    };
  };
  about: {
    title: string;
    philosophyTitle: string;
    philosophyParagraphs: string[];
    processTitle: string;
    processItems: string[];
  };
  contact: {
    title: string;
    description: string;
    cardTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    interestsLabel: string;
    interestsHint: string;
    interests: {
      webdevelopment: string;
      drone: string;
      print: string;
    };
    budgetLabel: string;
    budgetPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
  };
  footer: {
    slogan: string;
    linksTitle: string;
    followTitle: string;
    rights: string;
  };
  seoSchema: {
    alternateName: string;
    description: string;
    catalogName: string;
    services: Array<{ name: string; description: string }>;
    employeeJobTitle: string;
  };
  serverAction: {
    requiredFields: string;
    budgetTooLong: string;
    noInterests: string;
    honeypotRejected: string;
    resubmit: string;
    sendFailed: string;
    sendSuccess: string;
    genericError: string;
    subjectPrefix: string;
    emailHeading: string;
    emailLabels: {
      name: string;
      email: string;
      topics: string;
      budget: string;
      message: string;
    };
    interestLabels: {
      webdevelopment: string;
      drone: string;
      print: string;
    };
  };
}
