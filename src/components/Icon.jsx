/* SVG icon library matching the reference design */
const PATHS = {
  grad:     'M22 10v6M2 10l10-7 10 7M5 19.5V10.5M19 19.5V10.5M9 22h6M3 22h18',
  home:     'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10',
  book:     'M4 19.5A2.5 2.5 0 016.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z',
  store:    'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z M3 6h18 M16 10a4 4 0 01-8 0',
  star:     'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  login:    'M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4 M10 17l5-5-5-5 M15 12H3',
  logout:   'M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4 M16 17l5-5-5-5 M21 12H9',
  user:     'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2 M12 11a4 4 0 100-8 4 4 0 000 8z',
  users:    'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75',
  shield:   'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  bell:     'M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 01-3.46 0',
  file:     'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8',
  check:    'M20 6L9 17l-5-5',
  x:        'M18 6L6 18 M6 6l12 12',
  eye:      'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 12a3 3 0 100-6 3 3 0 000 6z',
  award:    'M12 15a7 7 0 100-14 7 7 0 000 14z M8.21 13.89L7 23l5-3 5 3-1.21-9.12',
  zap:      'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  bot:      'M12 8V4H8 M8 8h8 M3 12h3M18 12h3 M12 20v-4 M8 16h8a2 2 0 002-2v-2H6v2a2 2 0 002 2z M7 8h10a2 2 0 012 2v2H5v-2a2 2 0 012-2z',
  search:   'M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z',
  sun:      'M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 5a7 7 0 100 14 7 7 0 000-14z',
  moon:     'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z',
  menu:     'M3 12h18M3 6h18M3 18h18',
  close:    'M18 6L6 18M6 6l12 12',
  arrow:    'M5 12h14M12 5l7 7-7 7',
  arrowLeft:'M19 12H5M12 19l-7-7 7-7',
  chevronR: 'M9 18l6-6-6-6',
  chevronL: 'M15 18l-6-6 6-6',
  clock:    'M12 2a10 10 0 100 20 10 10 0 000-20z M12 6v6l4 2',
  map:      'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 7a3 3 0 100 6 3 3 0 000-6z',
  spark:    'M12 3l2.5 6.5H21l-5.5 4 2 6.5L12 16l-5.5 4 2-6.5L3 9.5h6.5z',
  // New icons for ScrollBanner
  notes:    'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
  exam:     'M9 11l3 3L22 4 M-21 12v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7 M16 5V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2',
  lab:      'M12 2v20 M7 22h10 M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z M12 2L4 7v10l8 5 8-5V7l-8-5z',
  lab2:     'M4.5 3h15M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3M6 14h12',
  medal:    'M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M8.21 13.89L7 23l5-3 5 3-1.21-9.12',
  atom:     'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0',
  briefcase:'M21 7h-3V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2H3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM8 5h8v2H8V5z',
};

export default function Icon({ n, s = 18, c = 'currentColor', style = {} }) {
  const d = PATHS[n] || '';
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke={c}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0, ...style }}
    >
      <path d={d} />
    </svg>
  );
}
