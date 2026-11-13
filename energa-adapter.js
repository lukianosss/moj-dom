/** Interfejs integracji. Nie przechowuj tu loginów ani haseł. */
export async function fetchEnergaUsage() {
  // TODO: wdrożyć dopiero po potwierdzeniu autoryzacji, CORS i warunków API.
  // Oczekiwany format: {source:'energa', dailyKwh:number, history:[{date:'YYYY-MM-DD',kwh:number}], fetchedAt:string}
  throw new Error('Integracja Energa nie jest jeszcze skonfigurowana');
}
