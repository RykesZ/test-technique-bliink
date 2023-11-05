import axios, { AxiosResponse } from "axios";

export default class NewsService {
    private endPoint: string | undefined;
    private apiKey: string |undefined;

    constructor() {
        this.endPoint = "https://newsapi.org/v2/top-headlines";
        this.apiKey = "f8560a280a574e3fbd2d1c657729870e";

        if (this.endPoint === undefined || this.apiKey === undefined) {
            throw new Error("Veuillez définir les variables d'environnement endPoint et apiKey.")
        }
    }

    async getNews(): Promise<AxiosResponse> {
        const url = `${this.endPoint}?country=us&apiKey=${this.apiKey}`;
        
        try {
            const response: AxiosResponse = await axios.get(url);
            return response
        } catch (error) {
            throw new Error(`Une erreur est survenue lors de la récupération des données : ${error}`)
        }
    }
}