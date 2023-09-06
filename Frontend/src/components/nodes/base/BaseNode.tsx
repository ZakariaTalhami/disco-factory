import { ReactNode, useCallback } from "react";
import CustomNode from "./CustomNode";
import NodeHeader from "./NodeHeader";
import NodeBody from "./NodeBody";
import { NodeProps, useReactFlow } from "reactflow";
import BaseNodeToolbar from "./BaseNodeToolbar";

type BaseNodeProps = {
  title: string;
  children: ReactNode;
};

function BaseNode({ title, children, ...props }: BaseNodeProps & NodeProps) {
  const reactFlowInstance = useReactFlow();
  
  const onDeleteNode = useCallback(() => {
    const node = reactFlowInstance.getNode(props.id);
    if (node) {
      reactFlowInstance.deleteElements({
        nodes: [node],
      });
    }
  }, []);

  return (
    <CustomNode {...props}>
      <BaseNodeToolbar onDeleteClicked={onDeleteNode} />
      <NodeHeader>{title}</NodeHeader>
      <NodeBody>{children}</NodeBody>
    </CustomNode>
  );
}

export default BaseNode;
