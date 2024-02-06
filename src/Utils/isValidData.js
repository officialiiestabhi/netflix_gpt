

const isValidData = (email,password) => {
  const isEmailid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if(!isEmailid)return "Email id is not valid";
  if(!isPass)return "Password is not valid";

  return null;
}

export default isValidData
