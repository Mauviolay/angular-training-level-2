export interface ResultSentimentApi {
  data: SentimentApi[],
  symbol: string
}

export interface SentimentApi {
  symbol: string,
  year: number,
  month: number,
  change: number,
  mspr: number
}

export interface Sentiment {
  date: Date,
  change: number,
  mspr: number
}

export function mapToSentiments(sentimentApis: SentimentApi[]): Sentiment[]
{
  let sentiments = [];
  sentimentApis.forEach( sentimentApi => sentiments.push(mapToSentiment(sentimentApi)))
  return sentiments;
}

export function mapToSentiment(sentimentApi: SentimentApi): Sentiment {
  return {
    date: new Date(sentimentApi.year, sentimentApi.month - 1),
    change: sentimentApi.change,
    mspr: sentimentApi.mspr
  };
}