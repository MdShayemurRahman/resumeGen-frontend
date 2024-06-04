export function formatExperienceDate(startDate, endDate) {
  const options = { month: 'long', year: 'numeric' };
  const start = new Date(startDate).toLocaleDateString(undefined, options);
  const end = endDate
    ? new Date(endDate).toLocaleDateString(undefined, options)
    : 'Present';
  return `${start} - ${end}`;
}
