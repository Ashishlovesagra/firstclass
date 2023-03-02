
import React, { PureComponent } from 'react'
import Counter from './Counter';
class  PureComp extends PureComponent {
  constructor()
  {
    super();
    this.state={
      count:1
    }
  }
 render()
 {
  return (
    <div>
     <Counter count={this.state.count} />
      <button 
      onClick={()=>{this.setState({count:this.state.count+1})}}
      >Update Count</button>
    </div>
  );
 }
}

export default PureComp;