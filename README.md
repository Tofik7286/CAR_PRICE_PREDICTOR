# Car Price Predictor

A simple web application that predicts car prices using machine learning. Enter your car details and get an estimated resale value instantly.

## Features

- **Modern Web Interface**: Clean and responsive design works on all devices
- **Real-time Prediction**: Get price prediction instantly on the same page
- **Simple Form**: Just fill 5 fields and click predict
- **Input Fields**:
  - Company (Car brand like Ford, Maruti, etc.)
  - Model (Car type and variant)
  - Year (Purchase year)
  - Fuel Type (Petrol, Diesel, CNG)
  - Kilometers Driven (Total distance driven)
- **Instant Results**: Price appears on the same page without page refresh
- **Mobile Friendly**: Works perfectly on phones and tablets

## Project Structure

```
Car Price Predictor Project/
│
├── ml_model/                    # Machine Learning folder
│   ├── code.ipynb               # Jupyter notebook with model training
│   ├── quikr_car.csv            # Original dataset
│   ├── cleaned_car_data.csv     # Processed data
│   └── LinerModelCar.pkl        # Trained ML model
│
├── webapp/                       # Web application
│   ├── app.py                   # Flask server code
│   ├── cleaned_car_data.csv     # Data for dropdown options
│   ├── LinerModelCar.pkl        # Model file
│   ├── templates/
│   │   └── index.html           # Web page HTML
│   └── static/
│       ├── css/
│       │   └── index.css        # Styling
│       └── js/
│           └── index.js         # Form interaction
│
└── .venv/                       # Python virtual environment
```

## Installation Guide

### Step 1: Install Python
- Download Python 3.8 or higher from https://www.python.org
- Make sure to check "Add Python to PATH" during installation

### Step 2: Open Terminal/Command Prompt
Navigate to the webapp folder:
```bash
cd "Car Price Predictor Project\webapp"
```

### Step 3: Create Virtual Environment
```bash
# Windows
python -m venv .venv
.venv\Scripts\activate

# Mac/Linux
python3 -m venv .venv
source .venv/bin/activate
```

### Step 4: Install Required Packages
```bash
pip install flask pandas numpy scikit-learn
```

## How to Run

### 1. Navigate to webapp folder
```bash
cd "Car Price Predictor Project\webapp"
```

### 2. Activate virtual environment
```bash
# Windows
.venv\Scripts\activate

# Mac/Linux
source .venv/bin/activate
```

### 3. Start the Flask application
```bash
python app.py
```

### 4. Open in browser
- Open your web browser
- Go to: http://localhost:5000
- The application will load

## How to Use

1. **Select Company**: Choose the car brand (Ford, Maruti, Honda, etc.)
2. **Select Model**: Pick the car model
3. **Select Year**: Choose the year of purchase
4. **Select Fuel Type**: Pick Petrol, Diesel, or CNG
5. **Enter Kilometers**: Type how many kilometers the car has driven
6. **Click Predict Price**: The estimated price will appear below the form

## Component Details

### Backend (app.py)

The Flask server handles two main routes:

- **GET /** - Shows the main webpage with dropdown options from the dataset
- **POST /predict** - Receives form data, uses the ML model to predict price, and returns the result

### Frontend (HTML/CSS/JavaScript)

**index.html**
- Form structure with 5 input fields
- Modern layout split into two sections: title and form
- Result display area below the form

**index.css**
- Modern design with gradient backgrounds
- Smooth animations for form elements
- Responsive layout for mobile and desktop
- Color scheme: Teal green and warm gold accents
- Rounded corners and soft shadows for modern look

**index.js**
- Intercepts form submission
- Sends data to Flask server using Fetch API
- Validates kilometer input
- Displays results on the same page
- Shows loading state while predicting

### Machine Learning Model

**code.ipynb** - Jupyter Notebook containing:
- Data loading and exploration
- Data cleaning (removing null values, formatting)
- Feature engineering
- Model training using Linear Regression
- Model saving as pickle file

**LinerModelCar.pkl** - The trained model that:
- Takes 5 features: company, model, year, fuel type, kilometers
- Outputs predicted car price

## Technology Stack

| Component | Technology |
|-----------|-----------|
| Backend | Python with Flask |
| Data Processing | Pandas and NumPy |
| Machine Learning | Scikit-learn |
| Frontend | HTML5 |
| Styling | CSS3 |
| Interactivity | JavaScript (Fetch API) |

## How It Works

```
1. User fills form and clicks predict
   ↓
2. JavaScript collects form data
   ↓
3. Data sent to Flask server (POST request)
   ↓
4. Flask receives data and creates a DataFrame
   ↓
5. ML model predicts the price
   ↓
6. Flask returns the prediction number
   ↓
7. JavaScript formats the number (Rs. format with commas)
   ↓
8. Price displays on the page instantly
```

## Important Notes

1. **Virtual Environment Required**: Always activate `.venv` before running the app
2. **Port 5000**: Flask uses port 5000 by default
3. **Files Must Be Together**: Keep model and CSV files in the same folder as app.py
4. **Debug Mode**: Debug mode is ON, so changes reload automatically

## Common Errors and Solutions

### Error: "No module named 'flask'"
**Solution:**
```bash
pip install flask pandas numpy scikit-learn
```

### Error: "Address already in use"
**Solution:**
- Another app is using port 5000
- Press Ctrl+C to stop the current Flask app
- Wait a few seconds and restart

### Error: "File not found: cleaned_car_data.csv"
**Solution:**
- Make sure you are running the app from the webapp folder
- Check that the CSV file is in the same folder as app.py

### Error: "Port 5000 not opening"
**Solution:**
- Check that Flask is running in the terminal (look for "Running on http://localhost:5000")
- Try refreshing the browser
- Check your firewall settings

## Learning Outcomes

By studying this project, you can learn:

1. **Flask Basics**: Creating routes, handling requests, rendering templates
2. **Frontend-Backend Communication**: Form submission, Fetch API, request/response
3. **Machine Learning**: Training models, making predictions, saving/loading models
4. **Web Design**: Creating responsive layouts, CSS styling, animations
5. **Data Processing**: Cleaning data, preparing features for ML models
6. **Project Organization**: File structure and best practices

## Future Enhancements

Possible improvements to make the project better:

1. Add a database to store prediction history
2. Create charts showing price trends by year
3. Compare multiple ML models
4. Add advanced filtering and search
5. Build a mobile app version
6. Add user authentication
7. Deploy online (Heroku, AWS, etc.)

## Project Files Explained

| File | Purpose |
|------|---------|
| app.py | Main Flask application server |
| index.html | Web page structure |
| index.css | Styling for the webpage |
| index.js | Form handling and interaction |
| LinerModelCar.pkl | Saved ML model for predictions |
| cleaned_car_data.csv | Dataset for dropdown options |
| code.ipynb | Model training notebook |

## Getting Help

If you face any issues:
1. Check the error message carefully
2. Look for the solution in "Common Errors" section above
3. Check that all files are in the correct locations
4. Make sure Python version is 3.8 or higher

## Requirements

- Python 3.8 or higher
- Flask 2.0 or higher
- Pandas 1.0 or higher
- NumPy 1.20 or higher
- Scikit-learn 0.24 or higher

These are installed automatically when you run:
```bash
pip install flask pandas numpy scikit-learn
```

## License

This is a learning project. Feel free to use and modify for educational purposes.

## Author Notes

This project is perfect for beginners who want to learn:
- How to build a real web application
- How to connect frontend with backend
- How to use machine learning in a practical way
- How to organize a Python project

Happy Learning! 🚗
