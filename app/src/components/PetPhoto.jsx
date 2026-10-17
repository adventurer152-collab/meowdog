import { useEffect, useRef, useState } from 'react';
import { Icon } from '../ds';

// Photo frame that fills its parent. Shows `src` when given; otherwise an
// on-brand placeholder the user can click (or drop a file on) to preview a photo.
export function PetPhoto({ src, alt, placeholder, position }) {
  const [local, setLocal] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => () => local && URL.revokeObjectURL(local), [local]);

  const pick = (file) => {
    if (file && file.type.startsWith('image/')) setLocal(URL.createObjectURL(file));
  };

  const shown = local || src;
  if (shown) return <img className="pet-photo" src={shown} alt={alt} draggable="false" style={local ? undefined : { objectPosition: position }} />;

  return (
    <button
      type="button"
      className={`pet-photo pet-photo--empty${dragOver ? ' is-over' : ''}`}
      onClick={() => inputRef.current.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragOver(false);
        pick(e.dataTransfer.files[0]);
      }}
    >
      <Icon name="paw-print" size={32} />
      <span>{placeholder}</span>
      <input ref={inputRef} type="file" accept="image/*" hidden onChange={(e) => pick(e.target.files[0])} />
    </button>
  );
}
