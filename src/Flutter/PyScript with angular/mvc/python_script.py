#!/usr/bin/env python3


from flask import Flask, jsonify
import sys
import os


class PythonTools:
    @staticmethod
    def get_python_version():
        return sys.version

    @staticmethod
    def get_current_directory():
        return os.getcwd()

    @staticmethod
    def get_hello_message():
        return "Hello from Python!"


#==========================================

tools = PythonTools()
app = Flask(__name__)


@app.route('/hello')
def hello():
    return jsonify(message=tools.get_hello_message())


@app.route('/version')
def version():
    return jsonify(version=tools.get_python_version())


@app.route('/cwd')
def cwd():
    return jsonify(directory=tools.get_current_directory())


if __name__ == "__main__":
    app.run(debug=True)
