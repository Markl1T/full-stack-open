```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: { "content": "HTML is easy", "date": "2023-1-1" }
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```