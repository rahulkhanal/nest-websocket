import { Test, TestingModule } from '@nestjs/testing';
import { DemoGateway } from './demo.gateway';
import { DemoService } from './demo.service';

describe('DemoGateway', () => {
  let gateway: DemoGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemoGateway, DemoService],
    }).compile();

    gateway = module.get<DemoGateway>(DemoGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
