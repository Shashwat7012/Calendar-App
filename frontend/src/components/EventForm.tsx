import React from 'react';

interface EventFormProps {
  newEvent: { title: string; date: string; description: string };
  setNewEvent: React.Dispatch<React.SetStateAction<{ title: string; date: string; description: string }>>;
  handleAddNewEvent: (e: React.FormEvent) => void;
}

const EventForm: React.FC<EventFormProps> = ({ newEvent, setNewEvent, handleAddNewEvent }) => {
  return (
    <form
      onSubmit={handleAddNewEvent}
      className="bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-100 p-12 rounded-2xl shadow-2xl max-w-lg mx-auto space-y-8 mb-24 transition-all duration-300"
    >
      
      <div className="mb-6">
        <label className="block text-gray-800 text-lg font-semibold mb-3">Event Title</label>
        <input
          type="text"
          className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white placeholder-gray-400 text-gray-800 text-lg shadow-sm hover:shadow-md transition-all duration-300"
          placeholder="Enter Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
      </div>

      
      <div className="mb-6">
        <label className="block text-gray-800 text-lg font-semibold mb-3">Event Date</label>
        <input
          type="datetime-local"
          className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white placeholder-gray-400 text-gray-800 text-lg shadow-sm hover:shadow-md transition-all duration-300"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
      </div>

      
      <div className="mb-6">
        <label className="block text-gray-800 text-lg font-semibold mb-3">Event Description</label>
        <textarea
          className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white placeholder-gray-400 text-gray-800 text-lg shadow-sm hover:shadow-md transition-all duration-300"
          placeholder="Describe your event"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        ></textarea>
      </div>

      
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl"
      >
        Add Event
      </button>
    </form>
  );
};

export default EventForm;
