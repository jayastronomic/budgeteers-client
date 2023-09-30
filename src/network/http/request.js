const API = "http://localhost:4000";

export const request = async (
  path,
  method = "GET",
  payload = null,
  headers = {}
) => {
  const options = {};
  options.method = method;
  options.headers = headers;
  if (method === "PUT" || method === "POST") {
    options.body = JSON.stringify(payload);
  }

  const response = await fetch(API + path, options);
  if (response.ok) {
    return await response.json();
  }
  return;
};
