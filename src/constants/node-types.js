import CustomNodeComponent from '../components/custom-node';
import FinishNode from '../components/finish-node';
import StartNode from '../components/start-node';

const nodeTypes = {
    start: StartNode,
    custom: CustomNodeComponent,
    finish: FinishNode
};

export default nodeTypes;