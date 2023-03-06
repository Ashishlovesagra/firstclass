import React, { PureComponent } from 'react';

class Counter extends PureComponent{
    render()
    {
        console.log("rerender")
        return(
            <div>
                <h1>Counter Component : {this.props.count}</h1>
            </div>
        )
    }
}

export default Counter;