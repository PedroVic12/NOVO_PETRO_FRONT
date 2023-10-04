import os
import speech_recognition as sr
import pyttsx3
import whisper


class TextToSpeech:
    def __init__(self, voice_id="brazil", rate=180):
        self.engine = pyttsx3.init()
        self.voices = self.engine.getProperty("voices")
        self.set_voice(voice_id)
        self.set_rate(rate)

    def set_voice(self, voice_id):
        for voice in self.voices:
            if voice_id.lower() in voice.id.lower():
                self.engine.setProperty("voice", voice.id)
                return
        raise ValueError("Voz não encontrada.")

    def set_rate(self, rate):
        self.engine.setProperty("rate", rate)

    def speak(self, text):
        self.engine.say(text)
        self.engine.runAndWait()


class SpeechToText:
    def __init__(self, stt_type="google", filename="audio.wav"):
        self.stt_type = stt_type
        self.filename = filename
        self.r = sr.Recognizer()
        self.mic = sr.Microphone()

    def save_audio(self, audio_data):
        with open(self.filename, "wb") as file:
            file.write(audio_data)
            file.flush()
            file.close()
            return self.filename

    def save_file(self, audio_data):
        with open(self.filename, "wb") as file:
            file.write(audio_data)

    def recognize_speech(self):
        text = ""
        question = ""

        with self.mic as source:
            self.r.adjust_for_ambient_noise(source)
            print("Fale alguma coisa")
            audio = self.r.listen(source)
            print("Enviando para reconhecimento")

            if self.stt_type == "google":
                question = self.r.recognize_google(audio, language="pt-BR")
            elif self.stt_type == "whisper":
                self.save_file(audio.get_wav_data())

        # if self.stt_type == "whisper":
        # text = model.transcribe(
        #    os.getcwd() + self.filename, language="pt", fp16=False
        # )
        # question = text["text"]

        return question


class C3PO:
    def __init__(self, voice_id="brazil", stt_type="google"):
        self.tts = TextToSpeech(voice_id)
        self.stt = SpeechToText(stt_type)
        self.mensagens = [
            {
                "role": "system",
                "content": "Eu sou seu  assistente gente boa. E meu nome é C3PO!",
            }
        ]

    def lerArquivoTxt(self, file_path):
        with open(file_path, "r") as file:
            text = file.read()
        return text

    def generate_answer(self, question):
        # Lógica para gerar a resposta
        # Aqui você pode substituir pelo seu código existente

        return "Resposta gerada pelo ChatGPT"

    def run(self):
        while True:
            question = self.stt.recognize_speech()

            if (
                "desligar" in question and "assistente" in question
            ) or question.startswith("sair"):
                print(question, "Saindo.")
                self.tts.speak("Desligando")
                break
            elif question == "":
                print("No sound")
                continue
            elif (
                question.startswith("Assistente")
                or question.startswith("assistente")
                or question.startswith("chat GPT")
            ):
                print("Me:", question)
                self.mensagens.append({"role": "user", "content": str(question)})

                answer = self.generate_answer(question)

                print("C3PO:", answer)

                self.mensagens.append({"role": "assistant", "content": answer})

                self.tts.speak(answer)
            else:
                print("No message")
                continue


if __name__ == "__main__":
    assistant = C3PO(voice_id="brazil", stt_type="google")
    assistant.run()

print("See ya!")
