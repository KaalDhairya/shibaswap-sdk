import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  MATIC = 137,
  MATIC_TESTNET = 80001,
  FANTOM = 250,
  FANTOM_TESTNET = 4002,
  XDAI = 100,
  BSC = 56,
  BSC_TESTNET = 97,
  ARBITRUM = 79377087078960,
  MOONBASE = 1287,
  AVALANCHE = 43114,
  FUJI = 43113,
  HECO = 128,
  HECO_TESTNET = 256,
  HARMONY = 1666600000,
  HARMONY_TESTNET = 1666700000
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

// TODO REMOVE
export const INIT_CODE_HASH: string = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'
// TODO GOLIVE
export const SHIBA_CODE_HASH: string = '0x65d1a3b1e46c6e4f1be1ad5f99ef14dc488ae0549dc97db9b30afe2241ce1c7a'
// TODO REMOVE
export const SUSHI_FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
  [ChainId.ROPSTEN]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.RINKEBY]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.GÖRLI]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.KOVAN]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.FANTOM]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.MATIC_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.XDAI]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.BSC]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.BSC_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '0x2Ce3F07dD4c62b56a502E223A7cBE38b1d77A1b5',
  [ChainId.AVALANCHE]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.FUJI]: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
  [ChainId.HECO]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.HECO_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.HARMONY]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.HARMONY_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
}
// TODO GOLIVE
export const SHIBASWAP_FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac', // TODO THIS IS SUSHI PUT TO TEST WAS GIVING BLANK PAGE
  [ChainId.ROPSTEN]: '0x1DFA4F89acD5cc33A100AD1347970bA9E91737Cb',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0x4fa1932a7fd78C2446842dc00567bFF1D192DB07',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: ''
}

// TODO GOLIVE
export const SHIBASWAP_ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',  // TODO THIS IS SUSHI PUT TO TEST WAS GIVING BLANK PAGE
  [ChainId.RINKEBY]: '',
  [ChainId.ROPSTEN]: '0x4B0d61C160572CAcC0A20D2dbeF6E0138bf58681',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0xbe2B7BC93EF34994E5d7342cF3c8cC9f1fd51109',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: ''
}

// TODO GOLIVE
export const SHIBASWAP_BONE_TOKEN_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '0xD514244ED479A2050c44B448Ec681FaADd8c7429',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0x6d4bB7b0559Aebfc55A42cFEAAeb287c01a7f244',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: ''
}

// TODO GOLIVE
export const SHIBASWAP_BURY_BONE_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '0x06C2c70e62F74e7d52a5D49375F86a0773269d2B',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0x0306c12Bf48ccB3031eef5EFF335d468a40dd6a5',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: ''
}

// TODO GOLIVE
export const SHIBASWAP_BURY_LEASH_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '0x08a200091c55086a8064DbC4bbC0bea1DC338956',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0x1309B57240BD3A93750806E3d73aa30b3a6885E2',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: ''
}

// TODO GOLIVE
export const SHIBASWAP_BURY_SHIB_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '0x0cf138243F0E2Fc20b7065b5DA84E467fb7816C1',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0x9DF7a6c4c34C70949feA6e6dB2d475bCaffEaa2C',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: ''
}

// TODO GOLIVE
export const BONE_LOCKER_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '0x951AbEe165d76F4CAbCB7e053a69CDd581d615f1',
  [ChainId.KOVAN]: '0xDBA3D24fafC8D46D479fa1b63a08A2e7beCe9190'
}

// TODO GOLIVE
export const SHIBASWAP_TOPDOG_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '0xA897676603C7aD3E6037a11B5294dD5B3B54AD71',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0xa58C58fC67648924314D021033b709a475F2702D',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: ''
}

// TODO GOLIVE
export const SHIBASWAP_UNI_FETCH_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '0xB50De2156E3EC63a21f23E9AB6B86BDa298565bA',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0x00E7Bed38d154E855b32D773ceB34C73872b3CBF',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: ''
}

// TODO GOLIVE
export const SHIBASWAP_SUSHI_FETCH_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '0x5B25D81178e7fD2BDe3F6173847ecbA5450b59b4',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0x5B9537FC6aBa6bA3170aC1BDE76a586E4d1269d7',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: ''
}

// TODO GOLIVE
export const SHIBA_DASHBOARD_1_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '0x06E241217525A421e266D8B37823CF6AAa634EB2',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0x52e37981D941D13072870d58Ed7cC9c9f50F0C4c'
}

// TODO GOLIVE
export const SHIBA_DASHBOARD_2_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '0x87F1e3A5A71F3e351F1037d1dCB64D0dbbAD26E1',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0x695F54EE70b98DC971554034139cd9b78E771a11'
}

// TODO GOLIVE
export const SHIBASWAP_SHIB_TOKEN_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
  [ChainId.ROPSTEN]: '0xeBAdA3F2883F226BAE65fc0A6404916E965196b5',
  [ChainId.RINKEBY]: '0x658f8c0456265DB1a5fC6BC0A7e8eFd6Fa7F302F',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0x0b2367E0e56Fd9b63388F1478830c8a4b1bA5963',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: ''
}

// TODO GOLIVE
export const SHIBASWAP_LEASH_TOKEN_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x27C70Cd1946795B66be9d954418546998b546634',
  [ChainId.ROPSTEN]: '0x806b97D788D401aC2139413b5Aa42E5d408DF572',
  [ChainId.RINKEBY]: '0xe74ffE1299D39231058C8B6F5AdE8BbF74eeed72',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0xf90e84b13FaA6a50A5c361a8d35019C4236b1582',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: ''
}

// Mostly not needed
// TODO GOLIVE TOCHECK
export const SHIBASWAP_TIMELOCK_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: ''
}

// TODO GOLIVE
export const SHIBA_BORING_HELPER_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '0x7F561103db907D9865814E8fFFb0cee29BD1B414', // TODO TEMP
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0x7F561103db907D9865814E8fFFb0cee29BD1B414'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

export const xSHIB_BONE_MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '0x731191b7A770b5bF18C592658e98C1021118a1FC',
  [ChainId.KOVAN]: '0x2918Ab3591c41A21a05e0AD192150AaEBDDfAafC',
  [ChainId.RINKEBY]: ''
}

export const xLEASH_BONE_MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '0xaE3A7Ab73acfEcaD995E20dC4DD6e05662fa10AE',
  [ChainId.KOVAN]: '0xa658AB33537d5F54AB039BeA74E33D1F30A25CA9',
  [ChainId.RINKEBY]: ''
}

export const xSHIB_WETH_MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '0x075d0E0aBEa664243697898845BbBEaB4e4D8cC3',
  [ChainId.KOVAN]: '0x73b52f7D4B7261265801Bf90D11E63fC47Af5b78',
  [ChainId.RINKEBY]: ''
}

export const WBTC_MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '0x6fFa825db269a91d2E60C68Ab7A38Fa9abf70D9c',
  [ChainId.KOVAN]: '0x220ff4180C3926853d5181f094651816c72986c5',
  [ChainId.RINKEBY]: ''
}

export const USDT_MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '0x0e31C2d3BDF833114f92a1F0B0897Cb3213E805C',
  [ChainId.KOVAN]: '0x6D8A147cFa68d6d231133193d02e3bc3fDe6d852',
  [ChainId.RINKEBY]: ''
}

export const USDC_MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '0x256c3400c2D196400650B15f07C9F8e88D564B0e',
  [ChainId.KOVAN]: '0x03197C78F25c3d54862e5a33F255e16317004D3c',
  [ChainId.RINKEBY]: ''
}

export const DAI_MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '0xB2D3f606197a83e48D0377c8BAdcbF0e7CBEE95b',
  [ChainId.KOVAN]: '0x9aA6C7Dd055c109228644255e63Ee92a13FEC52A',
  [ChainId.RINKEBY]: ''
}

export const tBONE_BONE_MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '0xF4F4Db3EeaF5D1636fADa510cA1726f6280196D4',
  [ChainId.KOVAN]: '0xB5e57C142737c9ab974048268DfAc89A50DA2E70',
  [ChainId.RINKEBY]: ''
}

