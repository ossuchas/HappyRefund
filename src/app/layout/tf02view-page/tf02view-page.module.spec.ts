
import { Tf02viewPageModule } from './tf02view-page.module';

describe('BlankPageModule', () => {
    let tf02viewPageModule: Tf02viewPageModule;

    beforeEach(() => {
        tf02viewPageModule = new Tf02viewPageModule();
    });

    it('should create an instance', () => {
        expect(tf02viewPageModule).toBeTruthy();
    });
});
