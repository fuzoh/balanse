FROM python:3.11-alpine

COPY . /app

WORKDIR /app

# Install dependencies
RUN pip3 install --no-cache -r requirements.txt

EXPOSE 3337
# Start flask dev server
CMD ["python3", "main.py"]
