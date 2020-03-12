import React, { useState } from "react";
import "./App.css";
import { DisplayNotes, Div, Select, Form, Spacer } from "./components/";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import "./customPianoStyles.css";

//const notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
const notesArray = [
  { note: "C", midi: 48 },
  { note: "Db", midi: 49 },
  { note: "D", midi: 50 },
  { note: "Eb", midi: 51 },
  { note: "E", midi: 52 },
  { note: "F", midi: 53 },
  { note: "Gb", midi: 54 },
  { note: "G", midi: 55 },
  { note: "Ab", midi: 56 },
  { note: "A", midi: 57 },
  { note: "Bb", midi: 58 },
  { note: "B", midi: 59 }
];

const chords = [
  "Major",
  "Minor",
  "Relative Minor",
  "7",
  "maj7",
  "m7",
  "4th Chord",
  "5th Chord"
];

const App = () => {
  const [key, setKey] = useState(undefined);
  const [chord, setChord] = useState(undefined);

  const handleKeyChange = event => {
    setKey(event.target.value);
  };

  const handleChordChange = event => {
    setChord(event.target.value);
  };

  return (
    <Div>
      <Form>
        <Select onChange={handleKeyChange}>
          <option defaultValue>Key</option>
          {notesArray.map(note => (
            <option key={note.note} value={note.note}>
              {note.note}
            </option>
          ))}
        </Select>
        <Spacer></Spacer>
        <Select onChange={handleChordChange}>
          <option defaultValue>Chord</option>
          {chords.map(chord => (
            <option key={chord} value={chord}>
              {chord}
            </option>
          ))}
        </Select>
      </Form>
      <Spacer></Spacer>
      <DisplayNotes
        notesArray={notesArray}
        selectedKey={key}
        selectedChord={chord}
      />
    </Div>
  );
};

export default App;
