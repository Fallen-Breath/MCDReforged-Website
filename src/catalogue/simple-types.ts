import { AuthorSummary, LangDict } from "@/catalogue/meta-types";

export interface SimpleEverything {
  authors: AuthorSummary
  plugins: {
    [key: string]: SimplePlugin
  }
}

export interface SimplePlugin {
  id: string
  name: string
  version: string
  description: LangDict
  repos: string
  reposHome: string
  labels: string[]
  authors: string[]
  downloads: number
  recentUpdated: string | undefined
  recentUpdatedTimestamp: number
  latestRelease: SimpleRelease | undefined
}

export interface SimpleRelease {
  version: string
  assetName: string
  assetUrl: string
}
