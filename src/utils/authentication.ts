import Keycloak from 'keycloak-js'

import { config as environment } from '@config/environnement'

export const keycloak = new Keycloak({
  realm: environment.REALM,
  url: environment.URL,
  clientId: environment.CLIENTID,
})

export const updateToken: () => Promise<string | undefined> = () => {
  return new Promise((resolve, reject) => {
    keycloak
      .updateToken(14400)
      .then(() => {
        resolve(keycloak.token)
      })
      .catch(error => {
        reject(error)
      })
  })
}