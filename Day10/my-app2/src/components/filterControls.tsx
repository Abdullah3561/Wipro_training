import React from "react";

interface filterControlsProps {
  onFilter: () => void;
  onMap: () => void;
}

const filterControls: React.FC<filterControlsProps> = ({ onFilter, onMap }) => {
  return (
    <div>
      <button onClick={onFilter}>Show Even Numbers</button>
      <button onClick={onMap}>Double Numbers</button>
    </div>
  );
};

export default filterControls;
