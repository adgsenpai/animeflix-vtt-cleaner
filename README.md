![](./animeflix.png)

# VTT File Cleaner

This Node.js application provides an easy way to remove HTML tags from VTT (Web Video Text Tracks) files. It uses Express.js for the web server and Axios for fetching VTT files from provided URLs.

## Features

- **Clean VTT Files**: Removes all HTML tags from VTT files.
- **Fetch from URL**: Allows users to input a URL to a VTT file and returns a cleaned version.
- **Demo Endpoint**: A demo endpoint to test the application with a sample VTT file.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/your-repository/vtt-file-cleaner.git
   ```
2. Navigate to the cloned directory:
   ```
   cd vtt-file-cleaner
   ```
3. Install the necessary packages:
   ```
   npm install
   ```

### Running the Server

To start the server, run:
```
npm start
```
The server will start on `http://localhost:3000`.

## Usage

### Cleaning a VTT File from URL

Send a GET request to `/clean-vtt` with a query parameter `url` containing the VTT file's URL. For example:
```
http://localhost:3000/clean-vtt?url=http://example.com/path-to-vtt.vtt
```

### Using the Demo Endpoint

You can test the application using the demo endpoint:
```
http://localhost:3000/demo
```
This will return a cleaned version of a sample VTT file located in the `example` directory.

## Handling Errors

The application handles errors gracefully and will provide relevant error messages in case of issues like fetching errors or invalid URLs.