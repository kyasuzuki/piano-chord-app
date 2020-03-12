import React, { useState, useEffect } from "react";
import { PianoContainer } from "./PianoContainer";
import { NotesLabel, Spacer } from "./styles";

export const DisplayNotes = ({ selectedKey, selectedChord, notesArray }) => {
  const [chordNotes, setChordNotes] = useState([]);
  const [rootChordNotes, setRootChordNotes] = useState([]);

  useEffect(() => {
    for (var i = 0; i < notesArray.length; i++) {
      if (selectedKey === "Key" || selectedChord === "Chord") {
        setChordNotes([]);
        setRootChordNotes([]);
      }
      if (notesArray[i].note === selectedKey) {
        if (selectedChord === "Major") {
          setChordNotes([
            notesArray[i],
            {
              note: notesArray[(i + 4) % notesArray.length].note,
              midi: notesArray[i].midi + 4
            },
            {
              note: notesArray[(i + 7) % notesArray.length].note,
              midi: notesArray[i].midi + 7
            }
          ]);
          setRootChordNotes([
            notesArray[i],
            {
              note: notesArray[(i + 4) % notesArray.length].note,
              midi: notesArray[i].midi + 4
            },
            {
              note: notesArray[(i + 7) % notesArray.length].note,
              midi: notesArray[i].midi + 7
            }
          ]);
        } else if (selectedChord === "Minor") {
          setChordNotes([
            notesArray[i],
            {
              note: notesArray[(i + 3) % notesArray.length].note,
              midi: notesArray[i].midi + 3
            },
            {
              note: notesArray[(i + 7) % notesArray.length].note,
              midi: notesArray[i].midi + 7
            }
          ]);
          setRootChordNotes([
            notesArray[i],
            {
              note: notesArray[(i + 3) % notesArray.length].note,
              midi: notesArray[i].midi + 3
            },
            {
              note: notesArray[(i + 7) % notesArray.length].note,
              midi: notesArray[i].midi + 7
            }
          ]);
        } else if (selectedChord === "Relative Minor") {
          setChordNotes([
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
          ]);
          setRootChordNotes([
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
          ]);
        } else if (selectedChord === "7") {
          setChordNotes([
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
          ]);
          setRootChordNotes([
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
          ]);
        } else if (selectedChord === "maj7") {
          setChordNotes([
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
          ]);
          setRootChordNotes([
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
          ]);
        } else if (selectedChord === "m7") {
          setChordNotes([
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
          ]);
          setRootChordNotes([
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
          ]);
        } else if (selectedChord === "4th Chord") {
          setChordNotes([
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
          ]);
          setRootChordNotes([
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
          ]);
        } else if (selectedChord === "5th Chord") {
          setChordNotes([
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
            // notesArray[(i + 7) % notesArray.length],
            // notesArray[(i + 11) % notesArray.length],
            // notesArray[(i + 2) % notesArray.length]
          ]);
        }
        setRootChordNotes([
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
          // notesArray[(i + 7) % notesArray.length],
          // notesArray[(i + 11) % notesArray.length],
          // notesArray[(i + 2) % notesArray.length]
        ]);
      }
    }
  }, [notesArray, selectedChord, selectedKey]);

  const invertNotes = () => {
    if (chordNotes[0].midi + 12 > 84) {
      // console.log("here");
      // console.log(chordNotes[0].midi + 12);
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
    </div>
  );
};
