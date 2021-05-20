import { Publisher, Subjects, TicketCreatedEvent } from '@mgnode/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
