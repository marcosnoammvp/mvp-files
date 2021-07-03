/* Mock for http request */
export function getConfigsMock(
  success = true,
  timeout = 500,
  data = {
    component: "Cairo",
    params: null,
    ui: {
      closeButton: {
        strategy: "top-left",
        color: "white",
      },
    },
  }
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(data);
      } else {
        reject({ message: "Error" });
      }
    }, timeout);
  });
}
