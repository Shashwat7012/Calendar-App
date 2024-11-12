import React from 'react';

type Event = {
  id: number;
  title: string;
  date: string;
  description: string;
};

interface EventCardProps {
  event: Event;
  onEdit: (event: Event) => void;
  onDelete: (id: number) => void;
  editingEvent: Event | null;
  onSave: (event: Event) => void;
  onCancelEdit: () => void;
  setEditingEvent: React.Dispatch<React.SetStateAction<Event | null>>;
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  onEdit,
  onDelete,
  editingEvent,
  onSave,
  onCancelEdit,
  setEditingEvent,
}) => {
  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleString(); 
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-green-100 to-pink-100 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 relative">
     
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{event.title}</h3>

      
      <p className="text-sm text-gray-600 mb-4">{formatDate(event.date)}</p>

      
      {editingEvent && editingEvent.id === event.id ? (
        <div className="mt-4 p-6 bg-white rounded-lg shadow-xl border border-gray-200 space-y-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Edit Event</h4>
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white placeholder-gray-400"
            type="text"
            value={editingEvent.title}
            onChange={(e) => setEditingEvent({ ...editingEvent, title: e.target.value })}
            placeholder="Edit Event Title"
          />
          <textarea
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white placeholder-gray-400"
            value={editingEvent.description}
            onChange={(e) => setEditingEvent({ ...editingEvent, description: e.target.value })}
            placeholder="Edit Event Description"
          ></textarea>
          <div className="flex justify-between mt-4 space-x-4">
            <button
              className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200"
              onClick={() => onSave(editingEvent)}
            >
              Save
            </button>
            <button
              className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors duration-200"
              onClick={onCancelEdit}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <p className="mt-4 text-gray-700">{event.description}</p>
      )}

      
      <div className="absolute top-4 right-4 flex space-x-2">
        {!editingEvent && (
          <button
            className="px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors duration-200"
            onClick={() => onEdit(event)}
          >
            Edit
          </button>
        )}
        <button
          className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors duration-200"
          onClick={() => onDelete(event.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EventCard;
