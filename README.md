# GreenGuru

GreenGuru is a web app designed for plant classification and parasitic herb detection. Using advanced computer vision models, it accurately identifies 12 types of seedlings, including:

- Black-grass
- Charlock
- Cleavers
- Common Chickweed
- Common wheat
- Fat Hen
- Loose Silky-bent
- Maize
- Scentless Mayweed
- Shepherd's Purse
- Small-flowered Cranesbill
- Sugar beet

This app ensures efficient predictions and reliable results to support agriculture and plant management.

![logo](https://github.com/user-attachments/assets/3d844194-001e-4b3b-9bef-21aebbcbd979)

---

## 🧰 Tech Stack

**Frontend:** Next.js\
**Backend:** Flask\
**Development Environment:** Google Colab\
**Tunneling:** Ngrok\
**Deployment:** Vercel

**Machine Learning Method:** CNN (Convolutional Neural Network)

---

## 📑 Prerequisites

- **GreenGuru-FlaskApp**: [Google Colab Notebook](https://colab.research.google.com/drive/1cQZYiSjab9FcEUCnW63_H2AJ-oCo4jF_?usp=sharing&fbclid=IwZXh0bgNhZW0CMTAAAR36v4yoOgB6I2IWXBzTXhhcaGIpfSH818gCuD6zJCImKL4PvM3ov67K5ZY_aem_X8GU9F1lTc6E6r3HsbbGRg#scrollTo=VjPNKzsYol4G)
- **Ngrok Account**: [Ngrok Website](https://dashboard.ngrok.com/)

---

## 🔥 Features

- Classify plants into 12 categories, as listed above.
- Detect parasitic herbs using machine learning.
- Simple and intuitive interface for plant management.

---

## 🚀 Getting Started

### 1. Create an Ngrok Account

**Ngrok** is used to create a tunnel, connecting the Flask app (running in Google Colab) to the GreenGuru user interface.

1. Visit the [Ngrok Website](https://dashboard.ngrok.com/) and sign up for an account.
2. Go to your dashboard and locate your **Authtoken** under the "Auth" section.
3. Copy the **Authtoken** for later use.

### 2. Setup GreenGuru-FlaskApp

#### 2.1 Open the GreenGuru-FlaskApp

- Open the [GreenGuru-FlaskApp](https://colab.research.google.com/drive/1cQZYiSjab9FcEUCnW63_H2AJ-oCo4jF_?usp=sharing&fbclid=IwZXh0bgNhZW0CMTAAAR36v4yoOgB6I2IWXBzTXhhcaGIpfSH818gCuD6zJCImKL4PvM3ov67K5ZY_aem_X8GU9F1lTc6E6r3HsbbGRg#scrollTo=VjPNKzsYol4G).

#### 2.2 Configure Your GreenGuru-FlaskApp

- Paste your Ngrok **Authtoken** in the designated code section of the notebook.

#### 2.3 Run the GreenGuru-FlaskApp

1. Run the initial part of the notebook.
2. Once executed, an Ngrok URL will be generated (e.g., `https://xyz.ngrok-free.app`). This URL connects your Flask server to the internet.
3. Alternatively, check the running Ngrok Agent on the [Ngrok Agents](https://dashboard.ngrok.com/agents).

### 3. Setup GreenGuru GUI

#### 3.1 Open the GreenGuru GUI

- Open the [GreenGuru GUI](#).

#### 3.2 Enter Details

- Paste the **Ngrok URL** from the previous step into the input field.

### 4. Run the App

- Click **"Connect"** to start classifying plants.
- Upload plant pictures to get real-time classifications.

---

## 🔧 Troubleshooting

- **Flask App Down:** If the Flask app is not running, restart the GreenGuru-FlaskApp in Google Colab (refer to Step 2).
- **Ngrok Issues:** If the Ngrok Agent is down, restart it and regenerate the Ngrok URL.
- **Notebook Crashes:** If the Google Colab notebook crashes, refresh the page and rerun the cells.

---

Enjoy using GreenGuru to classify plants and detect parasitic herbs effortlessly!

## 📝 Authors

- GitHub: [@bensaied](https://www.github.com/bensaied)

## Contributing

Contributions are always welcome! Feel free to fork this repository and submit pull requests.

- [Ghassen Ben Ali](https://github.com/ghassenbenali96)
- [Ikram Loued](https://github.com/Ikramloued)

## 💝 Support

For support, don't forget to leave a star ⭐️.

## ⚖️ License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bensaied/)
