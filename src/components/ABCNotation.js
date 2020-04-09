import React, { useState, useEffect } from "react";
import abcjs from "abcjs";
import { Notation } from "react-abc";
import {
  Box,
  Button,
  Text,
  ResponsiveContext,
  Grommet,
  grommet
} from "grommet";

const notesABCArray = [
  { abc: "C", midi: 48 },
  { abc: "_D", midi: 49 },
  { abc: "D", midi: 50 },
  { abc: "_E", midi: 51 },
  { abc: "E", midi: 52 },
  { abc: "F", midi: 53 },
  { abc: "_G", midi: 54 },
  { abc: "G", midi: 55 },
  { abc: "_A", midi: 56 },
  { abc: "A", midi: 57 },
  { abc: "_B", midi: 58 },
  { abc: "B", midi: 59 },
  { abc: "c", midi: 60 },
  { abc: "_d", midi: 61 },
  { abc: "d", midi: 62 },
  { abc: "_e", midi: 63 },
  { abc: "e", midi: 64 },
  { abc: "f", midi: 65 },
  { abc: "_g", midi: 66 },
  { abc: "g", midi: 67 },
  { abc: "_a", midi: 68 },
  { abc: "a", midi: 69 },
  { abc: "_b", midi: 70 },
  { abc: "b", midi: 71 },
  { abc: "c'", midi: 72 },
  { abc: "_d'", midi: 73 },
  { abc: "d'", midi: 74 },
  { abc: "_e'", midi: 75 },
  { abc: "e'", midi: 76 },
  { abc: "f'", midi: 77 },
  { abc: "_g'", midi: 78 },
  { abc: "g'", midi: 79 },
  { abc: "_a'", midi: 80 },
  { abc: "a'", midi: 81 },
  { abc: "_b'", midi: 82 },
  { abc: "b'", midi: 83 }
];

export const ABCNotation = ({ chordNotes }) => {
  const [chordNotesAbc, setChordNotesAbc] = useState("");
  console.log(chordNotes);

  useEffect(() => {
    let fullABCString = "";
    for (var i = 0; i < chordNotes.length; i++) {
      for (var j = 0; j < notesABCArray.length; j++) {
        if (chordNotes[i].midi === notesABCArray[j].midi) {
          let ABCString = notesABCArray[j].abc;
          console.log(ABCString);
          fullABCString += ABCString;
          console.log(fullABCString);

          console.log("chordNotesAbc", chordNotesAbc);
        }
      }
    }
    setChordNotesAbc(fullABCString);
    console.log(chordNotesAbc);
  }, [chordNotes]);

  return (
    <Box>
      <Notation notation={chordNotesAbc} />
    </Box>
  );
};
