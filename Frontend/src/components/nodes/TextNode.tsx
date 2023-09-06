import { useCallback } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import BaseNode from "./base/BaseNode";
import NodeDataRow from "./base/NodeDataRow";
import { Value } from "../../models/Value";

export const TextNode = (props: NodeProps<Value<string>>) => {
  const { id, data } = props;
  const onValueChange = useCallback(() => {}, []);

  return (
    <BaseNode title="Text" {...props} key={id}>
      <NodeDataRow label="value" value={data.value} onChange={onValueChange} />
      <Handle type="source" position={Position.Right} id="output" />
    </BaseNode>
  );
};

export default TextNode;
