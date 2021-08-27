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

export const SHIBASWAP_FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x115934131916C8b277DD010Ee02de363c09d037c',
  [ChainId.ROPSTEN]: '0x1DFA4F89acD5cc33A100AD1347970bA9E91737Cb',
  [ChainId.RINKEBY]: '0xBB1a54a34a656a9a2627dce777690641948db2B9',
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


export const SHIBASWAP_ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x03f7724180AA6b939894B5Ca4314783B0b36b329',
  [ChainId.RINKEBY]: '0xA3E7aD0ddF73d445510228c1e1f4590AFD21d24a',
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


export const SHIBASWAP_BONE_TOKEN_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x9813037ee2218799597d83D4a5B6F3b6778218d9',
  [ChainId.ROPSTEN]: '0xD514244ED479A2050c44B448Ec681FaADd8c7429',
  [ChainId.RINKEBY]: '0x72869e0377dD3f366879c777d1CD8F0c57CD7D33',
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


export const SHIBASWAP_BURY_BONE_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xf7A0383750feF5AbaCe57cc4C9ff98e3790202b3',
  [ChainId.ROPSTEN]: '0x06C2c70e62F74e7d52a5D49375F86a0773269d2B',
  [ChainId.RINKEBY]: '0x9D5386D85261b4b6C021962e219E0ba1834d953e',
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


export const SHIBASWAP_BURY_LEASH_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xa57D319B3Cf3aD0E4d19770f71E63CF847263A0b',
  [ChainId.ROPSTEN]: '0x08a200091c55086a8064DbC4bbC0bea1DC338956',
  [ChainId.RINKEBY]: '0xd22d0d7bf611C2f30b59D3882ffC6113a5b566D1',
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


export const SHIBASWAP_BURY_SHIB_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xB4a81261b16b92af0B9F7C4a83f1E885132D81e4',
  [ChainId.ROPSTEN]: '0x0cf138243F0E2Fc20b7065b5DA84E467fb7816C1',
  [ChainId.RINKEBY]: '0x7611bbD53020A559a5052F84891826033bD68B91',
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


export const BONE_LOCKER_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0xa404F66B9278c4aB8428225014266B4B239bcdc7',
  [ChainId.ROPSTEN]: '0x951AbEe165d76F4CAbCB7e053a69CDd581d615f1',
  [ChainId.RINKEBY]: '0xA18529a564ED8d6EeDDFd468104f321b5844d83a',
  [ChainId.KOVAN]: '0xA18529a564ED8d6EeDDFd468104f321b5844d83a'
}


export const SHIBASWAP_TOPDOG_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x94235659cF8b805B2c658f9ea2D6d6DDbb17C8d7',
  [ChainId.ROPSTEN]: '0xA897676603C7aD3E6037a11B5294dD5B3B54AD71',
  [ChainId.RINKEBY]: '0x3871145da1b3073f70108f7e099A2023ECbA6D5c',
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


export const SHIBASWAP_UNI_FETCH_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x0E906A0A798429fe5aA81e5052a5898dD0473907',
  [ChainId.ROPSTEN]: '0xB50De2156E3EC63a21f23E9AB6B86BDa298565bA',
  [ChainId.RINKEBY]: '0xfE6cCa63283708B07E8936a6bE63ADe7987Bbb86',
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


export const SHIBASWAP_SUSHI_FETCH_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xb77Ff862c4f02509D44A75C9543237D68EC6c1bd',
  [ChainId.ROPSTEN]: '0x5B25D81178e7fD2BDe3F6173847ecbA5450b59b4',
  [ChainId.RINKEBY]: '0x5264502c1E8f8199edaB27371412f7443a42B468',
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


export const SHIBA_DASHBOARD_1_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x318A278711fc24f32550Af30E772686BBeE34141',
  [ChainId.ROPSTEN]: '0x06E241217525A421e266D8B37823CF6AAa634EB2',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0x52e37981D941D13072870d58Ed7cC9c9f50F0C4c'
}


export const SHIBA_DASHBOARD_2_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x0Ea28D1cE1198B4Af8a84E5c08c94A907F34AdCE',
  [ChainId.ROPSTEN]: '0x87F1e3A5A71F3e351F1037d1dCB64D0dbbAD26E1',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0x695F54EE70b98DC971554034139cd9b78E771a11'
}


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
  [ChainId.MAINNET]: '0xa2c14852974afE7755eA824260Ca5dF03B816458',
  [ChainId.ROPSTEN]: '0x731191b7A770b5bF18C592658e98C1021118a1FC',
  [ChainId.KOVAN]: '0x2918Ab3591c41A21a05e0AD192150AaEBDDfAafC',
  [ChainId.RINKEBY]: '0x96ffC9220BEe9609D24062699d800d3B32b2f8C5'
}

export const xLEASH_BONE_MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x9495A029Ce34983C0bF0c45EE8214021E95dA26A',
  [ChainId.ROPSTEN]: '0xaE3A7Ab73acfEcaD995E20dC4DD6e05662fa10AE',
  [ChainId.KOVAN]: '0xa658AB33537d5F54AB039BeA74E33D1F30A25CA9',
  [ChainId.RINKEBY]: '0x6A8b4Eff67909aA4e0dDC600016220562419d2F7'
}

export const xSHIB_WETH_MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x67E0eb8557437aB7393243c88A11F3c7E424cA3D',
  [ChainId.ROPSTEN]: '0x075d0E0aBEa664243697898845BbBEaB4e4D8cC3',
  [ChainId.KOVAN]: '0x73b52f7D4B7261265801Bf90D11E63fC47Af5b78',
  [ChainId.RINKEBY]: '0x9e7f876580bA07C5E14310cD580B8BBbF7FEB50F'
}

export const WBTC_MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x1e26deb7E2b83742384F4DFbb2470947F853a2A4',
  [ChainId.ROPSTEN]: '0x6fFa825db269a91d2E60C68Ab7A38Fa9abf70D9c',
  [ChainId.KOVAN]: '0x220ff4180C3926853d5181f094651816c72986c5',
  [ChainId.RINKEBY]: '0x129175d454D91Df65795640c264752B9B1eB8738'
}

export const USDT_MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x5140ecB1aA2DAA8427e724A6a5b3893617d8110c',
  [ChainId.ROPSTEN]: '0x0e31C2d3BDF833114f92a1F0B0897Cb3213E805C',
  [ChainId.KOVAN]: '0x6D8A147cFa68d6d231133193d02e3bc3fDe6d852',
  [ChainId.RINKEBY]: '0x8B1336aa37b8129B7e5A7EF5d4EFfEc60B34001E'
}

export const USDC_MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x9E1FDDcfCF7c0917371497AC24d27dB764aAE0FE',
  [ChainId.ROPSTEN]: '0x256c3400c2D196400650B15f07C9F8e88D564B0e',
  [ChainId.KOVAN]: '0x03197C78F25c3d54862e5a33F255e16317004D3c',
  [ChainId.RINKEBY]: '0x57793Ea74C545618F8E26B6Ecfbb62205885D1C4'
}

export const DAI_MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x0075f029648FFbd2026a7df1E9EFf27ebC90Ca65',
  [ChainId.ROPSTEN]: '0xB2D3f606197a83e48D0377c8BAdcbF0e7CBEE95b',
  [ChainId.KOVAN]: '0x9aA6C7Dd055c109228644255e63Ee92a13FEC52A',
  [ChainId.RINKEBY]: '0xbef224eeb6959870511d2280Ce7271c42a2c0B78'
}

export const tBONE_BONE_MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0xBaAa2B1F770c8AA0f86203C77A6b01E8315b3238',
  [ChainId.ROPSTEN]: '0xF4F4Db3EeaF5D1636fADa510cA1726f6280196D4',
  [ChainId.KOVAN]: '0xB5e57C142737c9ab974048268DfAc89A50DA2E70',
  [ChainId.RINKEBY]: '0x492C7770375C2F117B5225AabF656f7B1D0C214b'
}

// Test network addreses are not corerct. Copied from tBone
export const XFUND_MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x6a425fC7Bc4ed7Cfb3cD89cca9925aba3B900BBe',
  [ChainId.ROPSTEN]: '0xF4F4Db3EeaF5D1636fADa510cA1726f6280196D4',
  [ChainId.KOVAN]: '0xB5e57C142737c9ab974048268DfAc89A50DA2E70',
  [ChainId.RINKEBY]: '0x492C7770375C2F117B5225AabF656f7B1D0C214b'
}

// Test network addreses are not corerct. Copied from tBone
export const PERL_MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x40Ab98602341A294C2b9d6A71266183EDC3EDF76',
  [ChainId.ROPSTEN]: '0xF4F4Db3EeaF5D1636fADa510cA1726f6280196D4',
  [ChainId.KOVAN]: '0xB5e57C142737c9ab974048268DfAc89A50DA2E70',
  [ChainId.RINKEBY]: '0x492C7770375C2F117B5225AabF656f7B1D0C214b'
}

// Test network addreses are not corerct. Copied from tBone
export const F9_MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x63837C5b60Fb7A29d5E8823A07ee98Df3fA83955',
  [ChainId.ROPSTEN]: '0xF4F4Db3EeaF5D1636fADa510cA1726f6280196D4',
  [ChainId.KOVAN]: '0xB5e57C142737c9ab974048268DfAc89A50DA2E70',
  [ChainId.RINKEBY]: '0x492C7770375C2F117B5225AabF656f7B1D0C214b'
}

// Test network addreses are not corerct. Copied from tBone
export const RYOSHIS_MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x7732674B5E5FfeC4785AEFdAEa807EeCA383B5e6',
  [ChainId.ROPSTEN]: '0xF4F4Db3EeaF5D1636fADa510cA1726f6280196D4',
  [ChainId.KOVAN]: '0xB5e57C142737c9ab974048268DfAc89A50DA2E70',
  [ChainId.RINKEBY]: '0x492C7770375C2F117B5225AabF656f7B1D0C214b'
}

// Test network addreses are not corerct. Copied from tBone
export const ZIG_MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x2697B304724f277F4AD498a2792D694917bc640F',
  [ChainId.ROPSTEN]: '0xF4F4Db3EeaF5D1636fADa510cA1726f6280196D4',
  [ChainId.KOVAN]: '0xB5e57C142737c9ab974048268DfAc89A50DA2E70',
  [ChainId.RINKEBY]: '0x492C7770375C2F117B5225AabF656f7B1D0C214b'
}
