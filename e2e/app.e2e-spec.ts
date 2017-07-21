import { EditableTodoPage } from './app.po';

describe('editable-todo App', () => {
  let page: EditableTodoPage;

  beforeEach(() => {
    page = new EditableTodoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
