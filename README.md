# react-text-diff
A react component of diff text.

## Install
```sh
npm install react-text-diff
```

## Usage
```sh
import {Component} from 'react';
import ReactTextDiff from 'react-text-diff';

class Demo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            oldStr: oldStr,
            newStr: newStr,
            context: 100000, // max 100000
            outputFormat: 'side-by-side' //'line-by-line' or 'side-by-side'
        }
    }
    render(){
        return (
            <div>
                <ReactTextDiff oldStr={oldStr} newStr={newStr} context={context} outputFormat={outputFormat}/>;
            </div>
        )
    }
}

export default Demo;
``` 

## Test Demo
```sh
git cloen xxx
npm i
npm run dev
```
![demo](https://github.com/Stevenzwzhai/react-text-diff/blob/master/test/demo.png)
