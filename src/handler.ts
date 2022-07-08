import { Relayer } from 'defender-relay-client'
import { drawBeaconHandleDrawStartAndComplete } from '@pooltogether/v4-autotask-lib'
import { testnet as contracts } from '@pooltogether/v4-pool-data'

export async function handler(event: any) {
  const relayer = new Relayer(event);
  try {
    const config = {
      beaconChain: {
        chainId: 4,
        providerUrl: event.secrets.ethereumRinkebyProviderURL,
      },
    }
    const transactionPopulated = await drawBeaconHandleDrawStartAndComplete(contracts, config)
    if (transactionPopulated) {
      let transactionSentToNetwork = await relayer.sendTransaction({
        data: transactionPopulated.data,
        to: transactionPopulated.to,
        gasLimit: 500000,
        speed: 'fast'
      });
      console.log('TransactionHash:', transactionSentToNetwork.hash)
    } else {
      throw new Error('DrawBeacon: Transaction not populated')
    }
  } catch (error) {
    console.log(error)
  }
}
