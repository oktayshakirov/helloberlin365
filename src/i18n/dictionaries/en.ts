import type { AppDictionary } from "@/i18n/dictionaries/types";

export const enDictionary: AppDictionary = {
  metadata: {
    title:
      "Hello Berlin 365 | Web Development, Drone Photo & Drone Video, Print in Berlin",
    description:
      "Professional websites, drone photography & drone video, and print design in Berlin. 365-day service for startups, hair salons, restaurants and more. Get in touch now!",
    keywords:
      "web development berlin, drone photo berlin, drone video berlin, print design berlin, digital agency berlin, advertising agency berlin",
    ogLocale: "en_US",
    imageAlt:
      "Hello Berlin 365 - Web Development, Drone Photo & Drone Video, Print in Berlin",
  },
  navbar: {
    ariaLabel: "Main navigation",
    mobileAriaLabel: "Mobile navigation",
    logoAriaLabel: "Go to homepage",
    languageLabel: "Language",
    switchTo: "Switch to German",
    items: [
      {
        key: "home",
        title: "Home",
        ariaLabel: "Navigate to homepage",
        icon: "home",
      },
      {
        key: "services",
        title: "Services",
        ariaLabel: "Navigate to services",
        icon: "code",
      },
      {
        key: "angebote",
        title: "Packages",
        ariaLabel: "Navigate to packages",
        icon: "layers",
      },
      {
        key: "about",
        title: "About",
        ariaLabel: "Learn more about us",
        icon: "users",
      },
      {
        key: "contact",
        title: "Contact",
        ariaLabel: "Get in touch",
        icon: "phone",
      },
    ],
  },
  hero: {
    slogans: ["Your Brand.", "Our Mission.", "Every Day."],
    description:
      "Your story deserves attention - we make that happen with professional web development, drone photo & drone video, and print design. As a local digital agency, we help Berlin businesses succeed online and offline, 365 days a year.",
    cta: "Contact us",
    imageAlt:
      "Laptop, drone, and office equipment for web development and drone services in Berlin",
  },
  services: {
    title: "Our Services",
    description:
      "We make your business stand out - online, offline, everywhere.",
    features: [
      {
        step: "Web Design & Development",
        title: "Web Design & Development",
        content:
          "Modern, responsive websites with individual design. SEO-optimized and mobile-friendly for all businesses.",
        image: "/images/website.jpg",
      },
      {
        step: "Drone Photo & Drone Video",
        title: "Drone Photo & Drone Video",
        content:
          "Professional aerial photography and drone videos for your business. Perfect for websites, social media, real estate, events, and print media.",
        image: "/images/drone.jpg",
      },
      {
        step: "Print Design",
        title: "Print Design",
        content:
          "Custom-designed business cards, flyers, brochures, and price lists. Creative design for a strong first impression.",
        image: "/images/printmedia.jpg",
      },
    ],
  },
  customers: {
    title: "Who We Work With",
    description:
      "We support many industries with tailored web development, drone media, and print solutions.",
    labels: [
      "Influencers",
      "Hair Salons",
      "Startups",
      "Car Dealerships",
      "Restaurants",
      "Agents",
      "Sports",
      "Law Firms",
      "Transport",
      "Beauty",
    ],
  },
  offerings: {
    title: "Services & Example Packages",
    description:
      "Three common scopes. We align services and budget in a short call and prepare your tailored proposal for web, mobile, drone media, and print in Berlin.",
    customOffer: "Custom Offer",
    popular: "Popular choice",
    summary:
      "Every project is different: combinations across areas are always possible, including smaller budgets or phased expansion. Talk to us and we will find the right solution.",
    plans: [
      {
        title: "Starter",
        description:
          "Get visible online quickly - ideal for your first professional presence.",
        features: [
          "Website",
          "One-page site (1 homepage, up to 5 sections)",
          "2 legal pages (Imprint & Privacy)",
          "Responsive design for all devices",
          "Custom design",
          "Domain & hosting included (1 year)",
          "Keyword research & optimization",
          "Technical SEO & page speed optimization",
          "Single language (e.g. only EN)",
          "Drone Photo & Drone Video",
          "15 aerial assets (photo/video, location or object)",
          "Post production & web optimization",
          "Print & Media",
          "100 business cards (design & print)",
        ],
      },
      {
        title: "Growth",
        description:
          "More content and reach - when your business is ready to scale further.",
        features: [
          "Website",
          "Homepage + up to 4 custom subpages",
          "2 legal pages (Imprint & Privacy)",
          "Responsive design for all devices",
          "Custom web design",
          "Domain & hosting included (1 year)",
          "Keyword research & optimization",
          "Technical SEO & page speed optimization",
          "Single language (e.g. only EN)",
          "Drone Photo & Drone Video",
          "40 aerial assets (photo/video, location & object)",
          "Post production & web optimization",
          "Print & Media",
          "250 business cards (design & print)",
          "Flyers or price lists (design)",
        ],
      },
      {
        title: "Comprehensive",
        description:
          "Maximum presence - for brands that want a fully consistent experience.",
        features: [
          "Website",
          "Homepage + up to 7 custom subpages",
          "All required legal pages",
          "Responsive design for all devices",
          "Custom premium web design",
          "Domain & hosting included (1 year)",
          "Keyword research & optimization",
          "Technical SEO & page speed optimization",
          "Multilingual setup (e.g. DE/EN)",
          "Drone Photo & Drone Video",
          "100 aerial assets (photo/video, location, object & event)",
          "Post production & web optimization",
          "Print & Media",
          "500 business cards (design & print)",
          "Flyers or price lists (design & print)",
        ],
      },
    ],
    categoryLabels: {
      branding: "Branding & Design",
      website: "Website",
      drone: "Drone Photo & Drone Video",
      print: "Print & Media",
    },
  },
  about: {
    title: "About Hello Berlin 365",
    philosophyTitle: "Our Philosophy",
    philosophyParagraphs: [
      "We believe a website is more than a tool - it is your brand's digital home. A strong home needs both: a solid foundation for stability and a soul that brings it to life.",
      "That is exactly what our philosophy combines. By connecting precise engineering, impactful drone visuals, and creative design, we build digital experiences that are technically strong and genuinely human - for a brand presence with character.",
    ],
    processTitle: "How We Work",
    processItems: [
      "Clear processes from strategy to delivery",
      "Transparent communication and reliable timelines",
      "Clean technical implementation focused on performance",
      "Flexible packages for web, mobile, drone, and print",
      "Focus on measurable outcomes and sustainable growth",
      "Continuous optimization after launch, not standstill",
      "Scalable solutions that grow with your business",
    ],
  },
  contact: {
    title: "Contact",
    description:
      "Pick the topics that fit your needs and share your approximate budget - we will reply with a proposal.",
    cardTitle: "Send message",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your.email@example.com",
    interestsLabel: "What are you interested in?",
    interestsHint: "(one or more options)",
    interests: {
      webdevelopment: "Web Development",
      drone: "Drone Footage",
      print: "Print Design",
    },
    budgetLabel: "Approximate budget",
    budgetPlaceholder:
      "e.g. around 3,000 EUR, flexible, or: consultation first",
    messageLabel: "Message",
    messagePlaceholder:
      "What exactly do you need? Goal, timeline, existing website ...",
    submit: "Send message",
  },
  footer: {
    slogan: "Your Brand. Our Mission. Every Day.",
    linksTitle: "Quick links",
    followTitle: "Follow us",
    rights: "© 2025 Hello Berlin 365. All rights reserved.",
  },
  seoSchema: {
    alternateName:
      "Hello Berlin 365 - Web Development, Drone Photo & Drone Video",
    description:
      "Professional web development, drone photo & drone video, and print design services in Berlin. Specialized for local companies and startups.",
    catalogName: "Digital Services",
    services: [
      {
        name: "Web Design & Development",
        description: "Responsive websites with individual design",
      },
      {
        name: "Drone Photo & Drone Video",
        description:
          "Professional aerial photography and drone videos for businesses, real estate, and events",
      },
      {
        name: "Print Media Design",
        description: "Business cards, flyers, brochures, and price list design",
      },
    ],
    employeeJobTitle: "Software Developer",
  },
  serverAction: {
    requiredFields: "Please fill in all required fields.",
    budgetTooLong: "The budget field is too long.",
    noInterests:
      "Please select at least one topic (Web Development, Drone Footage, or Print).",
    honeypotRejected: "Request could not be processed.",
    resubmit: "Please submit the form again.",
    sendFailed: "Email could not be sent. Please try again.",
    sendSuccess: "Message sent successfully!",
    genericError: "Something went wrong. Please try again.",
    subjectPrefix: "Contact",
    emailHeading: "Contact request (Website)",
    emailLabels: {
      name: "Name",
      email: "Email",
      topics: "Topics",
      budget: "Budget",
      message: "Message",
    },
    interestLabels: {
      webdevelopment: "Web Development",
      drone: "Drone Footage",
      print: "Print",
    },
  },
};
