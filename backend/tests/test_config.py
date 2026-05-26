from app.config import DEFAULT_CORS_ORIGINS, get_cors_origins


def test_get_cors_origins_uses_default(monkeypatch):
    monkeypatch.delenv("CORS_ORIGINS", raising=False)

    assert get_cors_origins() == list(DEFAULT_CORS_ORIGINS)


def test_get_cors_origins_parses_comma_separated_values(monkeypatch):
    monkeypatch.setenv(
        "CORS_ORIGINS",
        "http://localhost:5173, http://localhost:3000,https://example.com",
    )

    assert get_cors_origins() == [
        "http://localhost:5173",
        "http://localhost:3000",
        "https://example.com",
    ]


def test_get_cors_origins_ignores_empty_values(monkeypatch):
    monkeypatch.setenv("CORS_ORIGINS", "http://localhost:5173,,  ,http://localhost:3000")

    assert get_cors_origins() == ["http://localhost:5173", "http://localhost:3000"]
