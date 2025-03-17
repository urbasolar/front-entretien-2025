// eslint-disable @typescript-eslint/no-explicit-any
declare global {
    interface Window {
      env: typeof Environnement
    }
  }
  
  declare const window: Window &
    typeof globalThis & {
       env: any
  }