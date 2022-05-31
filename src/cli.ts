import { handler } from './handler'

if (require.main === module) {
  const {
    RELAYER_API_KEY,
    RELAYER_API_SECRET,
    ETHEREUM_RINKEBY_PROVIDER_URL: ethereumRinkebyProviderURL,
  } = process.env;
  handler({
    apiKey: RELAYER_API_KEY,
    apiSecret: RELAYER_API_SECRET,
    secrets: {
      ethereumRinkebyProviderURL,
    }
  })
    .then(() => process.exit(0))
    .catch(error => { console.error(error); process.exit(1); });
}

export function main() {}