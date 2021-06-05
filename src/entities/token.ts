import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import { validateAndParseAddress } from '../utils'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId
  public readonly address: string

  public constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

// TODO GOLIVE
// In reality this is a map of the wrapped version of the native token for a given network.
// TODO: Rename to WNATIVE for sanity
export const WETH = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ROPSTEN]: new Token(
    ChainId.ROPSTEN,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.RINKEBY]: new Token(
    ChainId.RINKEBY,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0x8910A4Ef5b2c6E54506c7e1c9796F0220aA5e97f', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', 18, 'WFTM', 'Wrapped FTM'),
  [ChainId.FANTOM_TESTNET]: new Token(
    ChainId.FANTOM_TESTNET,
    '0xf1277d1Ed8AD466beddF92ef448A132661956621',
    18,
    'FTM',
    'Wrapped FTM'
  ),
  [ChainId.MATIC]: new Token(
    ChainId.MATIC,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'WMATIC',
    'Wrapped Matic'
  ),
  [ChainId.MATIC_TESTNET]: new Token(
    ChainId.MATIC_TESTNET,
    '0x5B67676a984807a212b1c59eBFc9B3568a474F0a',
    18,
    'WMATIC',
    'Wrapped Matic'
  ),
  [ChainId.XDAI]: new Token(ChainId.XDAI, '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d', 18, 'WXDAI', 'Wrapped xDai'),
  [ChainId.BSC]: new Token(ChainId.BSC, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [ChainId.ARBITRUM]: new Token(
    ChainId.ARBITRUM,
    '0xf8456e5e6A225C2C1D74D8C9a4cB2B1d5dc1153b',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.MOONBASE]: new Token(
    ChainId.MOONBASE,
    '0xe73763DB808ecCDC0E36bC8E32510ED126910394',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    18,
    'WAVAX',
    'Wrapped AVAX'
  ),
  [ChainId.FUJI]: new Token(ChainId.FUJI, '0xd00ae08403B9bbb9124bB305C09058E32C39A48c', 18, 'WAVAX', 'Wrapped AVAX'),
  [ChainId.HECO]: new Token(ChainId.HECO, '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F', 18, 'WHT', 'Wrapped HT'),
  [ChainId.HECO_TESTNET]: new Token(
    ChainId.HECO_TESTNET,
    '0x5B2DA6F42CA09C77D577a12BeaD0446148830687',
    18,
    'WHT',
    'Wrapped HT'
  ),
  [ChainId.HARMONY]: new Token(
    ChainId.HARMONY,
    '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
    18,
    'WONE',
    'Wrapped ONE'
  ),
  [ChainId.HARMONY_TESTNET]: new Token(
    ChainId.HARMONY_TESTNET,
    '0x7a2afac38517d512E55C0bCe3b6805c10a04D60F',
    18,
    'WONE',
    'Wrapped ONE'
  )
}

// TODO GOLIVE TOCHECK DECIMALS
export const USDC = {
  [ChainId.MAINNET]: null,
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0x0cf2cd0277f75c8799b5526e0aa104c8797b0b5c', 6, 'USDC', 'USDC'),
}

// TODO GOLIVE TOCHECK DECIMALS
export const USDT = {
  [ChainId.MAINNET]: null,
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0x763487Dcc79c39903a06e0c67ff12984578f1781', 6, 'USDT', 'USDT'),
}

// TODO GOLIVE TOCHECK DECIMALS
export const WBTC = {
  [ChainId.MAINNET]: null,
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0x3673628B0a9B27480c57026FCddc9Ac16d61A6EA', 8, 'wBTC', 'Wrapped BTC'),
}

// TODO GOLIVE TOCHECK DECIMALS
export const DAI = {
  [ChainId.MAINNET]: null,
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0x560EA439FA3c8ee6A4cE43a2A74320AcE26Aa97a', 18, 'DAI', 'DAI'),
}

//TODO GOLIVE TOCHECK DECIMALS
export const BONE = {
  [ChainId.MAINNET]: null,
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0x6c636DfaFB3DD7B3b24bbd709Ab520bf2F33c53a', 18, 'BONE', 'BONE DOGECOIN KILLER'),
}

//TODO GOLIVE TOCHECK DECIMALS
export const SHIBA_INU = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE', 18, 'SHIB', 'SHIBA INU'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0xE9A1Ed75621D9357C753e1436Fe9EB63628bde67', 18, 'SHIB', 'SHIBA INU'),
}

//TODO GOLIVE TOCHECK DECIMALS
export const LEASH = {
  [ChainId.MAINNET]: new Token(ChainId.KOVAN, '0x27C70Cd1946795B66be9d954418546998b546634', 18, 'LEASH', 'DOGE KILLER'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0x7660ef103b2b03EFB3b18a7140dB6296eA61d725', 18, 'LEASH', 'DOGE KILLER'),
}