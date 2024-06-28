import requests
import json
import logging
from config import Config

# Configurar o logger
logging.basicConfig(level=logging.INFO, filename='notion_client.log',
                    format='%(asctime)s %(levelname)s:%(message)s')

class NotionClient:
    def __init__(self):
        self.token = Config.NOTION_TOKEN
        self.database_id = Config.DATABASE_ID
        self.headers = {
            "Authorization": f"Bearer {self.token}",
            "Content-Type": "application/json",
            "Notion-Version": "2022-06-28"  # Atualizamos a versão da API
        }

    def _make_request(self, method, url, **kwargs):
        """
        Helper function to make HTTP requests to the Notion API.
        """
        try:
            response = requests.request(method, url, headers=self.headers, **kwargs)
            response.raise_for_status()  # Levanta um erro para status de resposta 4xx/5xx
            return response.json()
        except requests.exceptions.HTTPError as http_err:
            error_message = f"HTTP error occurred: {http_err}. Response: {response.text}"
            logging.error(error_message)
            return {"status": "error", "message": error_message, "code": response.status_code}
        except Exception as err:
            error_message = f"Other error occurred: {err}"
            logging.error(error_message)
            return {"status": "error", "message": error_message, "code": 500}

    def read_database(self):
        """
        Read and return the contents of the database.
        """
        read_url = f"https://api.notion.com/v1/databases/{self.database_id}/query"
        return self._make_request("POST", read_url)

    def create_page(self, title, text):
        """
        Create a new page in the Notion database with the given title and text.
        """
        create_url = 'https://api.notion.com/v1/pages'
        new_page_data = {
            "parent": {"database_id": self.database_id},
            "properties": {
                "Nome": {
                    "title": [
                        {
                            "text": {
                                "content": title
                            }
                        }
                    ]
                },
                "Texto": {
                    "rich_text": [
                        {
                            "text": {
                                "content": text
                            }
                        }
                    ]
                }
            }
        }
        data = json.dumps(new_page_data)
        response = self._make_request("POST", create_url, data=data)
        return response

    def update_page(self, page_id, title, text):
        """
        Update an existing page in the Notion database with the given title and text.
        """
        update_url = f"https://api.notion.com/v1/pages/{page_id}"
        update_data = {
            "properties": {
                "Nome": {
                    "title": [
                        {
                            "text": {
                                "content": title
                            }
                        }
                    ]
                },
                "Texto": {
                    "rich_text": [
                        {
                            "text": {
                                "content": text
                            }
                        }
                    ]
                }
            }
        }
        data = json.dumps(update_data)
        response = self._make_request("PATCH", update_url, data=data)
        return response
