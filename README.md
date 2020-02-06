# Meeting Room Display

## Live demo [here!](https://fast-beyond-38770.herokuapp.com/)

The aim of this project was to create a digital display for use outside meeting rooms to clearly display ongoing and upcoming meetings and their details.

## Setup:

After cloning this repository, navigate to the root directory and run:
```
npm install
``` 
You can then run the application by running:
```
npm start
```
The application will run at `http://localhost:3000/` by default.

Meeting data is read in JSON format from `/src/data/meetings.json`. This repository contains a file populated with example data, but you can replace the file with your own data if you wish.

The JSON data should be in the following format:
```
[
  {
    "Subject": "Meeting Subject",
    "Organizer": "Organizer Name",
    "StartTime": "YYYY-MM-DDTHH:MM:SS",
    "EndTime": "YYYY-MM-DDTHH:MM:SS",
    "Participants": [
      {
        "Name": "Participant Name",
        "Title": "Participant Title"
      }
    ],
    "Description": "Meeting Description"
  }
]
```

The `Participants` and `Description` properties are optional.