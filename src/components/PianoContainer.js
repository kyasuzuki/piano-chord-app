import React, { useState, useEffect } from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";

export const PianoContainer = ({ chordNotes }) => {
  const noteRange = {
    first: MidiNumbers.fromNote("c3"),
    last: MidiNumbers.fromNote("c6")
  };

  const activeNotes = chordNotes.map(chordNote => chordNote.midi);

  // const keyboardShortcuts = KeyboardShortcuts.create({
  //   firstNote: noteRange.first,
  //   lastNote: noteRange.last,
  //   keyboardConfig: KeyboardShortcuts.HOME_ROW
  // });

  const playNote = midiNumber => {};

  const stopNote = midiNumber => {};

  const renderNoteLabelOff = ({ midiNumber, isActive, isAccidental }) => {};

  return (
    <Piano
      noteRange={noteRange}
      width={600}
      playNote={playNote}
      stopNote={stopNote}
      // disabled={isLoading}
      renderNoteLabel={renderNoteLabelOff}
      activeNotes={activeNotes}
      //keyboardShortcuts={keyboardShortcuts}
    />
  );
};
