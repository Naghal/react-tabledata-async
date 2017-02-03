import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Tableasync, Tableheader } from '../src/';
import '../style.css';

class Example extends Component {
    render() {
        return (
            <div>
                <Tableasync url={'https://jsonplaceholder.typicode.com/posts'}>
                    <Tableheader attribute={'title'}>Title</Tableheader>
                    <Tableheader attribute={'body'}>Body</Tableheader>
                </Tableasync>
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Example/>,
        document.querySelector('#react-app')
    );
});
