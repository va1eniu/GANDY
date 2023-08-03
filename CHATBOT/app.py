""" 
Este código es una implementación básica de un chatbot utilizando Flask, una biblioteca de Python para crear aplicaciones web. El chatbot es capaz de recibir mensajes de los usuarios a través de una interfaz web y proporcionar respuestas en función de los patrones de lenguaje aprendidos previamente. Está basado en un modelo de aprendizaje automático desarrollado con Keras y TensorFlow, entrenado con un conjunto de datos etiquetados almacenado en el archivo 'intents.json'. El bot utiliza técnicas de procesamiento de lenguaje natural (NLP) para entender el mensaje del usuario y predecir una categoría (intención) para la consulta. Luego, selecciona una respuesta aleatoria asociada a esa categoría y la devuelve al usuario. """


from flask import Flask, render_template, request, jsonify
import json
import numpy as np
import pickle
from keras.models import load_model
import random
import nltk
from nltk.stem import WordNetLemmatizer
import tensorflow as tf

app = Flask(__name__, static_url_path='/static')

lemmatizer = WordNetLemmatizer()

with open('intents.json') as file:
    intents = json.load(file)

words = pickle.load(open('words.pkl', 'rb'))
classes = pickle.load(open('classes.pkl', 'rb'))
model = load_model('chatbot_model.h5')

def clean_up_sentence(sentence):
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words = [lemmatizer.lemmatize(word) for word in sentence_words]
    return sentence_words

def bag_of_words(sentence):
    sentence_words = clean_up_sentence(sentence)
    bag = [0] * len(words)
    for w in sentence_words:
        for i, word in enumerate(words):
            if word == w:
                bag[i] = 1
    return np.array(bag)

def predict_class(sentence):
    bow = bag_of_words(sentence)
    res = model.predict(np.array([bow]))[0]
    max_index = np.argmax(res)
    category = classes[max_index]
    return category

def get_response(intents_json, tag):
    list_of_intents = intents_json['intents']
    result = ""
    for i in list_of_intents:
        if i["tag"] == tag:
            result = random.choice(i['responses'])
            break
    return result

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_response', methods=['POST'])
def get_bot_response():
    user_message = request.form['user_message']
    intent = predict_class(user_message)
    bot_response = get_response(intents, intent)
    return jsonify({'response': bot_response})

if __name__ == '__main__':
    app.run(debug=True)