import React, { useState } from "react";
import "./App.css";
import { DisplayNotes, Div, Form, Spacer, Grid, Row, Col } from "./components/";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import "./customPianoStyles.css";
import {
  ResponsiveContext,
  Box,
  Text,
  Select,
  Grommet,
  grommet
} from "grommet";

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
  const [key, setKey] = useState("Key");
  const [chord, setChord] = useState("Chord");
  //const [value, setValue] = React.useState("Key");

  // const handleKeyChange = event => {
  //   setKey(event.target.value);
  // };

  // const handleChordChange = event => {
  //   setChord(event.target.value);
  // };

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Grommet theme={grommet} full>
          <Box flex pad="xlarge" className="App">
            <Box direction="row-responsive" gap="medium" justify="center">
              <Select
                options={[
                  "C",
                  "Db",
                  "D",
                  "Eb",
                  "E",
                  "F",
                  "Gb",
                  "G",
                  "Ab",
                  "A",
                  "Bb",
                  "B"
                ]}
                value={key}
                onChange={({ option }) => setKey(option)}
              />
              <Select
                options={[
                  "Major",
                  "Minor",
                  "Relative Minor",
                  "7",
                  "maj7",
                  "m7",
                  "4th Chord",
                  "5th Chord"
                ]}
                value={chord}
                onChange={({ option }) => setChord(option)}
              />
            </Box>
            <DisplayNotes
              notesArray={notesArray}
              selectedKey={key}
              selectedChord={chord}
            />
          </Box>
        </Grommet>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default App;

{
  /* <Select onChange={handleKeyChange}>
            <option defaultValue>Key</option>
            {notesArray.map(note => (
              <option key={note.note} value={note.note}>
                {note.note}
              </option>
            ))}
          </Select> */
}

{
  /* <select onChange={handleChordChange}>
            <option defaultValue>Chord</option>
            {chords.map(chord => (
              <option key={chord} value={chord}>
                {chord}
              </option>
            ))}
          </select> */
}
