import "./App.css";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([
    { title: "ju is the best", id: 1 },
    { title: "hey Maisy", id: 2 },
    { title: "Zzong is the best", id: 3 },
  ]);

  //Filter method에서 true면 내버려두고 false면 filter해줌..

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };
  return (
    <div className="App">
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>
            {index} - {event.title}
          </h2>
          <button onClick={() => handleClick(event.id)}>Delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
