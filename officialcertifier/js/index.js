
var addToLog = function(txt) {
  $(".logs").append("<br>" + txt);
};

String.prototype.hashCode = function() {
  var hash = 0, i, chr, len;
  if (this.length === 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

$(document).ready(function() {
    $(".scadress").append("<p>SUPER-ONG certifier ethereum Address is:<A href=https://testnet.etherscan.io/address/"+web3.eth.accounts[0] +">HERE</A> <p>");
  $("button.set").click(function() {
  var name =  $("#name").val();
  var tel = "0101010101"
  var address = $("#addresse").val();
  var addressEth = $("#eth").val();
  console.log("name = ", name.hashCode());
  $(".main").remove();

var _id = name.hashCode();
var _address = address.hashCode();
var _tel = tel.hashCode();
var owner = addressEth.hashCode();
console.log(_id.toString());

console.log(_address.toString());
var bankId = "SuperONG" ;
var myidentityContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"getId","outputs":[{"name":"id","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getAdress","outputs":[{"name":"id","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"certif","type":"address"}],"name":"checkCertfier","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getTel","outputs":[{"name":"id","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"certified","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_id","type":"string"},{"name":"_address","type":"string"},{"name":"_tel","type":"string"},{"name":"owner","type":"address"},{"name":"bankId","type":"string"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_funct","type":"string"},{"indexed":false,"name":"_val","type":"string"}],"name":"Logs","type":"event"}]);
var myidentity = myidentityContract.new(
   _id.toString(),
   _address.toString(),
   _tel.toString(),
   owner,
   bankId,
   {
     from: web3.eth.accounts[0], 
     data: '0x606060405234610000576040516109af3803806109af833981016040528080518201919060200180518201919060200180518201919060200180519060200190919080518201919060200150505b8460009080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061009957805160ff19168380011785556100c7565b828001600101855582156100c7579182015b828111156100c65782518255916020019190600101906100ab565b5b5090506100ec91905b808211156100e85760008160009055506001016100d0565b5090565b50508360019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061013a57805160ff1916838001178555610168565b82800160010185558215610168579182015b8281111561016757825182559160200191906001019061014c565b5b50905061018d91905b80821115610189576000816000905550600101610171565b5090565b50508260029080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101db57805160ff1916838001178555610209565b82800160010185558215610209579182015b828111156102085782518255916020019190600101906101ed565b5b50905061022e91905b8082111561022a576000816000905550600101610212565b5090565b505061024c81610257640100000000026105b2176401000000009004565b5b5050505050610323565b80600460003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102ca57805160ff19168380011785556102f8565b828001600101855582156102f8579182015b828111156102f75782518255916020019190600101906102dc565b5b50905061031d91905b80821115610319576000816000905550600101610301565b5090565b50505b50565b61067e806103316000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480635d1ca631146100645780636b37d362146100df578063b3d6fbb01461015a578063ca8c18da146101e3578063f74d59f91461025e575b610000565b34610000576100716102b5565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156100d15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34610000576100ec61036a565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561014c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3461000057610175600480803590602001909190505061041f565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156101d55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34610000576101f06104fd565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156102505780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34610000576102b3600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506105b2565b005b602060405190810160405280600081526020015060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561035f5780601f106103345761010080835404028352916020019161035f565b820191906000526020600020905b81548152906001019060200180831161034257829003601f168201915b505050505090505b90565b602060405190810160405280600081526020015060018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104145780601f106103e957610100808354040283529160200191610414565b820191906000526020600020905b8154815290600101906020018083116103f757829003601f168201915b505050505090505b90565b6020604051908101604052806000815260200150600460008373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104f05780601f106104c5576101008083540402835291602001916104f0565b820191906000526020600020905b8154815290600101906020018083116104d357829003601f168201915b505050505090505b919050565b602060405190810160405280600081526020015060028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105a75780601f1061057c576101008083540402835291602001916105a7565b820191906000526020600020905b81548152906001019060200180831161058a57829003601f168201915b505050505090505b90565b80600460003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061062557805160ff1916838001178555610653565b82800160010185558215610653579182015b82811115610652578251825591602001919060010190610637565b5b50905061067891905b8082111561067457600081600090555060010161065c565b5090565b50505b5056', 
     gas: '1200000'
   },  function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {

  $(".result").append("<p>The created SMART CONTRACT ID is<A href=https://testnet.etherscan.io/address/" +contract.address  +"> Here</A> <p>");
         console.log('Contract mined! adddddress: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
  });

  $("button.get").click(function() {
    SimpleStorage.get().then(function(value) {
      $(".value").html(value.toNumber());
    });
    addToLog("SimpleStorage.get()");
  });

});