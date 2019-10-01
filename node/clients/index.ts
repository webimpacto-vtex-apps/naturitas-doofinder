import { IOClients } from '@vtex/api'

import Doofinder from './Doofinder'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('doofinder', Doofinder)
  }
}