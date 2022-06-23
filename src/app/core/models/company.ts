export interface Company {
  description: string,
  symbol: string
}

export interface CompanyApi {
  description: string,
  displaySymbol: string,
  symbol: string,
  type: string
}

export interface ResultCompanyApi {
  result: CompanyApi[]
}

export function mapToCompany(companyApi: CompanyApi): Company {
  return { symbol: companyApi.symbol, description: companyApi.description } as Company;
}