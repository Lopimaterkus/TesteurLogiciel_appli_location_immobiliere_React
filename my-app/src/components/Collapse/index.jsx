import { useState } from 'react';
import vectorDown from '../../assets/images/vector-bas.svg';
import '../../styles/collapse.css';

export default function Collapse({ title, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse" id={`collapse-${title}`}>
      <div className="collapse-div">
        <div className="collapse-title">{title}</div>
        <span
          className={`collapse-vectorDown ${open ? 'true' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <img src={vectorDown} alt="Icône flèche" />
        </span>
      </div>
      <div className={`collapse-description ${open ? 'true' : ''}`}>
        {description}
      </div>
    </div>
  );
}
