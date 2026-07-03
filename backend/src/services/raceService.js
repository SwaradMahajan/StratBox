import { fetchFromOpenF1 } from "./OpenF1service.js";

export const getRaceData = async () => {
  const year = new Date().getFullYear();

  const meetings = await fetchFromOpenF1(`/meetings?year=${year}`);

  if (!meetings || meetings.length === 0) {
    return null;
  }

  const now = new Date();

  let latestRace = null;
  let nextRace = null;
  let currentMeeting = null;

  // Find latest, next and current meeting
  for (const meeting of meetings) {
    const start = new Date(meeting.date_start);
    const end = new Date(meeting.date_end);

    if (end < now) {
      latestRace = meeting;
    }

    if (start > now && !nextRace) {
      nextRace = meeting;
    }

    if (now >= start && now <= end) {
      currentMeeting = meeting;
    }
  }

  // We are currently in a race weekend
  if (currentMeeting) {
    const sessions = await fetchFromOpenF1(
      `/sessions?meeting_key=${currentMeeting.meeting_key}`
    );

    const raceSession = sessions.find(
      (session) => session.session_name === "Race"
    );

    if (raceSession) {
      const raceStart = new Date(raceSession.date_start);
      const raceEnd = new Date(raceSession.date_end);

      if (now >= raceStart && now <= raceEnd) {
        return {
          status: "LIVE",

          race: {
            meetingKey: currentMeeting.meeting_key,
            grandPrix: currentMeeting.meeting_name,
            circuit: currentMeeting.circuit_short_name,
            country: currentMeeting.country_name,
            startDate: raceSession.date_start,
            endDate: raceSession.date_end,
          },
        };
      }
    }
  }

  // No live race
  return {
    status: "OFF_WEEKEND",

    latestRace: latestRace
      ? {
          meetingKey: latestRace.meeting_key,
          grandPrix: latestRace.meeting_name,
          circuit: latestRace.circuit_short_name,
          country: latestRace.country_name,
          startDate: latestRace.date_start,
          endDate: latestRace.date_end,
        }
      : null,

    nextRace: nextRace
      ? {
          meetingKey: nextRace.meeting_key,
          grandPrix: nextRace.meeting_name,
          circuit: nextRace.circuit_short_name,
          country: nextRace.country_name,
          startDate: nextRace.date_start,
          endDate: nextRace.date_end,
        }
      : null,
  };
};