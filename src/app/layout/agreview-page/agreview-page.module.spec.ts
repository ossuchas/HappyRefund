
import { AgreviewPageModule } from './agreview-page.module';

describe('BlankPageModule', () => {
    let agreviewPageModule: AgreviewPageModule;

    beforeEach(() => {
        agreviewPageModule = new AgreviewPageModule();
    });

    it('should create an instance', () => {
        expect(agreviewPageModule).toBeTruthy();
    });
});
