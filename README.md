# 🧠 AnkyloDetect AI - Image Enhancement for Ankylosing Spondylitis Diagnosis using MRI

This project uses deep learning and image enhancement techniques to assist in the early diagnosis of **Ankylosing Spondylitis (AS)** by analyzing **MRI scans**. It combines **CLAHE preprocessing** with a **VGG16-based Convolutional Neural Network (CNN)** to classify axial spine images as either **AS Diagnosed** or **No AS Detected**.

---

## 🚀 Project Overview

Ankylosing Spondylitis is a progressive inflammatory disease affecting the spine and sacroiliac joints. Early diagnosis is critical but challenging due to subtle early-stage symptoms and low-contrast MRI scans. This system aims to:

- Enhance MRI image quality using CLAHE
- Classify the presence of AS using a fine-tuned VGG16 CNN
- Support radiologists in detecting AS earlier and more accurately

---

## 🚀 Features

🧠 VGG16-based deep learning model fine-tuned for spinal MRI classification

🖼️ Real-time enhancement and analysis of axial spine MRI images

🧑‍⚕️ Ideal for integration in hospital workflows as a radiologist support tool

📊 Generates diagnosis reports and prediction logs

🔐 Secure deployment-ready .keras model suitable for API or web use

📈 Model Performance:

Accuracy: 81%

Precision: 77%

Recall: 88%

AUC: 0.91

F1 Score: 0.80

---

## 🛠️ Tech Stack

| Tier              | Technologies                                                             |
|-------------------|---------------------------------------------------------------------------|
| **Frontend**       | React.js, TypeScript, Vite                                               |
| **Language**       | Python                                                                   |
| **Libraries**      | TensorFlow, Keras, OpenCV, NumPy, Matplotlib                             |
| **Model**          | Pretrained VGG16 with custom Dense layers                                |
| **Preprocessing**  | CLAHE (Contrast Limited Adaptive Histogram Equalization)                 |
| **Training Platform** | Google Colab                                                         |
| **Deployment**     | .keras model (ready for API/Web integration)                             |


---

## 🧠 Model Highlights
Architecture: VGG16 (transfer learning with added classification layers)

Dataset: Axial MRI spine images labeled for AS diagnosis

Preprocessing:

CLAHE (Contrast Limited Adaptive Histogram Equalization)

Image resizing to 224x224

Normalization and advanced augmentation (flip, rotate, shift, zoom)

Evaluation Metrics: Accuracy, Precision, Recall, F1 Score, AUC

Optimization: Tuned using learning rate scheduling and early stopping

---

## 🩺 Use Case
AnkyloDetect MRI is perfect for radiology departments and telemedicine platforms where early AS detection is crucial, but manual interpretation of low-contrast MRIs is time-consuming. It acts as a second-opinion tool, improving diagnostic speed and consistency.

---

## 🧪 Preprocessing Pipeline
Convert MRI image to grayscale (if needed)

Apply CLAHE enhancement

Resize to 224x224

Normalize pixel values (0–1)

Apply augmentation: rotation, shift, zoom, flip

---


## ✅ Future Enhancements
Add Grad-CAM for model explainability

Extend classification to multiple spinal conditions

Integrate with hospital Electronic Health Records (EHR)

---

## 📷 Screenshots
<img width="1919" height="952" alt="Screenshot 2025-03-24 001010" src="https://github.com/user-attachments/assets/9e5cec6e-59bb-44bd-83fe-163a795aefe0" />
<img width="1917" height="946" alt="Screenshot 2025-03-24 001206" src="https://github.com/user-attachments/assets/696a02be-252a-4154-aad7-1d9f0a602ce1" />
<img width="1919" height="946" alt="Screenshot 2025-03-24 001244" src="https://github.com/user-attachments/assets/a2b1cc2a-dc47-444b-81cd-4f3257f2c5b9" />
<img width="1919" height="1019" alt="Screenshot 2025-03-24 001311" src="https://github.com/user-attachments/assets/521326ed-0d68-401a-a56e-f415a3370c9c" />
<img width="959" height="435" alt="image" src="https://github.com/user-attachments/assets/a652401f-8a65-4c2c-b60b-23c71fa34724" />
<img width="959" height="440" alt="image" src="https://github.com/user-attachments/assets/df4d5818-300c-4964-a9c5-bb7d46511711" />
<img width="959" height="437" alt="image" src="https://github.com/user-attachments/assets/43991abd-8dab-4437-a37f-bde7c918dffb" />











---

## 📌 License
This project is for academic and research purposes only.

---

## 🤝 Acknowledgements

Supervised by Mr. Salitha Perera 

Special thanks to domain experts for validating the dataset and application


