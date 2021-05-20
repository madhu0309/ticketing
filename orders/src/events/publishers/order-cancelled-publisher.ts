import { OrderCancelledEvent, Publisher, Subjects } from '@mgnode/common';


export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}