import React, { useState, useEffect } from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import SoundfontProvider from "./SoundfontProvider";

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";

export const PianoContainer = ({ chordNotes }) => {
  const noteRange = {
    first: MidiNumbers.fromNote("c3"),
    last: MidiNumbers.fromNote("b5")
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
    <SoundfontProvider
      instrumentName="acoustic_grand_piano"
      audioContext={audioContext}
      hostname={soundfontHostname}
      render={({ isLoading, playNote, stopNote }) => (
        <Piano
          noteRange={noteRange}
          width={600}
          playNote={playNote}
          stopNote={stopNote}
          disabled={isLoading}
          renderNoteLabel={renderNoteLabelOff}
          activeNotes={activeNotes}
          //keyboardShortcuts={keyboardShortcuts}
        />
      )}
    />
  );
};
