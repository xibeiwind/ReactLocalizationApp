import { IAppStrings } from "../IAppStrings";

export const english: IAppStrings = {
  appName: 'test app',
  language: 'English',
  createSuccess: 'create success',
  createFail: 'create fail',
  projectName: 'project name',
  error: { nameDuplicate: 'name duplicate' },
  projectCreatedMessage(name) {
    return `project [${name}] created!`;
  },
  projectCreateFailMessage(name, error) {
    return `fail in project [${name}] create: "${error}"`;
  }
}