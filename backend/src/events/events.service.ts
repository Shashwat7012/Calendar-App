import { Injectable } from '@nestjs/common';
import { Event } from './event.interface';  
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  private events: Event[] = [];
  private idCounter = 1;

  create(createEventDto: CreateEventDto): Event {
    const newEvent = { ...createEventDto, id: this.idCounter++ };
    this.events.push(newEvent);
    return newEvent;
  }

  findAll(): Event[] {
    return this.events;
  }

  findOne(id: number): Event | undefined {
    return this.events.find(event => event.id === id);
  }

  update(id: number, updatedEvent: UpdateEventDto): Event | undefined {
    const event = this.findOne(id);
    if (event) {
      Object.assign(event, updatedEvent);
    }
    return event;
  }

  delete(id: number): boolean {
    const index = this.events.findIndex(event => event.id === id);
    if (index !== -1) {
      this.events.splice(index, 1);
      return true;
    }
    return false;
  }
}
