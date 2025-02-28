import requests
from bs4 import BeautifulSoup

def fetch_doc_text(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
    }

    try:
        # Set a timeout for the request to avoid hanging indefinitely
        response = requests.get(url, headers=headers, timeout=10)  # Timeout after 10 seconds
        
        # Check if the response status is 200 (OK)
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, "html.parser")
            
            # Extract text and clean up excessive whitespace
            doc_text = soup.get_text().strip()  # Trim leading/trailing spaces
            doc_text = ' '.join(doc_text.split())  # Replace multiple spaces with a single one
            
            return doc_text

        else:
            return f"Error: Received status code {response.status_code}"

    except requests.exceptions.RequestException as e:
        # Catch any exceptions related to the request (e.g., connection errors, timeouts)
        return f"Error fetching documentation: {str(e)}"
