import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
      >
        💬
      </button>

      
      {isOpen && (
        <div className="w-72 h-96 mt-4 bg-white rounded shadow-lg flex flex-col overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-2 font-semibold">
            Chatbot
          </div>
          <div className="flex-1 p-3 text-sm space-y-2 overflow-y-auto">
            <div className="bg-gray-100 p-2 rounded self-start max-w-[90%]">
              👋 Hi Harshitha! How can I help you?
            </div>
            <div className="text-xs text-gray-500">You can ask about maps, tables, filters, etc.</div>
          </div>
          <div className="p-2 border-t">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full border rounded px-2 py-1 text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
}
