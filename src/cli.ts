import { handler } from './handler'

if (require.main === module) {
  const {
    RELAYER_API_KEY: apiKey,
    RELAYER_API_SECRET: apiSecret,
    ETHEREUM_RINKEBY_PROVIDER_URL: ethereumRinkebyProviderURL,
  } = process.env;

  handler({
    apiKey,
    apiSecret,
    secrets: {
      ethereumRinkebyProviderURL,
    }
  })
    .then(() => process.exit(0))
    .catch(error => { console.error(error); process.exit(1); });
}

export function main() {}
