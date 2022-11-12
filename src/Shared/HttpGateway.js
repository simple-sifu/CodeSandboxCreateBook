export default class HttpGateway {
  get = async (path) => {
    const response = await fetch(path);
    return response.json();
  };

  post = async (path) => {
    const response = await fetch(path, {
      method: "POST",
      body: {
        name: "my private book",
        author: "Tommy Han",
      },
    });
    return response.json();
  };
}
