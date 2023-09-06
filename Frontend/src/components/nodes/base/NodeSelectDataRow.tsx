import { ChangeEventHandler } from "react";
import styled from "styled-components";

const NodeSelectDataRowWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

type SelectOption = {
  text: string;
  value: string | number;
};

type NodeDateRowProps = {
  label: string;
  value: any;
  options: SelectOption[];
  onChange?: ChangeEventHandler;
};

function NodeSelectDataRow({ label, value, options, onChange }: NodeDateRowProps) {
  options ||= [];
  return (
    <NodeSelectDataRowWrapper>
      <label htmlFor={label}>{label}:</label>
      <select id={label} name={label} value={value} className="nodrag" onChange={onChange}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.text}</option>
        ))}
      </select>
    </NodeSelectDataRowWrapper>
  );
}

export default NodeSelectDataRow;
