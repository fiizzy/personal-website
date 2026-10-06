export interface ITechnology {
  name: string;
  image: string;
  url: string;
  // White-only logos that must flip in light mode
  mono?: boolean;
}

export interface ITechnologyGroup {
  type: string;
  data: ITechnology[];
}

export const stack: ITechnologyGroup[] = [
  {
    type: "Languages",
    data: [
      {
        name: "TypeScript",
        image: "/ts.svg",
        url: "https://www.typescriptlang.org/",
      },
      {
        name: "Javascript",
        image: "/js.svg",
        url: "https://www.javascript.com/",
      },
      { name: "Dart", image: "/dart.svg", url: "https://dart.dev" },
      { name: "Go", image: "/golang.svg", url: "https://go.dev/", mono: true },
    ],
  },
  {
    type: "Mobile",
    data: [
      {
        name: "React Native",
        image: "/react.svg",
        url: "https://www.react.dev/",
      },
      { name: "Flutter", image: "/flutter.svg", url: "https://flutter.dev" },
    ],
  },
  {
    type: "Web & Server",
    data: [
      { name: "React", image: "/react.svg", url: "https://www.react.dev/" },
      {
        name: "NextJs",
        image: "/nextjs.svg",
        url: "https://nextjs.org/",
        mono: true,
      },
      { name: "Node", image: "/nodejs.svg", url: "https://www.nodejs.org/" },
    ],
  },
  {
    type: "Cloud & Backend",
    data: [
      { name: "AWS", image: "/aws.png", url: "https://aws.com" },
      {
        name: "Firebase",
        image: "/firebase.svg",
        url: "https://firebase.google.com",
      },
      { name: "Supabase", image: "/supabase.svg", url: "https://supabase.com" },
    ],
  },
  {
    type: "CI/CD",
    data: [
      {
        name: "CodeMagic",
        image: "/code-magic.svg",
        url: "https://www.codemagic.io/",
      },
      {
        name: "GitHub Actions",
        image: "/githubactions.svg",
        url: "https://github.com/features/actions",
      },
      {
        name: "Vercel Workflow",
        image: "/vercel.svg",
        url: "https://vercel.com/workflow",
      },
      {
        name: "Circle CI",
        image: "/circleci.png",
        url: "https://circleci.com/",
      },
      { name: "Jenkins", image: "/jenkins.jpeg", url: "https://jenkins.io" },
    ],
  },
  {
    type: "Analytics",
    data: [
      {
        name: "Amplitude Analytics",
        image: "/amplitude.svg",
        url: "https://www.amplitude.com/",
      },
      {
        name: "Firebase Analytics",
        image: "/google-analytics.svg",
        url: "https://firebase.flutter.dev/docs/analytics/overview/",
      },
    ],
  },
  {
    type: "Design & Collaboration",
    data: [
      { name: "Figma", image: "/figma.svg", url: "https://www.figma.com/" },
      { name: "Sketch", image: "/sketch.svg", url: "https://www.sketch.com/" },
      {
        name: "Notion",
        image: "/notion.svg",
        url: "https://www.notion.so/",
        mono: true,
      },
      { name: "Jira", image: "/jira.svg", url: "https://jira.atlassian.com/" },
      { name: "Slack", image: "/slack.svg", url: "https://www.slack.com/" },
    ],
  },
];
