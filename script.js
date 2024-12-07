/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

function convert(){

    const hexInput = document.getElementById("hexInput").value.toUpperCase();

    const binaryResult = document.getElementById("binaryResult");

    if(isValidHexInput(hexInput)){
        const binaryValue = parseInt(hexInput, 16).toString(2).padStart(4, "0");
        binaryResult.textContent = `Binary: ${binaryValue}`;

    }else{
        binaryResult.textContent = "Invalid Hexadecimal Number";
    }


}

function isValidHexInput(input){

    const isValidHexChars = '0123456789ABCDEF';

    for(let i = 0; i < input.length; i++){

        const char = input.charAt(i);
        if(isValidHexChars.indexOf(char) === -1){
            return false;
        }
    }

    return input.length > 0;
}