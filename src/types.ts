// To parse this data:
//
//   import { Convert, ShipupOrders } from "./file";
//
//   const shipupOrders = Convert.toShipupOrders(json);

export interface ShipupOrders {
  object: string;
  data: ShipupOrdersDatum[];
  has_more: boolean;
}

export interface ShipupOrdersDatum {
  object: string;
  id: number;
  created_at: null;
  custom_variables: null;
  email: string;
  first_name: string;
  language_code: string;
  last_name: null;
  merchant_id: string;
  mute_notifications: boolean;
  order_number: string;
  ordered_at: number;
  phone: null;
  updated_at: null;
  uuid: string;
  fulfillments: Fulfillments;
  line_items: Fulfillments;
  notifications: Notifications;
  shipping_address: ShippingAddress;
}

export interface TrackersDatum {
  object: string;
  id: number;
  created_at: number;
  custom_variables: null;
  delivered_at: number | null;
  delivery_status_code: string;
  displayable_expected_delivery_date: null;
  displayable_expected_delivery_datetime: null;
  first_delivery_attempted_at: null;
  mute_notifications: boolean;
  shipped_at: null;
  tracking_link: string;
  tracking_number: string;
  untracked_carrier_name: null;
  untracked_carrier_url: null;
  updated_at: null;
  uuid: string;
  carrier: Carrier;
  carrier_service: Carrier;
  events: Events;
  notifications: Fulfillments;
  line_items: LineItems;
}

export interface Trackers {
  object: string;
  data: TrackersDatum[];
}

export interface FulfillmentsDatum {
  object: string;
  id: number;
  created_at: null;
  custom_variables: null;
  estimated_delivery_range_end: null;
  estimated_delivery_range_start: null;
  fulfillment_number: string;
  merchant_id: string;
  status_code: string;
  updated_at: null;
  uuid: string;
  line_items: Fulfillments;
  shipping_address: ShippingAddress;
  trackers: Trackers;
  notifications: Fulfillments;
}

export interface Fulfillments {
  object: string;
  data: FulfillmentsDatum[];
}

export interface Carrier {
  object: string;
  code: string;
  name: string;
}

export interface Events {
  object: string;
  data: EventsDatum[];
}

export interface EventsDatum {
  object: string;
  id: number;
  event_type_code: null | string;
  happened_at: number;
  message: string;
  raw: string;
  messages: Messages;
  address: null;
}

export interface Messages {
  fr: string;
}

export enum Object {
  List = "list"
}

export interface LineItems {
  object: string;
  data: PurpleDatum[];
}

export interface PurpleDatum {
  object: string;
  id: number;
  canceled: null;
  canceled_quantity: null;
  created_at: number;
  custom_variables: null;
  description: null;
  merchant_id: string;
  name: null;
  quantity: null;
  requires_shipping: null;
  shipped_quantity: null;
  sku: string;
  thumbnail: Thumbnail;
  title: null;
  updated_at: number;
  variant_title: null;
}

export interface Thumbnail {
  src: string;
  width: string;
  height: string;
}

export interface ShippingAddress {
  object: string;
  id: number;
  address1: string;
  address2: null;
  city: string;
  comment: null;
  company_title: null;
  country: string;
  country_code: string;
  first_name: string;
  last_name: string;
  name: string;
  state: null;
  zip: string;
}

export interface Notifications {
  object: string;
  data: FluffyDatum[];
}

export interface FluffyDatum {
  object: string;
  id: number;
  created_at: number;
  language_code: string;
  notification_payloads: NotificationPayloads;
  notification_type: NotificationType;
}

export interface NotificationPayloads {
  object: string;
  data: NotificationPayloadsDatum[];
}

export interface NotificationPayloadsDatum {
  object: string;
  id: number;
  created_at: number;
  dispatched: boolean;
  status: string;
  error: null;
  type: string;
}

export interface NotificationType {
  object: string;
  id: number;
  name: string;
  category: string;
  description: string;
  slug: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toShipupOrders(json: string): ShipupOrders {
    return JSON.parse(json);
  }

  public static shipupOrdersToJson(value: ShipupOrders): string {
    return JSON.stringify(value);
  }
}
