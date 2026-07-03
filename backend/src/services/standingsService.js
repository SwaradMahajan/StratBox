import { fetchFromOpenF1 } from "./OpenF1service.js";

export const getStandingsData = async () => {
    const year = new Date().getFullYear();

    const meetings = await fetchFromOpenF1(`/meetings?year=${year}`);

    if (!meetings || meetings.length === 0) {
        return [];
    }

    const now = new Date();

    let currentMeeting = null;
    let nextRace = null;

    for (const meeting of meetings) {
        const start = new Date(meeting.date_start);
        const end = new Date(meeting.date_end);

        if (now >= start && now <= end) {
            currentMeeting = meeting;
        }

        if (start > now && !nextRace) {
            nextRace = meeting;
        }
    }

    // Use current race weekend if live,
    // otherwise use the upcoming race weekend.
    const targetMeeting = currentMeeting || nextRace;

    if (!targetMeeting) {
        return [];
    }

    // Fetch all sessions for this meeting
    const sessions = await fetchFromOpenF1(
        `/sessions?meeting_key=${targetMeeting.meeting_key}`
    );

    if (!sessions || sessions.length === 0) {
        return [];
    }

    // Find the main Race session
    const raceSession = sessions.find(
        (session) => session.session_name === "Race"
    );

    if (!raceSession) {
        return [];
    }

    // Fetch live positions
    const positions = await fetchFromOpenF1(
        `/position?session_key=${raceSession.session_key}`
    );

    // If race hasn't started yet,
    // OpenF1 returns an empty array.
    if (!positions || positions.length === 0) {
        return [];
    }

    return positions;
};