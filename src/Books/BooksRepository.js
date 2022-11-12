import HttpGateway from "../Shared/HttpGateway";
class BooksRepository {
  constructor() {
    this.httpGateway = new HttpGateway();
  }

  getBooks = async () => {
    const booksDto = await this.httpGateway.get(
      "https://api.logicroom.co/api/tommy.han.cs@gmail.com/books"
    );
    const booksPm = booksDto.result.map((bookDto) => {
      return { name: bookDto.name };
    });
    return booksPm;
  };

  createBook = async () => {
    const response = await this.httpGateway.post(
      "https://api.logicroom.co/api/tommy.han.cs@gmail.com/books"
    );
    if (response.success) {
      console.log("book was successfully created !!!");
    } else {
      console.log("book failed to be created !!!");
    }
  };
}

const booksRepository = new BooksRepository();
export default booksRepository;
