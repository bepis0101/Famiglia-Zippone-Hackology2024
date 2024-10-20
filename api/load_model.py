from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import tensorflow as tf
import pandas as pd
import json
import joblib

app = Flask('api')
CORS(app, resources={r"/predict": {"origins": "*"}}, supports_credentials=True)  # CORS dla ścieżki /predict

MODEL_PATH = "../model/model.h5"
SCALER_PATH = "../model/scaler.pkl"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    model = tf.keras.models.load_model(MODEL_PATH)
    scaler = joblib.load(SCALER_PATH)
    df = pd.read_csv('../model/data/miasta.csv')
    row = df.loc[df['Miasto'] == data['city_name']]
    if row.empty:
        return jsonify({'error': 'City not found'}), 404
    row_values = row.values[0].tolist()
    row_values.append(float(data['marketing']))

    model_input = scaler.transform(np.array(row_values[1::]).reshape(1, -1))
    prediction = model.predict(model_input)
    return jsonify({'prediction': prediction.tolist()[0][0] * 1e6})

if __name__ == "__main__":
    app.run()
