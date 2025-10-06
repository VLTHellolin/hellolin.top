declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly GIT_BRANCH: string;
      readonly GIT_COMMIT_HASH: string;
      readonly GIT_COMMIT_URL: string;
      readonly NEXT_VERSION: string;
    }
  }
}

export {};
