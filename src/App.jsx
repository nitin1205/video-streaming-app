import { Routes, Route } from 'react-router-dom';

import StreamCreate from './components/streams/StreamCreate';
import StreamDelete from './components/streams/StreamDelete';
import StreamEdit from './components/streams/StreamEdit';
import StreamList from './components/streams/StreamList';
import StreamShow from './components/streams/StreamShow';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<StreamList />} />
      <Route path="/streams/new" element={<StreamCreate />} />
      <Route path="/streams/edit" element={<StreamEdit />} />
      <Route path="/streams/delete" element={<StreamDelete />} />
      <Route path="/streams/show" element={<StreamShow />} />
    </Routes>
  )
}

export default App
