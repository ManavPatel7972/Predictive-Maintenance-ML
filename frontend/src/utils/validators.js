export const validateMachine = (data) => {
  const errors = {};

  if (!data.Type) {
    errors.Type = "Machine type is required.";
  }

  const air = Number(data.air_temperature);

  if (!data.air_temperature || air < 295 || air > 305) {
    errors.air_temperature = "Enter air temperature between 295K and 305K.";
  }

  const process = Number(data.process_temperature);

  if (!data.process_temperature || process < 305 || process > 315) {
    errors.process_temperature =
      "Enter process temperature between 305K and 315K.";
  }

  const speed = Number(data.rotational_speed);

  if (!data.rotational_speed || speed < 1000 || speed > 3000) {
    errors.rotational_speed =
      "Enter rotational speed between 1000 and 3000 rpm.";
  }

  const torque = Number(data.torque);

  if (data.torque === "" || torque < 0 || torque > 80) {
    errors.torque = "Enter torque between 0 and 80 Nm.";
  }

  const wear = Number(data.tool_wear);

  if (data.tool_wear === "" || wear < 0 || wear > 300) {
    errors.tool_wear = "Enter tool wear between 0 and 300 minutes.";
  }

  return errors;
};
