# Mój Dom — PWA 0.1

Działający panel demonstracyjny. **Nie pobiera prawdziwych danych Energi**. Przycisk Odśwież wykonuje próbę wywołania adaptera i wyświetla jawny komunikat o braku integracji. Wszystkie wartości energii i kosztów są przykładowe (koszt demonstracyjny: 1,20 zł/kWh).

## Windows — test lokalny

1. Rozpakuj ZIP.
2. Zainstaluj Python ze strony python.org (zaznacz Add Python to PATH), jeśli nie jest zainstalowany.
3. Otwórz PowerShell w folderze `moj-dom` i wykonaj `py -m http.server 8000`.
4. Wejdź na `http://localhost:8000` w przeglądarce. Zatrzymanie: Ctrl+C.

Nie otwieraj `index.html` bezpośrednio z dysku (`file://`), bo moduły JavaScript mogą zostać zablokowane.

## iPhone — darmowa publikacja GitHub Pages

1. Utwórz konto na github.com i nowe **publiczne** repozytorium np. `moj-dom`.
2. Prześlij do głównego katalogu repozytorium pliki z folderu `moj-dom` (nie cały ZIP).
3. W repozytorium wybierz Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save.
4. Otwórz adres podany w Settings → Pages, zwykle `https://TWOJ_LOGIN.github.io/moj-dom/`.
5. Na iPhonie otwórz adres w Safari → Udostępnij → Dodaj do ekranu początkowego.

**Bezpieczeństwo:** repozytorium GitHub Pages jest publiczne. Nigdy nie wpisuj tam haseł, tokenów ani numerów identyfikacyjnych licznika. Ta wersja nie ma formularza logowania.

## Architektura

- `index.html` — widoki i status integracji
- `style.css` — wygląd
- `app.js` — dane demo, wykres, przycisk odświeżania
- `energa-adapter.js` — odizolowany punkt przyszłej integracji
- `sw.js` — cache zasobów PWA, nie jest serwerem do Energi
- `manifest.webmanifest` i `icon.svg` — instalacja na ekranie głównym

## Następny etap

Zweryfikować dokumentację i sposób uwierzytelniania usługi Energa Mój Licznik, politykę CORS, limity i możliwość bezpiecznego pobierania danych bezpośrednio w przeglądarce. Jeśli nie będzie to możliwe, potrzebny będzie bezpieczny pośrednik albo import pliku eksportowanego przez użytkownika. Nie umieszczać danych logowania w kodzie klienta.
