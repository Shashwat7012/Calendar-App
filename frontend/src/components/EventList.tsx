import React, { useState } from 'react';
import EventCard from './EventCard';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
}

interface EventListProps {
  events: Event[];
  handleEditEvent: (event: Event) => void;
  handleDeleteEvent: (id: number) => void;
  editingEvent: Event | null;
  handleSaveEvent: () => void;
  handleCancelEdit: () => void;
  setEditingEvent: React.Dispatch<React.SetStateAction<Event | null>>;
}

const EventList: React.FC<EventListProps> = ({
  events,
  handleEditEvent,
  handleDeleteEvent,
  editingEvent,
  handleSaveEvent,
  handleCancelEdit,
  setEditingEvent,
}) => {
  const [searchQuery, setSearchQuery] = useState('');


  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded-l"
        />
        <button
          onClick={() => setSearchQuery('')}
          className="p-2 bg-gray-200 rounded-r"
        >
          Clear
        </button>
      </div>

     
      {filteredEvents.length === 0 ? (
        <p>No events found</p> 
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onEdit={handleEditEvent}
              onDelete={handleDeleteEvent}
              editingEvent={editingEvent}
              onSave={handleSaveEvent}
              onCancelEdit={handleCancelEdit}
              setEditingEvent={setEditingEvent}
            />
          ))}
        </div>
      )}

      
      {events.length === 0 && searchQuery === '' && (
        <div>Please add events</div>
      )}
    </div>
  );
};

export default EventList;
