require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remain modify hover private bone ghost'; 
let testAccounts = [
"0x45de2696cbb0ac75824333a5f2f9472e4f7217183d061c9be0df97d033b57e0b",
"0x6150d7e199b928ed8dfbb60c07ea7dbef63ad24b1560b33fce20a4f280ee7345",
"0xebc88b6b6c723e23656feef36d9503d56878ec5bae5c4412ca5cd7c251250169",
"0x03c3c1854f19e0c9045928a78fae3211369662448b7b5d4eac2dc24079ac164f",
"0x13cd13719e0a1943a1ff65cfb47ffd7a1b66bdd3253e94820b4b56fd07e81699",
"0x897e3924e8bf301f03967a3d4524398e169aef50714257e70912a6bab01c052b",
"0x3db347a2f1932d66ec3a2b097a566f7752d4e3761f0db4a775fbd42ee7a1c816",
"0x6aac3f61dccc23d6719c2788dae958f65de00874e256a4dc829955d3e09511df",
"0xe687254ad14360042a7c83cbcb081bf9235df2b2e433ee2aac088729ee2b0a8e",
"0xa90bd7d63e6bd593526c5cb1c7e5673dcfdd6a2f0264a8e1be8f2ddba71f116c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


