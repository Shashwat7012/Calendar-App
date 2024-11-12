import { useState, useEffect } from 'react';
import EventForm from './components/EventForm';
import EventList from './components/EventList';

type Event = {
  id: number;
  title: string;
  date: string;
  description: string;
};

function App() {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    description: '',
  });
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);


  useEffect(() => {
    fetch('http://localhost:3000/events')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));

    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  const handleNotify = (event: Event) => {
    const eventTime = new Date(event.date).getTime();
    const now = Date.now();

    console.log('Event Time:', new Date(eventTime));
    console.log('Current Time:', new Date(now));
    console.log('Time to notification:', eventTime - now);

    if (eventTime > now) {
      const timeToNotification = eventTime - now;

      if (timeToNotification <= 5 * 60 * 1000) {
        console.log('Notification will be triggered soon!');

        setTimeout(() => {
          if (Notification.permission === 'granted') {
            const notification = new Notification('Event Reminder', {
              body: `${event.title} is starting soon!`,
            });

            notification.onclick = () => {
              console.log('Notification clicked');
              notification.close();
            };
          }
        }, timeToNotification);
      } else {
        console.log('Event is too far in the future, notification is not triggered.');
      }
    } else {
      console.log('Event time has already passed.');
    }
  };

  const handleEditEvent = (event: Event) => {
    setEditingEvent(event);
  };

  const handleSaveEvent = () => {
    if (editingEvent) {
      fetch(`http://localhost:3000/events/${editingEvent.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: editingEvent.title,
          description: editingEvent.description,
        }),
      })
        .then(() => {
          setEvents((prevEvents) =>
            prevEvents.map((event) =>
              event.id === editingEvent.id
                ? { ...event, title: editingEvent.title, description: editingEvent.description }
                : event
            )
          );
          setEditingEvent(null);
        })
        .catch((error) => console.error('Error saving event:', error));
    }
  };

  
  const handleDeleteEvent = (id: number) => {
    fetch(`http://localhost:3000/events/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setEvents(events.filter((event) => event.id !== id));
      })
      .catch((error) => console.error('Error deleting event:', error));
  };

  
  const handleAddNewEvent = (e: React.FormEvent) => {
    e.preventDefault();

    const newEventData = { ...newEvent, id: Date.now() };
    fetch('http://localhost:3000/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEventData),
    })
      .then((response) => response.json())
      .then((addedEvent) => {
        setEvents((prevEvents) => [...prevEvents, addedEvent]);
        setNewEvent({ title: '', date: '', description: '' });
      })
      .catch((error) => console.error('Error adding event:', error));
  };

  const handleCancelEdit = () => {
    setEditingEvent(null);
  };

 
  useEffect(() => {
    events.forEach(handleNotify);
  }, [events]);

  return (
    <div className="container mx-auto py-8">
      
      <nav className="bg-blue-600 text-white p-4 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="flex justify-center items-center max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold">Calendar App</h1>
        </div>
      </nav>

     
      <div className="mt-20"> 
        <EventForm
          newEvent={newEvent}
          setNewEvent={setNewEvent}
          handleAddNewEvent={handleAddNewEvent}
        />
        <EventList
          events={events}
          handleEditEvent={handleEditEvent}
          handleDeleteEvent={handleDeleteEvent}
          editingEvent={editingEvent}
          handleSaveEvent={handleSaveEvent}
          handleCancelEdit={handleCancelEdit}
          setEditingEvent={setEditingEvent}
        />
      </div>
    </div>
  );
}

export default App;
