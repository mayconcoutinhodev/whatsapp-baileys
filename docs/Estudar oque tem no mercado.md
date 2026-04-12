
https://github.com/WhiskeySockets/Baileys

As mais usadas atualmente:

### 1. Evolution API

- Open source.
    
- Muito usada no Brasil.
    
- Suporte a **multi-instância** (vários números).
    
- Fácil deploy com **Docker**.
    
- Integração REST simples.
    

Arquitetura comum:  
Sistema → Evolution → WhatsApp Web (emulado) → WhatsApp.

### 2. Baileys

- Biblioteca **Node.js**.
    
- Muito usada por devs.
    
- Mais baixo nível (você monta a API).
    
- Estável para bots e automações.
    

### 3. WPPConnect

- Baseado em **WhatsApp Web JS**.
    
- Possui SDK + REST.
    
- Comunidade menor que Evolution.
    

### 4. WhatsApp-web.js

- Biblioteca popular em Node.
    
- Simples para bots.
    
- Bastante usada em projetos pequenos.
    

### 5. APIs prontas pagas (não oficiais)

Exemplos:

- Z-API
    
- Whapi
    
- Api-wa
    

São basicamente wrappers dessas bibliotecas com painel e hospedagem.


Problemas comuns dessas APIs:

- número pode ser **banido permanentemente**
    
- **instabilidade** quando o WhatsApp muda algo
    
- bloqueios automáticos em disparos grandes
    

### Resumo técnico

Se for **desenvolvedor**:

- melhor stack hoje: **Baileys ou Evolution API**
    

Se quiser **painel pronto**:

- Z-API
    
- Whapi
    

Se quiser, posso listar também **as mais usadas para disparo em massa** ou **as que menos tomam ban**. Isso muda bastante.