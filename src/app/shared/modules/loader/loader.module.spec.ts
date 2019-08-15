import { LoaderModule } from './loader.module';


describe('PageHeaderModule', () => {
  let loaderModule: LoaderModule;

  beforeEach(() => {
    loaderModule = new LoaderModule();
  });

  it('should create an instance', () => {
    expect(loaderModule).toBeTruthy();
  });
});
