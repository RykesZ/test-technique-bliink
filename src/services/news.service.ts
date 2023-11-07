import axios, { AxiosResponse } from "axios";

export default class NewsService {
    private endPoint: string | undefined;
    private apiKey: string | undefined;
    private country: string | undefined;

    // endPoint, apiKey, and country should be in a .env file and processed with REACT_APP env variables system instead of being hard coded, but latest dotenv release is not compatible with webpack > 5 because of polyfills not included anymore ? Fixing this should be a priority
    constructor() {
        this.endPoint = "https://newsapi.org/v2/top-headlines";
        this.apiKey = "f8560a280a574e3fbd2d1c657729870e";
        this.country = "us";

        if (this.endPoint === undefined || this.apiKey === undefined) {
            throw new Error("Please define the following environment variables : endPoint and apiKey.");
        }
    }

    async getNews(): Promise<AxiosResponse> {
        const url = `${this.endPoint}?country=${this.country}&apiKey=${this.apiKey}`;
        
        try {
            const response: AxiosResponse = await axios.get(url);
            return response;
        } catch (error: any) {
            console.log(error);
            throw new Error(`An error occurred while retrieving data : ${error.response.data.message}`);
        }
    }
}