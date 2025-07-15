import { readFileSync } from "fs";
export interface IConfig{
    region:string,
    accountId:string,
}

const CONFIG: IConfig = JSON.parse(
  readFileSync(
    `environments/${process.env.LOCAL_DEPLOY !== "true" ? "" : "local."}${process.env.ENVIRONMENT
    }.config.json`,
    "utf-8"
  )
);

export default CONFIG;