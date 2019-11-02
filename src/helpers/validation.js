function validation(field, value) {
  switch (field) {
    case "email":
      const isValid = Boolean(
        value.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      );
      return { isValid, errorText: "Invalid email" };
    default:
  }
}

export default validation;
