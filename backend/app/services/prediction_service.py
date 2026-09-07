import pandas as pd

from app.services.model_service import model_service


def calculate_risk_level(
    probability: float,
) -> str:

    if probability < 0.30:
        return "LOW"

    if probability < 0.70:
        return "MEDIUM"

    return "HIGH"


def predict_machine_failure(payload):

    dataframe = pd.DataFrame(
        [
            {
                "Type": payload["Type"],
                "Air temperature [K]": payload["air_temperature"],
                "Process temperature [K]": payload["process_temperature"],
                "Rotational speed [rpm]": payload["rotational_speed"],
                "Torque [Nm]": payload["torque"],
                "Tool wear [min]": payload["tool_wear"],
            }
        ]
    )

    prediction = model_service.predict(dataframe)

    prediction_value = int(prediction[0])

    probability = model_service.predict_probability(dataframe)

    failure_probability = float(probability[0])

    risk_level = calculate_risk_level(failure_probability)

    if prediction_value == 1:

        result = "Machine Failure"

        message = "The model predicts that " "the machine may experience " "a failure."

    else:

        result = "No Machine Failure"

        message = (
            "The model predicts that "
            "the machine is operating "
            "without a predicted failure."
        )

    return {
        "success": True,
        "prediction": prediction_value,
        "result": result,
        "failure_probability": round(
            failure_probability,
            4,
        ),
        "risk_level": risk_level,
        "message": message,
    }
