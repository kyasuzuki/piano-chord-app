import React, { useState, useEffect } from "react";
import { PianoContainer } from "./PianoContainer";
import { ABCNotation } from "./ABCNotation";
import { NotesLabel, Spacer } from "./styles";

export const DisplayNotes = ({ selectedKey, selectedChord, notesArray }) => {
  const [chordNotes, setChordNotes] = useState([]);
  const [rootChordNotes, setRootChordNotes] = useState([]);

  useEffect(() => {
    for (var i = 0; i < notesArray.length; i++) {
      if (selectedKey === "Key" || selectedChord === "Chord") {
        setChordNotes([]);
        setRootChordNotes([]);
      } else if (notesArray[i].note === selectedKey) {
        if (selectedChord === "Major") {
          let selectedChordNotes = [
            notesArray[i],
            {
              note: notesArray[(i + 4) % notesArray.length].note,
              midi: notesArray[i].midi + 4
            },
            {
              note: notesArray[(i + 7) % notesArray.length].note,
              midi: notesArray[i].midi + 7
            }
          ];
          setRootChordNotes(selectedChordNotes);
          setChordNotes(selectedChordNotes);
        } else if (selectedChord === "Minor") {
          let selectedChordNotes = [
            notesArray[i],
            {
              note: notesArray[(i + 3) % notesArray.length].note,
              midi: notesArray[i].midi + 3
            },
            {
              note: notesArray[(i + 7) % notesArray.length].note,
              midi: notesArray[i].midi + 7
            }
          ];
          setRootChordNotes(selectedChordNotes);
          setChordNotes(selectedChordNotes);
        } else if (selectedChord === "Relative Minor") {
          let selectedChordNotes = [
            {
              note: notesArray[(i + 9) % notesArray.length].note,
              midi: notesArray[i].midi + 9
            },
            {
              note: notesArray[(i + 12) % notesArray.length].note,
              midi: notesArray[i].midi + 12
            },
            {
              note: notesArray[(i + 16) % notesArray.length].note,
              midi: notesArray[i].midi + 16
            }
          ];
          setRootChordNotes(selectedChordNotes);
          setChordNotes(selectedChordNotes);
        } else if (selectedChord === "7") {
          let selectedChordNotes = [
            notesArray[i],
            {
              note: notesArray[(i + 4) % notesArray.length].note,
              midi: notesArray[i].midi + 4
            },
            {
              note: notesArray[(i + 7) % notesArray.length].note,
              midi: notesArray[i].midi + 7
            },
            {
              note: notesArray[(i + 10) % notesArray.length].note,
              midi: notesArray[i].midi + 10
            }
          ];
          setRootChordNotes(selectedChordNotes);
          setChordNotes(selectedChordNotes);
        } else if (selectedChord === "maj7") {
          let selectedChordNotes = [
            notesArray[i],
            {
              note: notesArray[(i + 4) % notesArray.length].note,
              midi: notesArray[i].midi + 4
            },
            {
              note: notesArray[(i + 7) % notesArray.length].note,
              midi: notesArray[i].midi + 7
            },
            {
              note: notesArray[(i + 11) % notesArray.length].note,
              midi: notesArray[i].midi + 11
            }
          ];
          setRootChordNotes(selectedChordNotes);
          setChordNotes(selectedChordNotes);
        } else if (selectedChord === "m7") {
          let selectedChordNotes = [
            notesArray[i],
            {
              note: notesArray[(i + 3) % notesArray.length].note,
              midi: notesArray[i].midi + 3
            },
            {
              note: notesArray[(i + 7) % notesArray.length].note,
              midi: notesArray[i].midi + 7
            },
            {
              note: notesArray[(i + 10) % notesArray.length].note,
              midi: notesArray[i].midi + 10
            }
          ];
          setRootChordNotes(selectedChordNotes);
          setChordNotes(selectedChordNotes);
        } else if (selectedChord === "4th Chord") {
          let selectedChordNotes = [
            {
              note: notesArray[(i + 5) % notesArray.length].note,
              midi: notesArray[i].midi + 5
            },
            {
              note: notesArray[(i + 9) % notesArray.length].note,
              midi: notesArray[i].midi + 9
            },
            {
              note: notesArray[(i + 12) % notesArray.length].note,
              midi: notesArray[i].midi + 12
            }
          ];
          setRootChordNotes(selectedChordNotes);
          setChordNotes(selectedChordNotes);
        } else if (selectedChord === "5th Chord") {
          let selectedChordNotes = [
            {
              note: notesArray[(i + 7) % notesArray.length].note,
              midi: notesArray[i].midi + 7
            },
            {
              note: notesArray[(i + 11) % notesArray.length].note,
              midi: notesArray[i].midi + 11
            },
            {
              note: notesArray[(i + 14) % notesArray.length].note,
              midi: notesArray[i].midi + 14
            }
          ];
          setRootChordNotes(selectedChordNotes);
          setChordNotes(selectedChordNotes);
        }
      }
    }
  }, [notesArray, selectedChord, selectedKey]);

  const invertNotes = () => {
    //console.log(chordNotes[0].midi, chordNotes[1].midi, chordNotes[2].midi);
    //console.log(rootChordNotes);
    if (chordNotes[0].midi + 12 > 83) {
      console.log("here");
      console.log(chordNotes[0].midi + 12);
      setChordNotes(rootChordNotes);
    } else if (chordNotes.length === 3) {
      setChordNotes([
        chordNotes[1],
        chordNotes[2],
        { note: chordNotes[0].note, midi: chordNotes[0].midi + 12 }
      ]);
    } else if (chordNotes.length === 4) {
      setChordNotes([
        chordNotes[1],
        chordNotes[2],
        chordNotes[3],
        { note: chordNotes[0].note, midi: chordNotes[0].midi + 12 }
      ]);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row"
        }}
      >
        <div style={{ marginRight: "10px" }}>Notes:</div>
        {chordNotes.map(chordNote => (
          <div style={{ marginRight: "10px" }}>{chordNote.note}</div>
        ))}
        <div>
          <button onClick={invertNotes}>Invert Notes</button>
        </div>
      </div>
      <Spacer></Spacer>
      <PianoContainer chordNotes={chordNotes} />
      <ABCNotation chordNotes={chordNotes} />
    </div>
  );
};
