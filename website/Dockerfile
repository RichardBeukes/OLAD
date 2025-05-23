FROM python:3.11-alpine

WORKDIR /app

RUN apk add --no-cache nginx

COPY . /app

RUN pip install --no-cache-dir -r requirements.txt

RUN mkdir -p /run/nginx
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD sh -c "nginx && python /app/server.py"
