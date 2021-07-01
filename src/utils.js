/* Mock for http request */
export function getConfigsMock(
  success = true,
  timeout = 500,
  data = { data: "empty" }
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
