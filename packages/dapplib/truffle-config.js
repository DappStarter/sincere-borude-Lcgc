require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note meadow unusual install case equal gas'; 
let testAccounts = [
"0x10c013b53f5e9e1e0ef5127d0f81a4f5736120014b48900a7fb016af4fd150f1",
"0xefeb295b6575fe66f5e1f27edd0a9c6dde1ed48ade788e602845ddc614eec18d",
"0x84f536741f82b33df5f8c8a9be74cb8f20093f6242a20e898b8766a416936331",
"0x2e0d8d82f313f8008923f692d1d623be00fba28c2819cb95b14017a062c558b9",
"0x1a44cc656c78dbffd8820c85ff6549d514afab5d9878dbb797b12c7d7ae83a43",
"0x7fa245cfcfd36997c3cbcafda51033a9f6af367dbb78be9ad6bd3ae6b3d49fe4",
"0x1e761ba783cd0ac100302f68f84ec668a2fce00c1435d1a1f9c8c9fb357b238d",
"0x14d02bf970b95caf4811fdbe2ac9ceed8a1a8bf72655031823b9590746f26ecf",
"0x770b8bc058ebace4c9725631077d8f38d14105c28c130aefb9dbb3c32e8f4d91",
"0x04fb2d7f7981be7ceeb4a951917629b1d1e2f5b30e2fbbad1a317e4c4d353318"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

