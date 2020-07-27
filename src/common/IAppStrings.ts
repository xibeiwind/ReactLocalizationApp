export interface IAppStrings {
  appName: string;
  language: string;
  createSuccess: string;
  createFail: string;
  projectName: string;
  error:
  {
    nameDuplicate: string;
  },

  projectCreatedMessage(name: string): string;
  projectCreateFailMessage(name: string, error: string): string;
}
