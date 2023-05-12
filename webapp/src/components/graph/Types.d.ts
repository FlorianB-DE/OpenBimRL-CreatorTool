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

export type Operator = 'equals' | 'or' | 'and';

export interface RulesOrRuleSet {
    label: string;
    type: string;
    quantifier: string;
    operator: Operator;
    operand1: string;
    operand2: string;
    rulesOrRuleSets: RulesOrRuleSets;
}

export type RulesOrRuleSets = Array<RulesOrRuleSet>;

export type SubChecks = Array<{
    label: string;
    name: string;
    applicability: Array<any>;
    rulesOrRuleSets: RulesOrRuleSets;
    resultSets: [];
}>;

export interface Rule {
    id: string;
    name: string;
    color: string;
    items: Array<CustomNode>;
}

export type RuleSet = Array<Rule>;