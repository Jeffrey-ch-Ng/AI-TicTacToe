from flask import Flask, render_template, jsonify
from array import *

app = Flask(__name__)

 #Array Declarations
array = [['0', '0', '0'], ['0', '0', '0'], ['0', '0', '0']]




 # AI code
def findIndex(row, col):
    if row == 0:
        if col == 0:
            return "#spanA1"
        elif col == 1:
            return "#spanA2"
        else:
            return '#spanA3'
    elif row == 1:
        if col == 0:
            return '#spanB1'
        elif col == 1:
            return '#spanB2'
        else:
            return '#spanB3'
    else:
        if col == 0:
            return '#spanC1'
        elif col == 1:
            return '#spanC2'
        else:
            return '#spanC3'


def AIWin():
    tmpdict = {"boolean": True}

    for x in range(len(array)):
        if(array[x][0] == 'O' and array[x][1] == 'O'):
            array[x][2] = "O"
            changeIndex = findIndex(x, 2)
            tmpdict["changeIndex"] = changeIndex
            return tmpdict
        elif(array[x][0] == 'O' and array[x][2] == 'O'):
            array[x][1] = "O"
            changeIndex = findIndex(x, 1)
            tmpdict["changeIndex"] = changeIndex
            return tmpdict
        elif(array[x][1] == 'O' and array[x][2] == 'O'):
            array[x][0] = "O"
            changeIndex = findIndex(x, 0)
            tmpdict["changeIndex"] = changeIndex
            return tmpdict

        if(array[0][x] == "O" and array[1][x] == "O"):
            array[2][x] = "O"
            changeIndex = findIndex(2, x)
            tmpdict["changeIndex"] = changeIndex
            return tmpdict
        elif(array[0][x] == 'O' and array[2][x] == 'O'):
            array[1][x] = "O"
            changeIndex = findIndex(1, x)
            tmpdict["changeIndex"] = changeIndex
            return tmpdict
        elif(array[1][x] == 'O' and array[2][x] == 'O'):
            array[0][x] = "O"
            changeIndex = findIndex(0, x)
            tmpdict["changeIndex"] = changeIndex
            return tmpdict

    if(array[0][0] == "O" and array[1][1] == "O"):
        array[2][2] = "O"
        changeIndex = findIndex(2, 2)
        tmpdict["changeIndex"] = changeIndex
        return tmpdict
    elif(array[2][2] == "O" and array[1][1] == "O"):
        array[0][0] = "O"
        changeIndex = findIndex(0, 0)
        tmpdict["changeIndex"] = changeIndex
        return tmpdict
    elif(array[0][0] == "O" and array[2][2] == "O"):
        array[1][1] = "O"
        changeIndex = findIndex(1, 1)
        tmpdict["changeIndex"] = changeIndex
        return tmpdict

    if(array[2][0] == "O" and array[1][1] == "O"):
        array[0][2] = "O"
        changeIndex = findIndex(0, 2)
        tmpdict["changeIndex"] = changeIndex
        return tmpdict
    elif(array[2][0] == "O" and array[0][2] == "O"):
        array[1][1] = "O"
        changeIndex = findIndex(1, 1)
        tmpdict["changeIndex"] = changeIndex
        return tmpdict
    elif(array[0][2] == "O" and array[1][1] == "O"):
        array[2][0] = "O"
        changeIndex = findIndex(2, 0)
        tmpdict["changeIndex"] = changeIndex
        return tmpdict

    return tmpdict

def AIBlock():
    tmpdict = {"boolean": True}

    for x in range(len(array)):
        if(array[x][0] == 'X' and array[x][1] == 'X' and array[x][2] != "O"):
            array[x][2] = "O"
            changeIndex = findIndex(x, 2)
            tmpdict["changeIndex"] = changeIndex
            return tmpdict
        elif(array[x][0] == 'X' and array[x][2] == 'X' and array[x][1] != "O"):
            array[x][1] = "O"
            changeIndex = findIndex(x, 1)
            tmpdict["changeIndex"] = changeIndex
            return tmpdict
        elif(array[x][1] == 'X' and array[x][2] == 'X' and array[x][0] != "O"):
            array[x][0] = "O"
            changeIndex = findIndex(x, 0)
            tmpdict["changeIndex"] = changeIndex
            return tmpdict

        if(array[0][x] == "X" and array[1][x] == "X" and array[2][x] != "O"):
            array[2][x] = "O"
            changeIndex = findIndex(2, x)
            tmpdict["changeIndex"] = changeIndex
            return tmpdict
        elif(array[0][x] == 'X' and array[2][x] == 'X' and array[1][x] != "O"):
            array[1][x] = "O"
            changeIndex = findIndex(1, x)
            tmpdict["changeIndex"] = changeIndex
            return tmpdict
        elif(array[1][x] == 'X' and array[2][x] == 'X' and array[0][x] != "O"):
            array[0][x] = "O"
            changeIndex = findIndex(0, x)
            tmpdict["changeIndex"] = changeIndex
            return tmpdict

    if(array[0][0] == "X" and array[1][1] == "X" and array[2][2] != "O"):
        array[2][2] = "O"
        changeIndex = findIndex(2, 2)
        tmpdict["changeIndex"] = changeIndex
        return tmpdict
    elif(array[2][2] == "X" and array[1][1] == "X" and array[0][0] != "O"):
        array[0][0] = "O"
        changeIndex = findIndex(0, 0)
        tmpdict["changeIndex"] = changeIndex
        return tmpdict
    elif(array[0][0] == "X" and array[2][2] == "X" and array[1][1] != "O"):
        array[1][1] = "O"
        changeIndex = findIndex(1, 1)
        tmpdict["changeIndex"] = changeIndex
        return tmpdict

    if(array[2][0] == "X" and array[1][1] == "X" and array[0][2] != "O"):
        array[0][2] = "O"
        changeIndex = findIndex(0, 2)
        tmpdict["changeIndex"] = changeIndex
        return tmpdict
    elif(array[2][0] == "X" and array[0][2] == "X" and array[1][1] != "O"):
        array[1][1] = "O"
        changeIndex = findIndex(1, 1)
        tmpdict["changeIndex"] = changeIndex
        return tmpdict
    elif(array[0][2] == "X" and array[1][1] == "X" and array[2][0] != "O"):
        array[2][0] = "O"
        changeIndex = findIndex(2, 0)
        tmpdict["changeIndex"] = changeIndex
        return tmpdict

    return tmpdict


 #App route functions

def clickFunction():
    check = True
    tmpdict = AIWin()

    check = check and tmpdict.get('boolean')
    changeIndex = tmpdict.get('changeIndex')

    if(check):
        tmpdict = AIBlock()
        changeIndex = tmpdict.get('changeIndex')

    for x in range(len(array)):
        print("")
        for y in range(len(array[x])):
            print(array[x][y]),

    print(changeIndex)
    return changeIndex


@app.route("/")
def index():
    return render_template("TicTacToe.html",
                           A1Text=array[0][0], A2Text=array[0][1], A3Text=array[0][2],
                           B1Text=array[1][0], B2Text=array[1][1], B3Text=array[1][2],
                           C1Text=array[2][0], C2Text=array[2][1], C3Text=array[2][2]
    )


@app.route("/A1")
def a1_click():
    if(array[0][0] == '0'):
        array[0][0] = "X"
        changeIndex = clickFunction()
        A1Text = array[0][0]
        data = {
            "text": A1Text,
            "change": changeIndex
        }
        index()
        return jsonify(data)
    return "nothing"



@app.route("/A2")
def a2_click():
    if(array[0][1] == '0'):
        array[0][1] = "X"
        changeIndex = clickFunction()
        A2Text = array[0][1]
        data = {
            "text": A2Text,
            "change" : changeIndex
        }
        return jsonify(data)
    return "nothing"


@app.route("/A3")
def a3_click():
    if(array[0][2] == '0'):
        array[0][2] = "X"
        changeIndex = clickFunction()
        A3Text = array[0][2]
        data = {
            "text": A3Text,
            "change" : changeIndex
        }
        return jsonify(data)
    return "nothing"


@app.route("/B1")
def b1_click():
    if(array[1][0] == '0'):
        array[1][0] = "X"
        changeIndex = clickFunction()
        B1Text = array[1][0]
        data = {
            "text": B1Text,
            "change" : changeIndex
        }
        return jsonify(data)
    return "nothing"


@app.route("/B2")
def b2_click():
    if(array[1][1] == '0'):
        array[1][1] = "X"
        changeIndex = clickFunction()
        B2Text = array[1][1]
        data = {
            "text": B2Text,
            "change" : changeIndex
        }
        return jsonify(data)
    return "nothing"


@app.route("/B3")
def b3_click():
    if(array[1][2] == '0'):
        array[1][2] = "X"
        changeIndex = clickFunction()
        B3Text = array[1][2]
        data = {
            "text": B3Text,
            "change" : changeIndex
        }
        return jsonify(data)
    return "nothing"


@app.route("/C1")
def c1_click():
    if(array[2][0] == '0'):
        array[2][0] = "X"
        changeIndex = clickFunction()
        C1Text = array[2][0]
        data = {
            "text": C1Text,
            "change" : changeIndex
        }
        return jsonify(data)
    return "nothing"


@app.route("/C2")
def c2_click():
    if(array[2][1] == '0'):
        array[2][1] = "X"
        changeIndex = clickFunction()
        C2Text = array[2][1]
        data = {
            "text": C2Text,
            "change" : changeIndex
        }
        return jsonify(data)
    return "nothing"


@app.route("/C3")
def c3_click():
    if(array[0][0] == '0'):
        array[2][2] = "X"
        changeIndex = clickFunction()
        C3Text = array[2][2]
        data = {
            "text": C3Text,
            "change" : changeIndex
        }
        return jsonify(data)
    return "nothing"


if __name__ == "__main__":
    app.run(debug=True)