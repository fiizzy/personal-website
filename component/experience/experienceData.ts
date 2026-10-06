export interface IRole {
  company: string;
  role: string;
  period: string;
  location: string;
  about: string;
  highlights: string[];
}

export const experience: IRole[] = [
  {
    company: "Neurotone AI",
    role: "Full-stack Engineer",
    period: "Dec 2024 – Present",
    location: "Florida, US",
    about: "Health tech using AI to help patients hear better.",
    highlights: [
      "Bring AI features into the React Native app to make auditory training flow better for patients.",
      "Led the web version of the app, so patients can train on whichever platform suits them.",
      "Build the backend on Supabase and PostgreSQL, with RPC-based APIs serving every client.",
      "Own CI/CD for backend deploys and the full mobile release cycle with Expo, shipping regular updates to the App Store and Google Play.",
    ],
  },
  {
    company: "El Paso Labs",
    role: "React Native Developer",
    period: "Jul 2022 – Nov 2024",
    location: "Texas, US",
    about: "Software agency building for clients in the US and UK.",
    highlights: [
      "Led the mobile team for Needle, a music-powered social app, speeding up feature delivery by 35%.",
      "Rebuilt the app from scratch for its v2 launch, lifting early user engagement by 25%.",
      "Shipped core features in React Native, Redux Toolkit and TypeScript with Jest tests, cutting crashes by 30%.",
      "Automated builds and store releases with Fastlane and GitHub Actions: 20% faster builds and a release cycle twice as quick.",
      "Mentored and guided the engineering team on code quality and technical direction.",
    ],
  },
  {
    company: "CoinForBarter",
    role: "React Native Engineer",
    period: "Mar 2021 – Jul 2022",
    location: "Delaware, US",
    about: "Cryptocurrency payment gateway.",
    highlights: [
      "Built a payments SDK that powered more than 2,000 transactions in its first month.",
      "Led a point-of-sale app that grew merchant revenue by 75% within two months of onboarding.",
      "Automated testing in GitHub Actions behind a 75% minimum coverage bar, saving 35% of testing time.",
    ],
  },
  {
    company: "MayJuun",
    role: "Flutter & React Native Developer",
    period: "Aug 2021 – Mar 2022",
    location: "North Carolina, US",
    about: "Health-tech agency building better tools for healthcare.",
    highlights: [
      "Led an internal design system of 50+ components, making UI development almost 40% faster.",
      "Worked on an emergency medicine app used by more than 40,000 doctors.",
      "Redesigned the company website and set up push notifications with Firebase Cloud Messaging.",
    ],
  },
  {
    company: "Infusync",
    role: "Product Design Lead",
    period: "Jan 2018 – Aug 2021",
    location: "Lagos, Nigeria",
    about: "Healthcare tech building hospital management systems.",
    highlights: [
      "Designed healthcare products for more than 3 million users with cross-functional teams, from concept to launch.",
      "Ran user research and usability testing, and kept work within regulatory and accessibility standards.",
      "Promoted to design lead, managing a designer's deliverables and UI standards.",
    ],
  },
];
