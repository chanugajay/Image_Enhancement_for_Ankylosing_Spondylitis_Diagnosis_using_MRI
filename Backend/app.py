from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np
import cv2
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enables CORS for all routes

# Load the trained model
model_path = "D:/Final Year/FYP/Ankylosing Spondylitis Application/Backend/ankylosing_spondylitis_vgg16_model_Final_2.keras"
model = load_model(model_path)

# Image dimensions
IMG_HEIGHT = 224
IMG_WIDTH = 224

def enhance_image(img):
    if len(img.shape) == 3 and img.shape[-1] == 3:  # RGB image
        img = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)  # Convert to grayscale
    img = np.uint8(img)
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    enhanced_img = clahe.apply(img)
    enhanced_img = cv2.cvtColor(enhanced_img, cv2.COLOR_GRAY2RGB)
    return enhanced_img.astype(np.float32)

def predict_image(image_path):
    img = load_img(image_path, target_size=(IMG_HEIGHT, IMG_WIDTH))
    img_array = img_to_array(img)
    img_array = enhance_image(img_array)  # Enhance image
    img_array = img_array / 255.0  # Rescale pixel values
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension

    prediction = model.predict(img_array)
    predicted_class = (prediction > 0.5).astype(int)[0][0]
    return "Yes" if predicted_class == 0 else "No"

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        app.logger.error("No file part in the request")
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['image']
    if file.filename == '':
        app.logger.error("Empty filename")
        return jsonify({"error": "Empty filename"}), 400
    app.logger.info(f"Received file: {file.filename}")
    # Process the file here
    

    # Save the uploaded file
    upload_folder = "uploads"
    os.makedirs(upload_folder, exist_ok=True)
    file_path = os.path.join(upload_folder, file.filename)
    file.save(file_path)

    # Predict using the model
    try:
        result = predict_image(file_path)
        return jsonify({"prediction": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        os.remove(file_path)  # Clean up uploaded file

if __name__ == '__main__':
    app.run(debug=True)
