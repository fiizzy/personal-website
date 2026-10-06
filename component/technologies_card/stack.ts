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
      { name: "TypeScript", image: "/ts.svg", url: "https://www.typescriptlang.org/" },
      { name: "JavaScript", image: "/js.svg", url: "https://www.javascript.com/" },
      { name: "Dart", image: "/dart.svg", url: "https://dart.dev" },
      { name: "SQL", image: "/postgresql.svg", url: "https://www.postgresql.org/docs/current/sql.html" },
      { name: "Go", image: "/golang.svg", url: "https://go.dev/", mono: true },
    ],
  },
  {
    type: "Mobile",
    data: [
      { name: "React Native", image: "/react.svg", url: "https://reactnative.dev/" },
      { name: "Expo", image: "/expo.svg", url: "https://expo.dev/", mono: true },
      { name: "Redux Toolkit", image: "/redux.svg", url: "https://redux-toolkit.js.org/" },
      { name: "Flutter", image: "/flutter.svg", url: "https://flutter.dev" },
    ],
  },
  {
    type: "Web",
    data: [
      { name: "React", image: "/react.svg", url: "https://react.dev/" },
      { name: "Next.js", image: "/nextjs.svg", url: "https://nextjs.org/", mono: true },
    ],
  },
  {
    type: "Backend & Cloud",
    data: [
      { name: "Supabase", image: "/supabase.svg", url: "https://supabase.com" },
      { name: "PostgreSQL", image: "/postgresql.svg", url: "https://www.postgresql.org/" },
      { name: "Node.js", image: "/nodejs.svg", url: "https://nodejs.org/" },
      { name: "Firebase", image: "/firebase.svg", url: "https://firebase.google.com" },
      { name: "AWS Lambda, SNS & SQS", image: "/aws.png", url: "https://aws.amazon.com" },
      { name: "Docker", image: "/docker.svg", url: "https://www.docker.com/" },
    ],
  },
  {
    type: "Testing & Monitoring",
    data: [
      { name: "Jest", image: "/jest.svg", url: "https://jestjs.io/" },
      { name: "Cypress", image: "/cypress.svg", url: "https://www.cypress.io/" },
      { name: "Storybook", image: "/storybook.svg", url: "https://storybook.js.org/" },
      { name: "Sentry", image: "/sentry.svg", url: "https://sentry.io/", mono: true },
      { name: "Codecov", image: "/codecov.svg", url: "https://about.codecov.io/" },
    ],
  },
  {
    type: "CI/CD & Delivery",
    data: [
      { name: "GitHub Actions", image: "/githubactions.svg", url: "https://github.com/features/actions" },
      { name: "Fastlane", image: "/fastlane.svg", url: "https://fastlane.tools/" },
      { name: "Codemagic", image: "/code-magic.svg", url: "https://codemagic.io/" },
      { name: "Vercel", image: "/vercel.svg", url: "https://vercel.com/" },
      { name: "Netlify", image: "/netlify.svg", url: "https://www.netlify.com/" },
      { name: "CircleCI", image: "/circleci.png", url: "https://circleci.com/" },
      { name: "Jenkins", image: "/jenkins.jpeg", url: "https://jenkins.io" },
      { name: "Git", image: "/git.svg", url: "https://git-scm.com/" },
    ],
  },
  {
    type: "Product Analytics",
    data: [
      { name: "Amplitude", image: "/amplitude.svg", url: "https://amplitude.com/" },
      { name: "Firebase Analytics", image: "/google-analytics.svg", url: "https://firebase.google.com/docs/analytics" },
    ],
  },
  {
    type: "Design",
    data: [
      { name: "Figma", image: "/figma.svg", url: "https://www.figma.com/" },
      { name: "Sketch", image: "/sketch.svg", url: "https://www.sketch.com/" },
      { name: "Adobe XD", image: "/adobexd.svg", url: "https://helpx.adobe.com/support/xd.html" },
    ],
  },
  {
    type: "Collaboration",
    data: [
      { name: "Jira", image: "/jira.svg", url: "https://www.atlassian.com/software/jira" },
      { name: "Confluence", image: "/confluence.svg", url: "https://www.atlassian.com/software/confluence", mono: true },
      { name: "Notion", image: "/notion.svg", url: "https://www.notion.so/", mono: true },
      { name: "ClickUp", image: "/clickup.svg", url: "https://clickup.com/" },
      { name: "Slack", image: "/slack.svg", url: "https://slack.com/" },
    ],
  },
];
