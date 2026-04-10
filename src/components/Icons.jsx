export function Icon({ children, label, className = "" }) {
  return (
    <svg
      className={`icon ${className}`.trim()}
      viewBox="0 0 24 24"
      role="img"
      aria-label={label}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

export function HomeIcon(props) {
  return (
    <Icon label="Home" {...props}>
      <path d="M3 10.5 12 3l9 7.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 9.75V21h12V9.75" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
}

export function StarIcon(props) {
  return (
    <Icon label="Star" {...props}>
      <path
        d="m12 3 2.8 5.68 6.27.91-4.54 4.42 1.07 6.25L12 17.33 6.4 20.26l1.07-6.25L2.93 9.59l6.27-.91L12 3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function TasksIcon(props) {
  return (
    <Icon label="Tasks" {...props}>
      <path d="M4 6h8M4 12h16M4 18h12" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="m14 5 1.2 1.2L18 3.4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m14 11 1.2 1.2L18 9.4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
}

export function MailIcon(props) {
  return (
    <Icon label="Mail" {...props}>
      <path
        d="M4 6.5h16v11H4v-11Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="m5.5 7.5 6.5 5 6.5-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
}

export function ChevronUpIcon(props) {
  return (
    <Icon label="Back to top" {...props}>
      <path d="m6 14 6-6 6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
}

export function PaperclipIcon(props) {
  return (
    <Icon label="Paperclip" {...props}>
      <path
        d="M8.5 12.2 15.9 4.8a4 4 0 0 1 5.7 5.6l-8.6 8.6a6.5 6.5 0 0 1-9.2-9.2l8.4-8.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function CubeIcon(props) {
  return (
    <Icon label="Cube" {...props}>
      <path d="m12 3 7 4-7 4-7-4 7-4Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M19 7v10l-7 4-7-4V7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M12 11v10" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </Icon>
  );
}

export function InfoIcon(props) {
  return (
    <Icon label="Info" {...props}>
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 10.5v6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M12 7.2h.01" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </Icon>
  );
}

export function UserIcon(props) {
  return (
    <Icon label="User" {...props}>
      <path d="M12 13a4.2 4.2 0 1 0-4.2-4.2A4.2 4.2 0 0 0 12 13Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </Icon>
  );
}

export function MapIcon(props) {
  return (
    <Icon label="Map" {...props}>
      <path d="M10 20 4 18V4l6 2 4-2 6 2v14l-6-2-4 2Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M10 6v14M14 4v14M18 6v14" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
    </Icon>
  );
}
