import { MyFirstAppPage } from './app.po';

describe('my-first-app App', () => {
  let page: MyFirstAppPage;

  beforeEach(() => {
    page = new MyFirstAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
