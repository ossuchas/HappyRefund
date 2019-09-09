
import { Aa00viewPageModule } from './aa00view-page.module';

describe('BlankPageModule', () => {
    let ac01viewPageModule: Aa00viewPageModule;

    beforeEach(() => {
        ac01viewPageModule = new Aa00viewPageModule();
    });

    it('should create an instance', () => {
        expect(ac01viewPageModule).toBeTruthy();
    });
});
