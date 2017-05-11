import { DataBindingAssignmentPage } from './app.po';

describe('data-binding-assignment App', () => {
  let page: DataBindingAssignmentPage;

  beforeEach(() => {
    page = new DataBindingAssignmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
