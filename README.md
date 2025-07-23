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



---

## 📌 License
This project is for academic and research purposes only.

---

## 🤝 Acknowledgements

Supervised by Mr. Salitha Perera 

Special thanks to domain experts for validating the dataset and application


