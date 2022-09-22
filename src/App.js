import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "ju is the best", id: 1 },
    { title: "hey Maisy", id: 2 },
    { title: "Zzong is the best", id: 3 },
  ]);

  console.log(showModal);

  //Filter method에서 true면 내버려두고 false면 filter해줌..

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const subtitle = "whatever..";
  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle} />
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      {/* <Modal>
        <h2>10% Off Coupon</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}
      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>hello blahblah</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            corporis quas officia reiciendis nobis saepe excepturi tempore, quod
            pariatur voluptatibus labore vel delectus animi, ipsum hic rerum
            voluptatum quisquam earum.
          </p>
          <a href="#" className="href">
            find out more...
          </a>
        </Modal>
      )}
      <button onClick={() => setShowModal(true)}>open</button>
    </div>
  );
}

export default App;
