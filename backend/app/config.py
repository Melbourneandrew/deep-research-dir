import os


DEFAULT_CORS_ORIGINS = ("http://localhost:5173",)


def get_cors_origins() -> list[str]:
    """
    Return CORS origins from the CORS_ORIGINS environment variable.

    CORS_ORIGINS accepts a comma-separated list, for example:
    http://localhost:5173,http://localhost:3000
    """
    raw_origins = os.getenv("CORS_ORIGINS")
    if not raw_origins:
        return list(DEFAULT_CORS_ORIGINS)

    origins = [origin.strip() for origin in raw_origins.split(",")]
    return [origin for origin in origins if origin]
