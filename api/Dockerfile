FROM python:3.8-slim

RUN apt-get update && apt-get install -y postgresql-client libpq-dev python3-dev gcc

WORKDIR /app/

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8080

CMD ["gunicorn", "playscapes.wsgi", "--bind", "0.0.0.0:8080", "--workers", "2"]