import React, { useState } from 'react';
import { PlusCircle, Trash2, Edit, Check, X } from 'lucide-react';
import { Todo } from './types/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    const todo: Todo = {
      id: crypto.randomUUID(),
      text: newTodo.trim(),
      completed: false,
      createdAt: new Date(),
    };
    
    setTodos([...todos, todo]);
    setNewTodo('');
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const startEditing = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id: string) => {
    if (!editText.trim()) return;
    
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: editText.trim() } : todo
    ));
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Todo List
        </h1>

        <form onSubmit={addTodo} className="mb-8 flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            <PlusCircle size={20} />
            Add
          </button>
        </form>

        <div className="space-y-3">
          {todos.map(todo => (
            <div
              key={todo.id}
              className="bg-white rounded-lg shadow-sm p-4 flex items-center gap-3"
            >
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                  ${todo.completed 
                    ? 'bg-green-500 border-green-500' 
                    : 'border-gray-300'}`}
              >
                {todo.completed && <Check size={14} className="text-white" />}
              </button>

              {editingId === todo.id ? (
                <div className="flex-1 flex gap-2">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 px-2 py-1 border rounded"
                    autoFocus
                  />
                  <button
                    onClick={() => saveEdit(todo.id)}
                    className="text-green-600 hover:text-green-700"
                  >
                    <Check size={20} />
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="text-red-600 hover:text-red-700"
                  >
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <>
                  <span
                    className={`flex-1 ${
                      todo.completed ? 'text-gray-400 line-through' : ''
                    }`}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => startEditing(todo)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 size={20} />
                  </button>
                </>
              )}
            </div>
          ))}
          
          {todos.length === 0 && (
            <div className="text-center text-gray-500 py-8">
              No todos yet. Add one above!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;