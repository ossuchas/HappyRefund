
import { Ac03viewPageModule } from './ac03view-page.module';

describe('BlankPageModule', () => {
    let ac03viewPageModule: Ac03viewPageModule;

    beforeEach(() => {
        ac03viewPageModule = new Ac03viewPageModule();
    });

    it('should create an instance', () => {
        expect(ac03viewPageModule).toBeTruthy();
    });
});
