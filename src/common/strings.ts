import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";
import { english } from "./localization/en-us";
import { chinese } from "./localization/zh-cn";
import { IAppStrings } from "./IAppStrings";
interface IStrings extends LocalizedStringsMethods, IAppStrings {


}

export const strings: IStrings = new LocalizedStrings({
  en: english,
  cn: chinese,
});