import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './event.interface';  

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto): Event {  
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll(): Event[] {  
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Event {  
    return this.eventsService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto): Event {  
    return this.eventsService.update(Number(id), updateEventDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): boolean {
    return this.eventsService.delete(Number(id));
  }
}
