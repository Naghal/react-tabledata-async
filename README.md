# react-tabledata-async

###### By Nicolas Boisvert :: nicklay@me.com

### Asynchronous tabledata for lazyloading datas

Basically built on [react-tabledata](https://github.com/nicklayb/react-tabledata), it allows you to display async data in the table. It also allow you to lazyload only parts of your whole data instead of loading everything

## Installation

I recommand a npm installation by :
```
npm install --save react-tabledata-async
```

## Examples

This is a concrete example of how you can use it with the [JSONPlaceholder test api](https://jsonplaceholder.typicode.com/).

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Tableasync, Tableheader } from '../src/';

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
```

### Tableasync

The `Tabledata` component is the table container. It requires at least a `url` attribute matching your API. You can pass it a `method` attribute but it's a `GET` request by default. You can also pass in two function for adding request data with `requestData` or adding request headers with `requestHeaders`. In both case, the function you use receives the object that'll be sent. All you have to do is append your properties to it.

### Tableheader

The `Tableheader` matches all the `<th>` tags you'll want. If you want it to display the value of an object attribute, you pass in the `attribute` attribute. In the example, you can see that with have 3 `Tableheader` with attribute and 2 computed header. You can also pass in an attribute `renderCell` that will render each cell of the header.

## Conclusion

Thank you for using, testing and improving it and feel free to contact me for any question.

Ending joke :
> How do you telle HTML from HTML5? - Try it out in Internet Explorer. - Did it work?. - No?. - It's HTML5.
