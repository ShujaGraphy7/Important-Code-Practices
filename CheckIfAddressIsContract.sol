//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
contract IsContractAddress{
    function isContract(address _address) public view returns(bool){
        uint size;
        address a = _address;
        assembly {
            size := extcodesize(a)
        }
        return(size > 0);
    }
}