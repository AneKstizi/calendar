export default (date) => {
  const events = {
    "29.07.2020": [
      {
        eventsName: "Турнир по покеру",
        numberOfParticipants: 5,
      },
      {
        eventsName: "Казино",
        numberOfParticipants: 5,
      },
    ],
    "01.08.2020": [
      {
        eventsName: "Турнир по покеру",
        numberOfParticipants: 5,
      },
      {
        eventsName: "Турнир по покеру",
        numberOfParticipants: 5,
      },
      {
        eventsName: "Турнир по покеру",
        numberOfParticipants: 5,
      },
    ],
    "05.08.2020": [
      {
        eventsName: "Турнир по покеру",
        numberOfParticipants: 5,
      },
    ],
    "10.08.2020": [
      {
        eventsName: "Турнир по покеру",
        numberOfParticipants: 5,
      },
      {
        eventsName: "Турнир по покеру",
        numberOfParticipants: 5,
      },
    ],
  };
  return events[date] || null;
};
