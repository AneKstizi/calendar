export default (date) => {
  const events = {
    "05.08.2020": [
      {
        eventsName: "Турнир по покеру",
        startTime: "21:00",
        endTime: "13:30",
        startDate: "13.08.2020",
        endDate: "13.08.2020",
        numberOfParticipants: 5,
        hex: "#b91d38",
      },
      {
        eventsName: "Казино",
        startTime: "21:00",
        endTime: "13:30",
        startDate: "13.08.2020",
        endDate: "13.08.2020",
        numberOfParticipants: 5,
        hex: "#5ca5ad",
      },
    ],
    "09.09.2020": [
      {
        eventsName: "Тест",
        startTime: "21:00",
        endTime: "13:30",
        startDate: "13.08.2020",
        endDate: "13.08.2020",
        numberOfParticipants: 5,
        hex: "pink",
      },
    ],
  };
  return events[date] || null;
};
