# Caesar cipher CLI tool
## How to install
1. Open command line window or terminal
2. Print "npm i" or "npm install"

## Usage
Print in command line "node index.js [options]",  
where [options] is:  
1. "-s" or "--shift" -> a shift, must be positive or negative integer(required)
1. "-a" or "--action" -> an action, must be only encode/decode(requred)
1. "-i" or "--input" -> path to input file
1. "-o" or "--output" -> path to output file

## Examples
**encode**
```bash
$ node index.js -a encode -s 7 -i "input.txt" -o "output.txt"
```
>input.txt  
>`This is secret. Message about "_" symbol!`

> output.txt  
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`  



****
**decode**
```bash
$ node index.js -a decode -s 7 -i "input.txt" -o "output.txt"
```
>input.txt
>`Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

>output.txt
> `This is secret. Message about "_" symbol!`
