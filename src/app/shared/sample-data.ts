import { Project } from "./project.interface";

export const PROJECTS_LIST: Project[] = [
  {
    cover: 'https://lisa-copeland-assets.s3.us-west-2.amazonaws.com/draindata.png',
    title: 'Draindata',
    summary: 'A mobile and Web app inspired by my own breast cancer journey for use in tracking JP drain data.',
    tags: ['Vue', 'Healthcare', 'Dotnet', 'Mobile', 'AWS', 'DynamoDB']
  },
  {
    title: 'Democracylive Email Center',
    summary: 'An app used by voting offices to create and monitor email campaigns.',
    tags: ['Angular', 'Node', 'Sendgrid', 'Responsive', 'Websockets']
  },
  {
    cover: 'https://lisa-copeland-assets.s3.us-west-2.amazonaws.com/LIDO-logo.PNG',
    title: 'Lido.io',
    summary: 'System used by pharmaceutical companies to administrate drug trials.',
    tags: ['Angular', 'Dotnet', 'Healthcare', 'Okta', 'Azure', 'Azure SQL']
  }
];
