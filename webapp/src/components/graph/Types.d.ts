import type { Node } from '@vue-flow/core';

export interface NodeData<InputConnectorType = unknown, OutputConnectorType = unknown> {
    name: string;
    icon: string;
    description: string;
    label: string;
    selected: boolean;
    inputs: Array<InputConnectorType>;
    outputs: Array<OutputConnectorType>;
}

interface BaseConnectorType {
    index: string;
}

interface FunctionNodeConnectorType extends BaseConnectorType {
    name: string;
}

interface InputNodeConnectorType extends FunctionNodeConnectorType {
    value: string;
}

export type FunctionNodeData = NodeData<FunctionNodeConnectorType, FunctionNodeConnectorType>;

export type InputNodeData = NodeData<never, InputNodeConnectorType>;

export type RuleIdentifierNodeData = NodeData<BaseConnectorType, BaseConnectorType>;

export type CustomNode = Node<NodeData<unknown, unknown>>;
