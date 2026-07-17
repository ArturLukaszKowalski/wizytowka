# Wizytówka — Artur Kowalski, Fotograf

Cyfrowa wizytówka opublikowana przez GitHub Pages pod adresem:
**https://arturkowalski.github.io/wizytowka**

## Struktura projektu

```
wizytowka/
├── index.html          # strona główna
├── style.css            # style
├── script.js            # generowanie kodu QR i drobne interakcje
├── kontakt.vcf           # plik do zapisania kontaktu w telefonie
├── assets/
│   ├── profile.jpg       # zdjęcie / logo w kółku na górze
│   ├── logo.png          # logo w wersji z przezroczystym tłem (środek kodu QR)
│   └── favicon.png       # ikona karty w przeglądarce
└── README.md
```

## Jak wgrać na GitHub

1. Skopiuj całą zawartość tego folderu do repozytorium `wizytowka` na koncie `arturkowalski`.
2. Upewnij się, że `index.html` leży bezpośrednio w głównym katalogu repo (nie w podfolderze).
3. W ustawieniach repo: **Settings → Pages → Source → branch `main`, folder `/ (root)`**.
4. Po chwili strona będzie dostępna pod `arturkowalski.github.io/wizytowka`.

## Do uzupełnienia / do zmiany

- **Kod QR** generuje się automatycznie i zawsze prowadzi do adresu strony, na której jest wyświetlany — nie trzeba go podmieniać ręcznie.
- Jeśli chcesz dodać Instagram, Facebook lub e-mail, wystarczy dopisać kolejny `<a class="link-item">` w `index.html` (sekcja `<nav class="links">`) — daj znać, a mogę to zrobić od razu, podając mi linki/adresy.
- Numer telefonu w pliku `kontakt.vcf` i w przycisku "Zadzwoń" jest zapisany jako `+48 663 687 733`.
