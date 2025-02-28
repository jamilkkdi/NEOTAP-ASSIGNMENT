from flask import Flask, request, jsonify, render_template
from scraper import fetch_doc_text
import msvcrt


app = Flask(__name__)

# Documentation URLs
DOCS = {
    "segment": "https://segment.com/docs/?ref=nav",
    "mparticle": "https://docs.mparticle.com/",
    "lytics": "https://docs.lytics.com/",
    "zeotap": "https://docs.zeotap.com/home/en-us/"
}

@app.route("/")
def home():
    return render_template("index.html")  # Ensure this correctly loads index.html

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("question", "").lower()

    for cdp, url in DOCS.items():
        if cdp in user_input:
            doc_text = fetch_doc_text(url)
            return jsonify({"response": doc_text[:500]})  # Send first 500 characters of documentation

    return jsonify({"response": "I can only answer questions about Segment, mParticle, Lytics, and Zeotap."})

if __name__ == "__main__":
    app.run(debug=True,port=5000)
    
