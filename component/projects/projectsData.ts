export interface IProject {
  name: string;
  description: string;
  image: string;
  website?: string;
  github?: string;
  ios?: string;
  android?: string;
  readMore?: string;
}

export const projectData: IProject[] = [
  {
    name: "WithEase",
    description:
      "Route-aware scheduling for mobile clinicians. WithEase helps healthcare professionals who travel between patient locations plan their visits and optimize their routes.",
    image: "/withease.png",
    website: "https://withease.care",
  },
  {
    name: "PushPurr",
    description:
      "A couples app that helps partners make each other feel chosen, daily, with heartfelt messages (Purrs), scheduled acts of love (Promises) and conversation-starting Questions.",
    image: "/pushpurr.png",
    website: "https://pushpurr.com",
  },
  {
    name: "Lace Pro",
    description:
      "An AI-powered auditory training platform that helps people with hearing loss understand speech better by training the brain. I build it at Neurotone AI, across the React Native app, the web app and the Supabase backend.",
    image: "/lace.png",
    website: "https://neurotone.com",
  },
  {
    name: "Calentre",
    description:
      "An open-source alternative to Calendly. Manage your appointments, get paid, and enjoy the scheduling experience.",
    image: "/home_events.png",
    website: "https://calentre.com",
    github: "https://github.com/Calentre",
  },
  {
    name: "MyBubble",
    description:
      "A mental health app that lets people track their moods and get support from family and friends.",
    image: "/mybbuble.png",
    ios: "https://apps.apple.com/gb/app/mybubble-mood-tracker-journal/id1591195254",
    android:
      "https://play.google.com/store/apps/details?id=com.mybubbleapp.mybubble",
  },
  {
    name: "Feature Notifier",
    description:
      "A Flutter package that lets developers tell users about new features inside their app after an update.",
    image: "/feature-notifier.png",
    github: "https://github.com/fiizzy/feature-notifier",
  },
  {
    name: "MayJuun Design System",
    description:
      "A Flutter design system library for building UI quickly and consistently.",
    image: "/mds.png",
    github: "https://github.com/MayJuun/design_system",
  },
  {
    name: "ACEP emPOC",
    description:
      "An emergency point-of-care app for the American College of Emergency Physicians.",
    image: "/acep.png",
    ios: "https://apps.apple.com/us/app/acep-empoc/id1460691785",
    android:
      "https://play.google.com/store/apps/details?id=org.acep.em_poc&hl=en&gl=US",
  },
  {
    name: "CoinForBarter SDK",
    description:
      "A payment SDK for processing cryptocurrency payments through the CoinForBarter API.",
    image: "/coinforbartersdk.png",
    github: "https://github.com/fiizzy/coinforbarter_sdk_flutter_V1.0.0",
  },
  {
    name: "Qollect",
    description:
      "Lets merchants receive payments for their goods and services in cryptocurrency.",
    image: "/qollect.png",
    android:
      "https://play.google.com/store/apps/details?id=com.coinforbarter.qollect",
  },
];
