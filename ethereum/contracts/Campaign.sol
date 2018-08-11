pragma solidity ^0.4.17;


contract onlineJudge {
    address[] public deployedQuestions;
    address public owner ;
    
    function onlineJudge() public {
        owner = msg.sender;
    }
    
    function createQuestion(string description, string publicKey) public payable {
        address newQuestion = (new Question).value(msg.value)( msg.sender, description , publicKey, owner);
        deployedQuestions.push(newQuestion);
    }
    
    
    function getDeployedQuestions() public view returns(address[]) {
        return deployedQuestions;
    }
    
    function getBalance() public view returns(uint) {
        return this.balance;
    }
    
}

contract Question {
    address public manager;
    address public owner ;
    string public managerKey;
    string public questionDescription ;
    uint public contractValue;
    mapping( address => string) public participantsIPFS;
    mapping(address => uint) public participantsGasValue;
    mapping(address => string) public usernames;
    address[] public participants;
    mapping( address => bool) participantsExists;

    
    function Question(address questionManager,  string description, string publicKey, address judgeOwner ) public payable  {
      
        owner = judgeOwner;
        manager = questionManager;
        managerKey = publicKey;
        questionDescription = description;
    }
    
    function getManagerPublicKey() public view returns(string)  {
        return managerKey;
    }
    
    function getManagerAddress() public view returns(address)  {
        return manager;
    }
    
    function submitSolutionDetails(address particpant, string userName, uint gas,string hash) public {
        require(msg.sender == owner);
        
         if(!participantsExists[particpant] ) {
            participants.push(particpant);
            usernames[particpant] = userName;
            participantsExists[particpant] = true;
         }
        
        participantsIPFS[particpant] = hash;
        participantsGasValue[particpant] = gas;
        
       
    }
    
    function rewardWinner(address participant) public {
        require(msg.sender == manager);
        participant.transfer(this.balance);
    }
    
    function getParticipant(uint index) public view returns(address) {
        return participants[index];
    }
    
    function getQuestionDescription() public view returns (string) {
        return questionDescription;
    }
    
    function getContractValue() public view returns(uint) {
        return contractValue;
    }
    
    function getBalance() public view returns(uint) {
        return this.balance;
    }
    
  
    function getSummary() public view returns(address, string, uint, uint, string) {
        return (
            manager ,
            questionDescription,
            this.balance,
            participants.length ,
            managerKey
            ) ;
        
    }
    
}