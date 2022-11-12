export default class HttpGateway {
  load = async (path) => {
    const response = await fetch(path);
    return response.json();
  };
}
