import booksRepository from "./BooksRepository";

export default class BooksPresenter {
  load = async () => {
    const booksPm = await booksRepository.getBooks();
    const booksVm = booksPm.map((bookPm) => {
      return { visibleName: bookPm.name };
    });
    return booksVm;
  };

  createBook = async () => {
    await booksRepository.createBook();
  };
}
