import { PassportRoutingModule } from './passport-routing.module';

describe('PassportRoutingModule', () => {
  let passportRoutingModule: PassportRoutingModule;

  beforeEach(() => {
    passportRoutingModule = new PassportRoutingModule();
  });

  it('should create an instance', () => {
    expect(passportRoutingModule).toBeTruthy();
  });
});
