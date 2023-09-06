import { ReactNode } from "react";
import { NodeToolbar } from "reactflow";

type BaseNodeToolbarProps = {
  children?: ReactNode;
  onDeleteClicked?: () => void;
};

const BaseNodeToolbar = ({ children, onDeleteClicked }: BaseNodeToolbarProps) => {
  return (
    <NodeToolbar>
      <button onClick={onDeleteClicked}>delete</button>
      {children}
    </NodeToolbar>
  );
};

export default BaseNodeToolbar;
