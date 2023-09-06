import { useCallback } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import BaseNode from "./base/BaseNode";
import NodeDataRow from "./base/NodeDataRow";
import { Command } from "../../models/Command";
import NodeSelectDataRow from "./base/NodeSelectDataRow";
import { applicationCommandTypeOptions } from "../../enum/application-command-type";

const CommandNode = (props: NodeProps<Command>) => {
  const { id, data } = props;
  const onNameChange = useCallback(() => {}, []);
  const onDescriptionChange = useCallback(() => {}, []);
  const onTypeChange = useCallback(() => {}, []);

  return (
    <BaseNode title="Command" {...props} key={id}>
      <NodeDataRow label="Name" value={data.name} onChange={onNameChange} />
      <NodeDataRow label="Description" value={data.description} onChange={onDescriptionChange} />
      <NodeSelectDataRow
        label="Type"
        value={data.type}
        options={applicationCommandTypeOptions}
        onChange={onTypeChange}
      />
      <Handle type="source" position={Position.Right} id="run" />
    </BaseNode>
  );
};

export default CommandNode;
