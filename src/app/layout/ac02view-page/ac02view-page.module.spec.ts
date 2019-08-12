
import { Ac02viewPageModule } from './ac02view-page.module';

describe('BlankPageModule', () => {
    let ac02viewPageModule: Ac02viewPageModule;

    beforeEach(() => {
        ac02viewPageModule = new Ac02viewPageModule();
    });

    it('should create an instance', () => {
        expect(ac02viewPageModule).toBeTruthy();
    });
});
