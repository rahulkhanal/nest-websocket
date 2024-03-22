import { Injectable } from '@nestjs/common';
import { CreateDemoDto } from './dto/create-demo.dto';
import { UpdateDemoDto } from './dto/update-demo.dto';

@Injectable()
export class DemoService {
  messages = [{
    id: 9,
    name: "Rahul Khanal"
  },
  {
    id: 9,
    name: "Rahul Khanal"
  }
];
  create(createDemoDto) {
    this.messages.push(createDemoDto); // Push the new data into the messages array
    return createDemoDto; 
  }

  findAll() {
    console.log("object");
    console.log(this.messages); 
    return this.messages;
  }

  findOne(id: number) {
    return `This action returns a #${id} demo`;
  }

  update(id: number, updateDemoDto: UpdateDemoDto) {
    return `This action updates a #${id} demo`;
  }

  remove(id: number) {
    return `This action removes a #${id} demo`;
  }
}
