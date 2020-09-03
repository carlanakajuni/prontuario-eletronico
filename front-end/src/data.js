export const apiQueixas = () => {
  return fetch('https://assina-prontuario.herokuapp.com/queixas')
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
        .catch(error => error)
    ));
}

export const apiDoencas = () => {
  return fetch('https://assina-prontuario.herokuapp.com/doencas')
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
        .catch(error => error)
    ));
}