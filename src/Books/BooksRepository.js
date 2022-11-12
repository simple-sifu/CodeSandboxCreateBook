import HttpGateway from "../Shared/HttpGateway";
class BooksRepository {
  constructor() {
    this.httpGateway = new HttpGateway();
  }

  getBooks = async () => {
    const booksDto = await this.httpGateway.load(
      "https://api.logicroom.co/api/tommy.han.cs@gmail.com/books"
    );
    const booksPm = booksDto.result.map((bookDto) => {
      return { name: bookDto.name };
    });
    return booksPm;
  };
}

const booksRepository = new BooksRepository();
export default booksRepository;
