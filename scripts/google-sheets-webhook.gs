const SPREADSHEET_ID = '1Kwp4CLbY-suqsO0qNcIbVqNv_xoOCEuFrncrVGEuEWQ';
const SHEET_NAME = 'Orders';

const HEADERS = [
  'Submitted At',
  'Full Name',
  'Phone',
  'City',
  'Address',
  'Package',
  'Notes',
];

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    const sheet = getOrdersSheet_();

    sheet.appendRow([
      payload.submittedAt || new Date().toISOString(),
      payload.fullName || '',
      payload.phone || '',
      payload.city || '',
      payload.address || '',
      payload.package || '',
      payload.notes || '',
    ]);

    return jsonResponse_({ ok: true });
  } catch (error) {
    return jsonResponse_({ ok: false, error: String(error) });
  }
}

function doGet() {
  return jsonResponse_({ ok: true });
}

function getOrdersSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  return sheet;
}

function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
