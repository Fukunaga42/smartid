pragma solidity ^0.4.3;
contract owned{
  function owned() {
    owner = msg.sender;
  }

  modifier onlyowner() {
    if(msg.sender==owner) _;
  }

  address public owner;
}


contract CertifierRegistry is owned {


    mapping (address => string) officialCertifier;
    mapping (address => int256) certifier;

    event Logs(string _funct, string _val);

    // add officialCertifiers
    function addOfficials(address _officials, string _name) onlyowner {
        officialCertifier[_officials] = _name;
    }
    
    // add unofficialCertifiers
    function addCertifier(address _officials, string _name) onlyowner {
        officialCertifier[_officials] = _name;
    }
    
    function updateCertifier() {
        // check if msg.sender can become certifier
    }
    
    function certified() {
        // check in main register the score of msg.sender
        
        // if good score improve owner score and low msg.sender score

    }
    
    function checkCertifier(address certif) constant returns (string) {
        return officialCertifier[certif];
    }

}

contract MyIdentity{
    string myIdentity;
    string myAddress;
    string myTel;
    int256 myScore;
    address owner;

    mapping (address => string) certifier;
    mapping (address => bool) allowed;
    event Logs(string _funct, string _val);

    function MyIdentity(string _id, string _address, string _tel)
    {
        myIdentity = _id;
        myAddress = _address;
        myTel = _tel;
    }
    
    function certified() {
        // check in main register th score of msg.sender
        
        // if good score improve owner score and low msg.sender score

    }
    
    function checkCertfier(address certif) constant returns (string) {
        return certifier[certif];
    }

    function getId() constant returns (string id) {
        return (myIdentity);
    }
    
    function getAdress() constant returns (string id) {
        return (myAddress);
    }
    
    function getTel() constant returns (string id) {
        return (myTel);
    }
}




