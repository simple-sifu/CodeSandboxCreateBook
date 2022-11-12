export default class HttpGateway {
  get = async (path) => {
    const response = await fetch(path);
    return response.json();
  };

  post = async (path) => {
    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify({
        name: "my private book",
        author: "Tommy Han",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  };
}
