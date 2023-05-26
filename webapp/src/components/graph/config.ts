import json from '@/assets/graph/defaultGraphExample.json';
import { Edge, NodeTypesObject } from '@vue-flow/core';
import { markRaw, Ref, ref } from 'vue';
import { FunctionNode, InputType, RuleIdentifier } from './nodes';
import type { CustomNode, GraphInject, GraphJSON, GraphResetCallback } from './Types';

export const multiSelectKeys = ['Shift', 'Control'];

export const nodeTypes = {
    functionType: markRaw(FunctionNode),
    inputType: markRaw(InputType),
    ruleIdentifier: markRaw(RuleIdentifier),
} as NodeTypesObject;

export function initialGraph(): GraphInject {
    const graph: Ref<GraphJSON> = ref<GraphJSON>(json as GraphJSON);

    const updateGraph = (nodes: Array<CustomNode>, edges: Array<Edge>) => {
        graph.value.elements = [...nodes, ...edges];
    };

    const graphResetCallbacks = Array<GraphResetCallback>();

    const registerResetCallback = (callback: GraphResetCallback) =>
        graphResetCallbacks.push(callback);

    const resetGraph = (toGraph: GraphJSON = { elements: [], resultSets: [], subChecks: [] }) => {
        graph.value = toGraph;
        graphResetCallbacks.forEach(cb => cb());
    };

    return { graph, updateGraph, registerResetCallback, resetGraph };
}
