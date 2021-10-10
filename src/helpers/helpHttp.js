export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json",
    };
    const controller = new AbortController();
    options.signal = controller.signal;
    options.header = options.header
      ? [...options.header, ...defaultHeader]
      : defaultHeader;

    if (options.body) {
      options.body = JSON.stringify(options.body);
    } else {
      delete options.body;
    }

    //console.log(options);
    setTimeout(() => {
      controller.abort();
    }, 3000);

    return fetch(endpoint, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject({
            err: true,
            status: response.status || "000",
            statusText: response.statusText || "Error ocurred",
          });
        }
      })
      .catch((err) => {
        return Promise.reject({
          err: true,
          status: err.status || "000",
          statusText: err.statusText || "Error ocurred",
        });
      });
  };

  const get = (url, options = {}) => {
    options.method = "GET";
    return customFetch(url, options);
  };

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  return { get, post, del, put };
};
