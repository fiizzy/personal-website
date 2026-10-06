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
    name: "Calentre",
    description:
      "Calentre is an open-source alternative to Calendly! 🌟  It allows you manage your appointments, get paid, and enjoy the scheduling experience.",
    image: "/home_events.png",
    github: "https://github.com/Calentre",
  },
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
      "An AI-powered auditory training platform by Neurotone that helps people with hearing difficulties understand speech better by training the brain, with personalized speech-in-noise, processing speed and working memory exercises.",
    image: "/lace.png",
    website: "https://neurotone.com",
  },
  {
    name: "MyBubble",
    description:
      "A mental health mobile app that allows users track their moods and receive support from family and friends",
    image: "/mybbuble.png",
    ios: "https://apps.apple.com/gb/app/mybubble-mood-tracker-journal/id1591195254",
    android:
      "https://play.google.com/store/apps/details?id=com.mybubbleapp.mybubble",
  },
  {
    name: "Feature Notifier",
    description:
      "A flutter package that allows developers notify users of new features within their app after a new update.",
    image: "/feature-notifier.png",
    github: "https://github.com/fiizzy/feature-notifier",
  },
  {
    name: "MayJuun Design System",
    description:
      "A flutter design system library that enables rapid UI building",
    image: "/mds.png",
    github: "https://github.com/MayJuun/design_system",
  },
  {
    name: "ACEP emPOC",
    description:
      "An emergency point of Care App for the American  College of Emergency Physicians.",
    image: "/acep.png",
    ios: "https://apps.apple.com/us/app/acep-empoc/id1460691785",
    android:
      "https://play.google.com/store/apps/details?id=org.acep.em_poc&hl=en&gl=US",
  },
  {
    name: "CoinForBarter SDK",
    description:
      "A cryptocurrency payment gateway SDK that allows you process crypto payments using the CoinForBarter API",
    image: "/coinforbartersdk.png",
    github: "https://github.com/fiizzy/coinforbarter_sdk_flutter_V1.0.0",
  },
  {
    name: "Qollect",
    description:
      "Qollect allows merchants to receive payments for their goods and services in cryptocurrency.",
    image: "/qollect.png",
    android:
      "https://play.google.com/store/apps/details?id=com.coinforbarter.qollect",
  },
];
