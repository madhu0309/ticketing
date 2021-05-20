import nats, { Stan } from 'node-nats-streaming';

class NatsWrapper {
  private _client?: Stan;

  get client() {
    if (!this._client) {
      throw new Error('Cannot access NATS client before connecting');
    }

    return this._client;
  } 

  connect(cluserid: string, clientId: string, url: string): Promise<void> {
    this._client = nats.connect(cluserid, clientId, { url });


    return new Promise((resolve, reject) => {
      this.client.on('connect', () => {
        console.log('Connected to NATS');
        resolve();
      });
      this.client.on('error', (err) => {
        console.log('error occured while connecting');
        reject(err);
      });
    })
  }
}

export const natsWrapper = new NatsWrapper();