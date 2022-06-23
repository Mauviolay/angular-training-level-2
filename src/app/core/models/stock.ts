export interface Stock {
  changeToday: number,
  currentPrice: number,
  openingPrice: number,
  highPrice: number
}

export interface StockApi {
  c:number, // current price
  d: number, // change
  dp:number, // percent change
  h:number, // high price of the day
  l:number, // low price of the day
  o:number, // open price of the day
  pc:number, // previous price of the day
  t:number // timestamp
}

export function mapToStock(stockApi: StockApi): Stock {
  return {
    changeToday: stockApi.dp,
    currentPrice: stockApi.c,
    highPrice: stockApi.h,
    openingPrice: stockApi.o
  };
}