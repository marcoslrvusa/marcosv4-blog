# Configurar Newsletter → Google Sheets

## 1. Criar a Planilha
1. Acesse https://sheets.google.com
2. Crie uma nova planilha chamada "Newsletter Leads"
3. Na primeira linha, adicione os cabeçalhos: `email`, `name`, `source`, `subscribedAt`

## 2. Criar o Google Apps Script
1. No menu: **Extensões → Apps Script**
2. Apague o código padrão e cole:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.email,
    data.name || '',
    data.source || '',
    data.subscribedAt || new Date().toISOString(),
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Salve o projeto (nome: "Newsletter Webhook")
4. **Publicar → Implantar como extensão**
5. Em "Quem tem acesso": **Qualquer pessoa**
6. Copie a **URL da Web App** gerada

## 3. Configurar no Vercel
1. No Vercel, vá em **Project Settings → Environment Variables**
2. Adicione: `GOOGLE_SHEETS_WEBHOOK_URL` = URL copiada acima
3. Refaça o deploy

## 4. Testar
Preencha o formulário no blog e verifique se os dados aparecem na planilha.
