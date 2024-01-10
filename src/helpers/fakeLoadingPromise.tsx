export default function fakeLoadingPromise(timer: number = 1000) {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve();
    }, timer);
  });
}
