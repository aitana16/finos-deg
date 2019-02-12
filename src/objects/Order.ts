import { Entity } from "./Entity";
import { Trade } from "./Trade";

/**
 * The Order object can be enabled and triggered from a blotter or similar application to place an order.
 */
export interface Order extends Trade {
  requestor: Entity;
  direction: string;
  notional: number;
  startDate: Date;
  endDate: Date;
  rollConvention: string;
}
