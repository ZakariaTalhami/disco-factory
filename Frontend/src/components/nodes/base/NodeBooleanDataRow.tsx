import { ChangeEventHandler } from "react";
import styled from "styled-components";

const NodeBooleanDataRowWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

type NodeBooleanDataRowProps = {
  label: string;
  value: boolean;
  onChange?: ChangeEventHandler;
};

function NodeBooleanDataRow({ label, value, onChange }: NodeBooleanDataRowProps) {
  return (
    <NodeBooleanDataRowWrapper>
      <label htmlFor={label}>{label}:</label>
      <input
        id={label}
        name={label}
        type="checkbox"
        checked={value}
        onChange={onChange}
        className="nodrag"
      />
    </NodeBooleanDataRowWrapper>
  );
}

export default NodeBooleanDataRow;
