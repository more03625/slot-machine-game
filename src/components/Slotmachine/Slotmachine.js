import Trueresponse from './Trueresponse';
import Falseresponse from './Falseresponse';

const SlotM = (props) => {
    // console.log(props);
    let {x, y, z} = props;
    if(x===y && y===z){
      return <Trueresponse  x={props.x} y={props.y} z={props.x}/>
    }else{
      return <Falseresponse x={props.x} y={props.y} z={props.x} />
    }
  }
  export default SlotM;