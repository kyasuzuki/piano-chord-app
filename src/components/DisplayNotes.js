import React, { useState, useEffect } from "react";
import { PianoContainer } from "./PianoContainer";
import { ABCNotation } from "./ABCNotation";
import { NotesLabel, Spacer, Grid, Row, Col } from "./styles";
import {
  Box,
  Button,
  Text,
  ResponsiveContext,
  Grommet,
  grommet
} from "grommet";

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
    <ResponsiveContext.Consumer>
      {size => (
        <Box>
          <Box
            direction="row"
            pad={size !== "small" ? "large" : "none"}
            margin={
              size !== "small" ? { vertical: "none" } : { vertical: "50px" }
            }
            justify="center"
          >
            <PianoContainer chordNotes={chordNotes} />
          </Box>
          <Box direction="row-responsive" justify="center" align="center">
            <Box>
              <Box direction="row" margin={{ left: "50px" }}>
                {chordNotes.map(chordNote => (
                  <Text size="large" margin={{ right: "20px" }}>
                    {chordNote.note}
                  </Text>
                ))}
              </Box>
              <Box width="small" overflow="hidden">
                <ABCNotation chordNotes={chordNotes} />
              </Box>
            </Box>
            <Box align="start">
              {chordNotes.length > 0 ? (
                <Button
                  primary
                  onClick={invertNotes}
                  label="Invert"
                  color="status-critical"
                />
              ) : (
                <Button
                  primary
                  onClick={invertNotes}
                  label="Invert"
                  color="status-critical"
                  style={{ visibility: "hidden" }}
                />
              )}
            </Box>
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};
