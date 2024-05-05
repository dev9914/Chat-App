export function extractTime(timestamp) {
    const date = new Date(timestamp);
    const options = { hour12: true, hour: "numeric", minute: "2-digit" };
    return date.toLocaleString("en-US", options);
  }
  