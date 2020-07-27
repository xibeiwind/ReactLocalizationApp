import { IAppStrings } from "../IAppStrings";

export const chinese: IAppStrings = {
  appName: '测试程序',
  language: '中文',
  createSuccess: '创建成功',
  createFail: '创建失败',
  projectName: '项目名称',
  error:{
    nameDuplicate: '名称重复',
  },
  projectCreatedMessage(name) {
    return `[${name}]项目创建成功!`;
  },
  projectCreateFailMessage(name, error) {
    return `[${name}]项目创建出错: "${error}"`;
  }
}