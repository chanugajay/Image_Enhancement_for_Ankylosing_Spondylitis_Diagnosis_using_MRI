# 🧠 Image Enhancement for Ankylosing Spondylitis Diagnosis using MRI

This project uses deep learning and image enhancement techniques to assist in the early diagnosis of **Ankylosing Spondylitis (AS)** by analyzing **MRI scans**. It combines **CLAHE preprocessing** with a **VGG16-based Convolutional Neural Network (CNN)** to classify axial spine images as either **AS Diagnosed** or **No AS Detected**.

---

## 🚀 Project Overview

Ankylosing Spondylitis is a progressive inflammatory disease affecting the spine and sacroiliac joints. Early diagnosis is critical but challenging due to subtle early-stage symptoms and low-contrast MRI scans. This system aims to:

- Enhance MRI image quality using CLAHE
- Classify the presence of AS using a fine-tuned VGG16 CNN
- Support radiologists in detecting AS earlier and more accurately

---

## 🏗️ Architecture

[Input MRI Image]
        ↓
[CLAHE Enhancement]
        ↓
[Rescale & Augment Image]
        ↓
[VGG16-based CNN Classifier]
        ↓
[Diagnosis Output: AS / No AS]



🛠️ Tech Stack
Language: Python

Libraries: TensorFlow, Keras, OpenCV, NumPy, Matplotlib

Model: Pretrained VGG16 + custom Dense layers

Preprocessing: CLAHE (Contrast Limited Adaptive Histogram Equalization)

Training Platform: Google Colab

Deployment-Ready: .keras model saved for API/web integration

📊 Model Performance
Metric	Value
Accuracy	81%
AUC	0.91
Precision	0.77
Recall	0.88
F1 Score	0.80

🧪 Preprocessing Pipeline
Convert MRI image to grayscale (if needed)

Apply CLAHE enhancement

Resize to 224x224

Normalize pixel values (0–1)

Apply augmentation: rotation, shift, zoom, flip



✅ Future Enhancements
Add Grad-CAM for model explainability

Extend classification to multiple spinal conditions

Deploy as a web/mobile app

Integrate with hospital Electronic Health Records (EHR)

📌 License
This project is for academic and research purposes only.

🤝 Acknowledgements

Supervised by Mr. Pasindu Marambe 
Special thanks to domain experts for validating the dataset and application


