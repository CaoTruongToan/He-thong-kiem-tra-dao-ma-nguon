import {ComparisonListElement} from "./ComparisonListElement";

/**
 * Metric used in the Comparison
 */
export type Metric = {
    metricName: string,
    description: string,
    metricThreshold: number,
    distribution: Array<number>,
    comparisons: Array<ComparisonListElement>
}