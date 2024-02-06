export const delay = (ms: number = 1000) => {
  return new Promise((resolve: any) => setTimeout(resolve, ms));
};
