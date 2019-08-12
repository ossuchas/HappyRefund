
import { Ac01viewPageModule } from './ac01view-page.module';

describe('BlankPageModule', () => {
    let ac01viewPageModule: Ac01viewPageModule;

    beforeEach(() => {
        ac01viewPageModule = new Ac01viewPageModule();
    });

    it('should create an instance', () => {
        expect(ac01viewPageModule).toBeTruthy();
    });
});
