import { useCallback } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import BaseNode from "./base/BaseNode";
import NodeBooleanDataRow from "./base/NodeBooleanDataRow";
import { ReplyConfig } from "../../models/ReplyConfig";

export const ReplyNode = (props: NodeProps<ReplyConfig>) => {
  const { id, data } = props;
  const onEphemeralChange = useCallback(() => {}, []);

  return (
    <BaseNode title="Reply" {...props} key={id}>
      <Handle type="target" position={Position.Left} id="trigger" />
      <Handle type="target" position={Position.Top} id="input" />
      <NodeBooleanDataRow label="Ephemeral" value={data.ephemeral} onChange={onEphemeralChange} />
    </BaseNode>
  );
};

export default ReplyNode;
