from pathlib import Path
import pickle
from flask import Flask, render_template, request
import pandas as pd
import os

BASE_DIR = Path(__file__).resolve().parent

app = Flask(__name__)
car = pd.read_csv(os.path.join(BASE_DIR, 'cleaned_car_data.csv'))

model_path = os.path.join(BASE_DIR, 'LinerModelCar.pkl')
model = pickle.load(open(model_path, 'rb'))

def get_form_options():
    companies = sorted(car['company'].dropna().unique())
    car_models = sorted(car['name'].dropna().unique())
    years = sorted(car['year'].dropna().unique(), reverse=True)
    fuel_types = sorted(car['fuel_type'].dropna().unique())
    return companies, car_models, years, fuel_types


@app.route('/')
def index():
    companies, car_models, years, fuel_types = get_form_options()
    return render_template(
        'index.html',
        car_models=car_models,
        companies=companies,
        year=years,
        fuel_type=fuel_types
    )


@app.route('/predict', methods=['POST'])
def predict_price():
    company = request.form.get('company')
    car_model = request.form.get('car_model')
    year = int(request.form.get('year'))
    fuel_type = request.form.get('fuel_type')
    kms_driven = int(request.form.get('kms_driven'))

    prediction = model.predict(pd.DataFrame([[company,car_model,year,fuel_type,kms_driven]],columns=['company','name','year','fuel_type','kms_driven']))

    return str(prediction[0])

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False) 