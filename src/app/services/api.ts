import config from 'config'
import { formatProducts } from "../utils/products"
import { Product } from "../types"


export const searchProducts = async (
  text: string,
  abortSignal?: AbortSignal
): Promise<Product[]> => {
  const result = await fetch(
    `${config.api.endpoint}/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=${config.api.serviceVersion}&SECURITY-APPNAME=${config.api.appId}&RESPONSE-DATA-FORMAT=JSON&keywords=${encodeURIComponent(text)}`,
    {
      signal: abortSignal,
    }
  )
  if (result.status !== 200) {
    throw new Error('bad status = ' + result.status)
  }
  const json = await result.json()
  const products = json.findItemsByKeywordsResponse[0].searchResult[0]?.item || [] 
  return formatProducts(products)
}
