'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/mapbox/satellite-v9',
  accessToken:
    'pk.eyJ1Ijoic2FtbXktYiIsImEiOiJjbDF5ZHB3aGQwNjdnM2NvNncxZzB0d2ZyIn0.nkbEjS8P_tgz3ZW3YrHuMA',
  CSV: './DisCourse_Dataset.csv',
  center: [35.23165, -80.84275],
  zoom: 6,
  title: 'Choose from a list of filters to select the best course for you!',
  description:
    'You can select from different options to find the course for you based on terrain type, difficulty, distance, and duration to play.',
  sideBarInfo: ['Location_Name', 'Address', 'Phone', 'URL'],
  popupInfo: ['Location_Name'],
  filters: [
    {
      type: 'dropdown',
      title: 'Terrain: ',
      columnHeader: 'Terrain',
      listItems: [
        'Flat',
        'Hilly',
        'Mixed',
      ],
    },
    {
      type: 'dropdown',
      title: 'Difficulty: ',
      columnHeader: 'Difficulty',
      listItems: [
        'Beginner',
        'Amateur',
        'Intermediate',
        'Advanced',
        'Pro',
      ],
    },
    {
      type: 'dropdown',
      title: 'Distance: ',
      columnHeader: 'Distance',
      listItems: [
        'Short',
        'Medium',
        'Long',
      ],
    },
    {
      type: 'dropdown',
      title: 'Duration to Play: ',
      columnHeader: 'Duration',
      listItems: [
        '1',
        '1.5',
        '2',
        '2.5',
      ],
    },
  ],
};