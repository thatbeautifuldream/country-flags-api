# Country Flags API

A robust RESTful API service that provides information about country flags with support for both flat and shiny flag styles.

## 🚀 Features

- Get flags for all countries
- Support for both flat and shiny flag styles
- Country-specific flag retrieval using country codes
- Secure API with rate limiting
- CORS enabled
- Production-ready security features

## 🛠️ Tech Stack

- Node.js
- Express.js
- Security Middleware:
  - Helmet (Security headers)
  - CORS
  - Rate Limiting
- Morgan (Request logging)
- Environment Variables Support

## 📋 Prerequisites

- Node.js (v12 or higher)
- pnpm or yarn
- Git

## 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/country-flags-api.git
   cd country-flags-api
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory:

   ```env
   PORT=3000
   ```

4. Start the server:

   ```bash
   pnpm start
   ```

## 🔌 API Endpoints

### Base URL

```bash
http://localhost:3000
```

### Available Routes

| Method | Endpoint                        | Description                                 |
| ------ | ------------------------------- | ------------------------------------------- |
| GET    | `/`                             | Welcome page with API information           |
| GET    | `/api/flags`                    | Get all country flags                       |
| GET    | `/api/flags/:countryCode`       | Get flag by country code                    |
| GET    | `/api/flags/flat/all`           | Get all flat-style flags                    |
| GET    | `/api/flags/shiny/all`          | Get all shiny-style flags                   |
| GET    | `/api/flags/flat/:countryCode`  | Get flat-style flag for a specific country  |
| GET    | `/api/flags/shiny/:countryCode` | Get shiny-style flag for a specific country |

### Example Response

```json
{
  "message": "Welcome to the Country Flags API",
  "version": "1.0.0",
  "description": "An API service providing information about country flags with support for both flat and shiny flag styles",
  "available_routes": {
    "GET /": "This information page",
    "GET /api/flags": "Get all country flags",
    "GET /api/flags/:countryCode": "Get flag by country code",
    "GET /api/flags/flat/all": "Get all flat-style flags",
    "GET /api/flags/shiny/all": "Get all shiny-style flags",
    "GET /api/flags/flat/:countryCode": "Get flat-style flag for a specific country",
    "GET /api/flags/shiny/:countryCode": "Get shiny-style flag for a specific country"
  },
  "rate_limit": "100 requests per 15 minutes",
  "documentation": "https://github.com/thatbeautifuldream/country-flags-api"
}
```

## 🔒 Security Features

1. **Rate Limiting:**

   - 100 requests per 15 minutes per IP
   - Prevents abuse and ensures fair usage

2. **Security Headers (Helmet):**

   - Protection against common web vulnerabilities
   - XSS protection
   - Content Security Policy
   - And more...

3. **CORS:**
   - Cross-Origin Resource Sharing enabled
   - Configurable for production environments

## 🚦 Error Handling

The API implements a centralized error handling mechanism with appropriate HTTP status codes:

- 404: Resource not found
- 429: Too many requests (Rate limit exceeded)
- 500: Internal server error

## 💻 Development

### Running in Development Mode

```bash
pnpm run dev
```

### Environment Variables

Create a `.env` file with the following variables:

```env
PORT=3000
# Add other environment variables as needed
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, please open an issue in the GitHub repository.
