export const loginValidation = value => {
  const errors = {};
  const requiredFields = ['email', 'password'];
  const needLonger = 'Cần dài hơn';
  requiredFields.forEach(field => {
    if (!value[field]) {
      errors[field] = 'Bắt buộc';
    }
  });
  if (value.email && !validateEmail(value.email)) {
    errors.email = 'Email không hợp lệ!';
  }
  if (value.password && value.password.lenght < 6) {
    errors.password = needLonger;
  }
};

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
