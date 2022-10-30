FROM python:3-alpine
COPY requirements.txt /app/requirements.txt
RUN apk update && \
    apk add  postgresql-libs postgresql-dev gcc python3-dev musl-dev && \
    pip install -r /app/requirements.txt && \
    apk del postgresql-dev gcc python3-dev musl-dev

COPY moviecollection /app
