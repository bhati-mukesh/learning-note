from flask import Flask,request,json,render_template,redirect,url_for
from flask_cors import CORS

# associated with tut17

employees = [{"name":"Rohini","dateOfBirth":"april 23,1980","gender":"Female","salary":25000},
            {"name":"Anuja","dateOfBirth":"march 28,1963","gender":"Female","salary":25000},
            {"name":"Shubhm","dateOfBirth":"November 01,1960","gender":"Male","salary":25000},
            {"name":"Mukesh","dateOfBirth":"january 15,1988","gender":"Male","salary":25000}
            ]

countries = [{"name":"INDIA","cities":[{"name":"Mumbai"},{"name":"Delhi"},{"name":"Pune"}]},
             {"name":"USA","cities":[{"name":"New York"},{"name":"Houston"},{"name":"Philadelphia"}]},
             {"name":"UK","cities":[{"name":"London"},{"name":"Manchestar"},{"name":"Liverpool"}]}
            ]

app = Flask(__name__)
CORS(app)

@app.route('/getData',methods=["GET"])
def getData():
    return {"data":employees}

@app.route('/getCountries',methods=["GET"])
def getCountries():
    return {"data":countries}

@app.route('/')
def home():
    return render_template()

if __name__ == '__main__':
    app.run(debug=True,port=5001,host= '0.0.0.0')