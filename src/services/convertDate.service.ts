export default class convertDateService {
    static formatDateToCustomString = (isoDateString: string): string => {
        console.log(isoDateString);
        const date = new Date(isoDateString);
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        };

      return date.toLocaleString(undefined, options);
    }
}