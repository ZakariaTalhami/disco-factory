import { create } from "zustand";
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";

const initialNodes: Node[] = [
  {
    id: "id_command_node",
    data: { name: "say_hello", description: "Says Hello", type: 1 },
    position: { x: 5, y: 5 },
    type: "command",
  },
  {
    id: "id_text_node",
    data: { value: "Hello there!" },
    position: { x: 150, y: -150 },
    type: "text",
  },
  {
    id: "id_reply_node",
    data: { ephemeral: true },
    position: { x: 500, y: 100 },
    type: "reply",
  },
];

const initialEdges: Edge[] = [
  {
    source: "id_text_node",
    sourceHandle: "output",
    target: "id_reply_node",
    targetHandle: "input",
    id: "reactflow__edge-id_text_nodeoutput-id_reply_nodeinput",
  },
  {
    source: "id_command_node",
    sourceHandle: "run",
    target: "id_reply_node",
    targetHandle: "trigger",
    id: "reactflow__edge-id_command_noderun-id_reply_nodetrigger",
  },
];

export type RFState = {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
};

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<RFState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
}));

export default useStore;
