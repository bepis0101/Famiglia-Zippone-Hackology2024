from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import tensorflow as tf
import pandas as pd
import json

app = Flask('api')
CORS(app, resources={r"/predict": {"origins": "*"}}, supports_credentials=True)  # CORS dla ścieżki /predict

MODEL_PATH = "../model/model.h5"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    model = tf.keras.models.load_model(MODEL_PATH)
    df = pd.read_csv('../model/data/miasta.csv')
    row = df.loc[df['Miasto'] == data['city_name']]
    if row.empty:
        return jsonify({'error': 'City not found'}), 404
    row_values = row.values[0].tolist()
    row_values.append(float(data['marketing']))
    prediction = model.predict(np.array(row_values[1::]).reshape(1, -1))
    return jsonify({'prediction': prediction.tolist()})

if __name__ == "__main__":
    app.run()
